import {
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  CSSProperties,
} from "react";

export default function useFullscreenEffect(
  currentResizableDivRef: any,
  setDynamicStyle: Dispatch<SetStateAction<CSSProperties>>,
  setUpdateDivPosition: Dispatch<SetStateAction<boolean>>,
  fullscreen?: boolean,
) {
  const [previousWiondowPosition, setPreviousWindowPosition] =
    useState<DOMRect | null>(null);

  useEffect(() => {
    if (fullscreen) {
      setPreviousWindowPosition(currentResizableDivRef.getBoundingClientRect());
      setDynamicStyle({
        width: "calc(100% + 20px)",
        height: "calc(100% - 25px)",
        top: "-10px",
        left: "-10px",
        transform: "none",
      });
    } else {
      if (previousWiondowPosition !== null) {
        setDynamicStyle({
          width: previousWiondowPosition!.width + "px",
          height: previousWiondowPosition!.height + "px",
          top: previousWiondowPosition!.top + "px",
          left: previousWiondowPosition!.left + "px",
          transform: "none",
        });

        setUpdateDivPosition((prevState: boolean) => !prevState);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullscreen]);
}
