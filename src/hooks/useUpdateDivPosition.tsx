/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
<<<<<<<< HEAD:src/hooks/useUpdateDivPosition.tsx
import dispatchResizingEvent from "../components/apps/utils/dispatchResizingEvent";
========
import dispatchResizingEvent from "../apps/utils/dispatchResizingEvent";
>>>>>>>> 3dc54207ff97cc63f972d86421994f825440a827:src/components/hooks/useUpdateDivPosition.tsx

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
    if(currentResizableDivRef === null) return;
    
    const currentDimensions = currentResizableDivRef.getBoundingClientRect();

    setDynamicStyle({
      width: currentDimensions.width + "px",
      height: currentDimensions.height + "px",
      top: currentDimensions.top + "px",
      left: currentDimensions.left + "px",
      transform: "none",
    });

    dispatchResizingEvent(currentResizableDivRef, {
      width: currentDimensions.width,
      height: currentDimensions.height,
    });
  }, [updateDivPosition]);
}
