import { useEffect, useState } from "react";
import verifyWindowPosition from "../utils/verifyWindowPosition";

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
  }, [mouseIsPressed]);

  useEffect(() => {
    if (currentWindowBarRef == null) return;

    const refOffsetParent = currentWindowBarRef.offsetParent;

    setOriginalOffset({
      left: refOffsetParent.offsetLeft + "px",
      top: refOffsetParent.offsetTop + "px",
    });
  }, [currentWindowBarRef]);
}