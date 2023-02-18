import { useEffect } from "react";

export default function useSpecialKeyHandler(
  ref: React.MutableRefObject<HTMLElement | null>,
  keyHandler: (event: KeyboardEvent) => void
) {
  useEffect(() => {
    let offSetParent: Element | undefined = undefined;
    const eventCallback = (event) => keyHandler(event);

    if (ref.current !== null) {
      offSetParent = ref.current.offsetParent!;
      offSetParent.addEventListener("keydown", eventCallback);
    }

    return () => {
      offSetParent?.removeEventListener("keydown", eventCallback);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyHandler]);
}
