import { Dispatch, SetStateAction, useEffect } from "react";

export default function useOpenOnLeftClick(
  refContainer: React.RefObject<HTMLDivElement>,
  state: boolean | undefined,
  setState: Dispatch<SetStateAction<boolean | undefined>>
) {
  useEffect(() => {
    if (state || !refContainer.current) return;

    const open = (e: MouseEvent) => {
      e.stopImmediatePropagation();
      document.dispatchEvent(new Event("click")); // trigger others menu's click away hook
      setState(true);
    };

    const refCurrent = refContainer.current;

    refCurrent.addEventListener("click", open, { once: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
}
