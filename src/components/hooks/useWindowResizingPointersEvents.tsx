import { Dispatch, SetStateAction, useEffect } from "react";
<<<<<<<< HEAD:src/hooks/useWindowResizingPointersEvents.tsx
import verifyWindowPosition from "../components/apps/utils/verifyWindowPosition";
import { Coordinates, WindowSize } from "../components/apps/types";
========
import verifyWindowPosition from "../apps/utils/verifyWindowPosition";
import { Coordinates, WindowSize } from "../apps/types/types";
>>>>>>>> 3dc54207ff97cc63f972d86421994f825440a827:src/components/hooks/useWindowResizingPointersEvents.tsx

export default function useWindowResizingPointersEvents(
  currentResizableDivRef: HTMLDivElement,
  originalWindowOffset: Coordinates | null,
  originalWindowSize: WindowSize | null,
  pointerPressed: boolean,
  setPointerPressed: Dispatch<SetStateAction<boolean>>,
  handlePointerMove: (event: PointerEvent) => void,
) {
  useEffect(() => {
    if (pointerPressed) {
      document.onpointermove = (event) => handlePointerMove(event);
      document.onpointerup = () => setPointerPressed(false);

      return () => {
        // Reposition window if it's outside of the screen

        const windowPos = currentResizableDivRef.getBoundingClientRect();
        const refStyle = currentResizableDivRef.style;

        const windowIsOutsideOfScreen = verifyWindowPosition(windowPos);

        if (windowIsOutsideOfScreen) {
          resetWindowPosition(
            refStyle,
            originalWindowOffset!,
            originalWindowSize!
          );
        }

        cleanUpPointerEvents();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pointerPressed]);
}

function resetWindowPosition(
  refStyle: CSSStyleDeclaration,
  originalWindowOffset: Coordinates,
  originalWindowSize: WindowSize
) {
  refStyle.left = originalWindowOffset!.x + "px";
  refStyle.top = originalWindowOffset!.y + "px";
  refStyle.width = originalWindowSize!.width + "px";
  refStyle.height = originalWindowSize!.height + "px";
}

function cleanUpPointerEvents() {
  document.onpointermove = () => {
    return false;
  };
  document.onpointerup = () => {
    return false;
  };
}
