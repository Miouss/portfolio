import { Dispatch, SetStateAction, useEffect } from "react";

export default function useOpenContextMenuOnRightClick(
  refContainer: React.RefObject<HTMLDivElement>,
  state: boolean | undefined,
  setState: Dispatch<SetStateAction<boolean | undefined>>,
  setMousePosition: Dispatch<SetStateAction<{ x: number; y: number }>>
) {
  useEffect(() => {
    if (state || !refContainer.current) return;

    const open = (e) => {
      e.stopPropagation();
      e.preventDefault();
      document.dispatchEvent(new Event("click")); // trigger others menu's click away hook
      console.log("hook open on context menu event");
      setState(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const refCurrent = refContainer.current;

    refCurrent.addEventListener("contextmenu", open, { once: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
}
