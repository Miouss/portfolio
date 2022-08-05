import { useState, useEffect, useRef } from "react";

interface Props {
  className?: string;
  minWidth: number;
  minHeight: number;
  zIndexValue?: string;
  display?: string;
  onFocus?: () => void;
  children: JSX.Element | JSX.Element[];
}

interface Coordinates {
  x: number;
  y: number;
}

interface PointerOffsetRelative {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

interface WindowSize {
  width: number;
  height: number;
}

type PointerPosition =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight";

type PointerCursor =
  | "ns-resize"
  | "ew-resize"
  | "nwse-resize"
  | "nesw-resize"
  | "default";

export function ResizableDiv({
  className,
  minWidth,
  minHeight,
  zIndexValue = "1",
  display = "flex",
  onFocus = undefined,
  children,
}: Props) {
  const resizableDivRef = useRef<HTMLDivElement>(null);
  const [pointerPressed, setPointerPressed] = useState<boolean>(false);

  const [originalWindowOffset, setOriginalWindowOffset] =
    useState<Coordinates | null>(null);
  const [pointerOffsetRelative, setPointerOffsetRelative] =
    useState<PointerOffsetRelative | null>(null);

  const [originalWindowSize, setOriginalWindowSize] =
    useState<WindowSize | null>(null);

  const [cursor, setCursor] = useState<PointerCursor>("default");

  const [pointerPosition, setPointerPosition] =
    useState<PointerPosition | null>(null);

  const switchCursor = (newCursor: PointerCursor) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    cursor === newCursor ? null : setCursor(newCursor);
  };

  const resizeWindow = (event) => {
    const areaToResize = pointerPosition!
      .split(/(?=[A-Z])/)
      .map((value) => value.toLowerCase());

    const resize = {
      left: {
        offsetLeft:
          originalWindowOffset!.x +
          (event.x - originalWindowOffset!.x) -
          pointerOffsetRelative!.left +
          "px",
        width:
          originalWindowSize!.width -
          (event.x - originalWindowOffset!.x - pointerOffsetRelative!.left) +
          "px",
      },
      right: {
        width:
          originalWindowSize!.width +
          (event.x -
            originalWindowSize!.width -
            pointerOffsetRelative!.right -
            originalWindowOffset!.x) +
          "px",
      },
      top: {
        offsetTop:
          originalWindowOffset!.y +
          (event.y - originalWindowOffset!.y) -
          pointerOffsetRelative!.top +
          "px",
        height:
          originalWindowSize!.height -
          (event.y - originalWindowOffset!.y - pointerOffsetRelative!.top) +
          "px",
      },
      bottom: {
        height:
          originalWindowSize!.height +
          (event.y -
            originalWindowSize!.height -
            pointerOffsetRelative!.bottom -
            originalWindowOffset!.y) +
          "px",
      },
    };
    areaToResize.forEach((area) => {
      if (parseInt(resize[area!].width) < minWidth) {
        resize[area!].width = minWidth + "px";
      } else {
        resizableDivRef.current!.style.left = resize[area!].offsetLeft;
      }

      if (parseInt(resize[area!].height) < minHeight) {
        resize[area!].height = minHeight + "px";
      } else {
        resizableDivRef.current!.style.top = resize[area!].offsetTop;
      }

      resizableDivRef.current!.style.width = resize[area!].width;
      resizableDivRef.current!.style.height = resize[area!].height;
    });
  };

  const handlePointerMove = (event) => {
      if (pointerPressed) {
        if (cursor !== "default") {
          resizeWindow(event);
        }
      } else {
        const pointerOffset = {
          left: event.clientX - resizableDivRef.current!.offsetLeft,
          top: event.clientY - resizableDivRef.current!.offsetTop,
          bottom:
            resizableDivRef.current!.offsetHeight -
            (event.clientY - resizableDivRef.current!.offsetTop),
          right:
            resizableDivRef.current!.offsetWidth -
            (event.clientX - resizableDivRef.current!.offsetLeft),
        };

        const currentPointerPosition = {
          topLeft: {
            position: pointerOffset.left <= 10 && pointerOffset.top <= 10,
            cursor: "nwse-resize",
          },
          topRight: {
            position: pointerOffset.right <= 10 && pointerOffset.top <= 10,
            cursor: "nesw-resize",
          },
          bottomLeft: {
            position: pointerOffset.left <= 10 && pointerOffset.bottom <= 10,
            cursor: "nesw-resize",
          },
          bottomRight: {
            position: pointerOffset.right <= 10 && pointerOffset.bottom <= 10,
            cursor: "nwse-resize",
          },
          top: {
            position: pointerOffset.left > 10 && pointerOffset.top <= 10,
            cursor: "ns-resize",
          },
          bottom: {
            position: pointerOffset.right > 10 && pointerOffset.bottom <= 10,
            cursor: "ns-resize",
          },
          left: {
            position: pointerOffset.left <= 10 && pointerOffset.top > 10,
            cursor: "ew-resize",
          },
          right: {
            position: pointerOffset.right <= 10 && pointerOffset.bottom > 10,
            cursor: "ew-resize",
          },
        };

        let areaFound = false;

        for (let area in currentPointerPosition) {
          if (currentPointerPosition[area].position && !areaFound) {
            setPointerPosition(area as PointerPosition);
            switchCursor(currentPointerPosition[area].cursor);
            areaFound = true;
          }
        }

        if (!areaFound) {
          setPointerPosition(null);
          switchCursor("default");
        }
      }
  };

  const handlePointerPressed = (event) => {
    const windowBoundingClientRect =
      resizableDivRef!.current!.getBoundingClientRect();
    setOriginalWindowOffset({
      x: resizableDivRef!.current!.offsetLeft as number,
      y: resizableDivRef!.current!.offsetTop as number,
    });
    setPointerOffsetRelative({
      top: event.pageY - windowBoundingClientRect.top,
      right: event.pageX - windowBoundingClientRect.right,
      bottom: event.pageY - windowBoundingClientRect.bottom,
      left: event.pageX - windowBoundingClientRect.left,
    });
    setOriginalWindowSize({
      width: windowBoundingClientRect.width,
      height: windowBoundingClientRect.height,
    });
    setPointerPressed(true);
  };

  useEffect(() => {
    if (pointerPressed) {
      document.onpointermove = (event) => handlePointerMove(event);
      document.onpointerup = () => setPointerPressed(false);

      const resizableDivRefCurrent = resizableDivRef.current!;
      return () => {
        const windowPos = resizableDivRefCurrent.getBoundingClientRect();

        if(windowPos.top < 0 || windowPos.bottom > document.documentElement.clientHeight || windowPos.left < 0 || windowPos.right > document.documentElement.clientWidth){
          resizableDivRefCurrent.style.left = originalWindowOffset!.x + "px";
          resizableDivRefCurrent.style.top = originalWindowOffset!.y + "px";
          resizableDivRefCurrent.style.width = originalWindowSize!.width + "px";
          resizableDivRefCurrent.style.height = originalWindowSize!.height + "px";
        }
          document.onpointermove = () => {
          return false;
        };
        document.onpointerup = () => {
          return false;
        };
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pointerPressed]);

  return (
    <div
      ref={resizableDivRef}
      className={className}
      tabIndex={-1}
      style={{
        cursor: cursor,
        display: display,
        zIndex: zIndexValue,
        width: minWidth + "px",
        height: minHeight + "px",
      }}
      onPointerMove={(event) => {
        handlePointerMove(event);
      }}
      onPointerDown={(event) => handlePointerPressed(event)}
      onPointerUp={() => setPointerPressed(false)}
      onFocus={onFocus}
    >
      {children}
    </div>
  );
}
