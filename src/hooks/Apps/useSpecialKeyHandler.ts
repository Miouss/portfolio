import { useEffect } from "react";

export default function useSpecialKeyHandler(
  ref: React.MutableRefObject<HTMLElement | null>,
  keyHandler: (event: KeyboardEvent) => void
) {
  useEffect(() => {
    if (!ref.current) return;

    const eventCallback = (e: KeyboardEvent) => keyHandler(e);

    let offSetParent = ref.current.offsetParent!;
    offSetParent.addEventListener("keydown", eventCallback as EventListener);

    return () => {
      offSetParent?.removeEventListener(
        "keydown",
        eventCallback as EventListener
      );
    };
  }, [keyHandler]);
}
