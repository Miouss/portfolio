import { useEffect, useState } from "react";

interface Offset {
  left: string;
  top: string;
}

export default function useWindowMovingEffect(
  currentWindowBarRef: any,
  mouseIsPressed: boolean,
  setMouseIsPressed: React.Dispatch<React.SetStateAction<boolean>>
) {
  const [originalOffset, setOriginalOffset] = useState<Offset>();

  useEffect(() => {
    if (currentWindowBarRef == null) return;

    const refOffsetParent = currentWindowBarRef.offsetParent;

    if (refOffsetParent == null) return;

    const windowPos = refOffsetParent.getBoundingClientRect();
    const refStyle = refOffsetParent.style;

    const handleMouseMovement = (event): void => {
      event.preventDefault();
      if (mouseIsPressed) {
        refStyle.left = refOffsetParent.offsetLeft + event.movementX + "px";
        refStyle.top = refOffsetParent.offsetTop + event.movementY + "px";
      }
    };

    if (mouseIsPressed) {
      document.onpointerup = () => setMouseIsPressed(false);
      document.onpointermove = (event) => {
        event.stopPropagation();
        handleMouseMovement(event);
      };

      return () => {
        if (
          windowPos.top < -30 ||
          windowPos.bottom >
            document.documentElement.clientHeight + windowPos.height / 2 ||
          windowPos.left < -(windowPos.width / 2) ||
          windowPos.right >
            document.documentElement.clientWidth + windowPos.width / 2
        ) {
          refStyle.top = originalOffset!.top;
          refStyle.left = originalOffset!.left;
        }

        document.onpointerup = (event) => {
          event.preventDefault();
        };

        document.onpointermove = (event) => {
          event.preventDefault();
        };
      };
    } else {
      setOriginalOffset({
        left: refOffsetParent.offsetLeft + "px",
        top: refOffsetParent.offsetTop + "px",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mouseIsPressed]);
}
