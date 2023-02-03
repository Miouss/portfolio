import { useEffect } from "react";
import simpleKeyHandler from "../../utils/Contents/simpleKeyHandler";

export default function useTextInputEffect(
  ref: React.MutableRefObject<HTMLDivElement | null>,
  textTyping: boolean,
) {
  useEffect(() => {
    let offSetParent: Element | undefined = undefined;
    const eventCallback = (event) => simpleKeyHandler(event, ref);

    if (ref.current !== null && !textTyping) {
      offSetParent = ref.current.offsetParent!;
      offSetParent.addEventListener("keydown", eventCallback);
    }

    return () => {
      offSetParent?.removeEventListener("keydown", eventCallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textTyping]);
}
