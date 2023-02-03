import { useEffect, useState } from "react";
import verifyWindowPosition from "../../utils/Applications/verifyWindowPosition";

interface Offset {
  left: string;
  top: string;
}

export default function useWindowMovingEffect(
  currentWindowBarRef: any,
  mouseIsPressed: boolean,
  setMouseIsPressed: React.Dispatch<React.SetStateAction<boolean>>,
  isFullscreen: boolean
) {
  const [originalOffset, setOriginalOffset] = useState<Offset>();
  const [forceFirstRerender, setForceFirstRerender] = useState(false);

  useEffect(() => {
    if (currentWindowBarRef == null) return;

    const refOffsetParent = currentWindowBarRef.offsetParent;
    const refStyle = refOffsetParent.style;

    const handleMouseMovement = (event): void => {
      event.preventDefault();
      if (mouseIsPressed) {
        refStyle.left = refOffsetParent.offsetLeft + event.movementX + "px";
        refStyle.top = refOffsetParent.offsetTop + event.movementY + "px";
      }
    };

    if (mouseIsPressed && !isFullscreen) {
      document.onpointerup = () => setMouseIsPressed(false);
      document.onpointermove = (event) => {
        event.stopPropagation();
        handleMouseMovement(event);
      };

      return () => {
        const newWindowPos = refOffsetParent.getBoundingClientRect();

        if (verifyWindowPosition(newWindowPos)) {
          refStyle.top = originalOffset!.top;
          refStyle.left = originalOffset!.left;
        } else {
          setOriginalOffset({
            left: refOffsetParent.offsetLeft + "px",
            top: refOffsetParent.offsetTop + "px",
          });
        }
        document.onpointerup = (event) => {
          event.preventDefault();
        };

        document.onpointermove = (event) => {
          event.preventDefault();
        };
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mouseIsPressed, isFullscreen]);

  useEffect(() => {
    setForceFirstRerender(true); // We force the first render to get the original offset of the window after the ref is set
  }, []);

  useEffect(() => {
    // This useEffect is used to get the original offset of the window at the first render
    if (currentWindowBarRef === undefined) return;

    const refStyle = currentWindowBarRef.offsetParent.getBoundingClientRect();

    setOriginalOffset({
      left: `${refStyle.left}px`,
      top: `${refStyle.top}px`,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forceFirstRerender]);
}
