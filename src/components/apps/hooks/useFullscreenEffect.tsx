import {
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  CSSProperties,
} from "react";

import checkResponsiveness from "../utils/checkResponsiveness";

import { useAppDispatch, setWindowResponsiveFont } from "../../../redux";

export default function useFullscreenEffect(
  currentResizableDivRef: any,
  setDynamicStyle: Dispatch<SetStateAction<CSSProperties>>,
  setUpdateDivPosition: Dispatch<SetStateAction<boolean>>,
  fullscreen?: boolean,
) {
  const [previousWindowPosition, setPreviousWindowPosition] =
    useState<DOMRect | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    
    if (fullscreen) {
      checkResponsiveness(window.innerWidth, dispatch, setWindowResponsiveFont);
      setPreviousWindowPosition(currentResizableDivRef.getBoundingClientRect());
      setDynamicStyle({
        width: `${window.innerWidth + 20}px`,
        height: `${window.innerWidth - 25}px`,
        top: "-10px",
        left: "-10px",
        transform: "none",
      });
    } else {
      if (previousWindowPosition !== null) {
        checkResponsiveness(previousWindowPosition.width, dispatch, setWindowResponsiveFont);
        setDynamicStyle({
          width: previousWindowPosition!.width + "px",
          height: previousWindowPosition!.height + "px",
          top: previousWindowPosition!.top + "px",
          left: previousWindowPosition!.left + "px",
          transform: "none",
        });

        setUpdateDivPosition((prevState: boolean) => !prevState);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [fullscreen]);
}
