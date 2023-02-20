import { useEffect } from "react";

export default function useSpecialKeyHandler(
  ref: React.MutableRefObject<HTMLElement | null>,
  keyHandler: (event: KeyboardEvent) => void
) {
  useEffect(() => {
    let offSetParent: Element | undefined = undefined;
    const eventCallback = (e: KeyboardEvent) => keyHandler(e);

    if (ref.current !== null) {
      offSetParent = ref.current.offsetParent!;
      offSetParent.addEventListener("keydown", eventCallback as EventListener);
    }

    return () => {
      offSetParent?.removeEventListener("keydown", eventCallback as EventListener);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyHandler]);
}
