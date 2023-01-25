/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Dispatch, SetStateAction, CSSProperties } from "react";

export default function useUpdateDivPosition(
  currentResizableDivRef: HTMLDivElement | null,
  updateDivPosition: boolean,
  setUpdateDivPosition: Dispatch<SetStateAction<boolean>>,
  setDynamicStyle: Dispatch<SetStateAction<CSSProperties>>
) {
  useEffect(() => {
    setUpdateDivPosition((prevState) => !prevState);
  }, []);

  useEffect(() => {
    if (currentResizableDivRef === null) return;

    const currentDimensions = currentResizableDivRef.getBoundingClientRect();
    
    setDynamicStyle({
      width: currentDimensions.width + "px",
      height: currentDimensions.height + "px",
      top: currentDimensions.top + "px",
      left: currentDimensions.left + "px",
      transform: "none",
    });
  }, [updateDivPosition]);
}
