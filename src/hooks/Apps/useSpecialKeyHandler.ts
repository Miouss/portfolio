import { Dispatch, MutableRefObject, SetStateAction, useEffect } from "react";

export default function useSpecialKeyHandler(
  ref: React.MutableRefObject<HTMLElement | null>,
  setCommandHistory: Dispatch<SetStateAction<string[]>>
) {
  useEffect(() => {
    if (!ref.current) return;
    const eventCallback = (e: KeyboardEvent) =>
      keyHandler(e, setCommandHistory, ref);

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

enum KeysHandled {
  ENTER = "Enter",
  BACKSPACE = "Backspace",
}

function keyHandler(
  e: KeyboardEvent,
  setCommandHistory: Dispatch<SetStateAction<string[]>>,
  terminalAppContentRef: MutableRefObject<HTMLElement | null>
) {
  e.preventDefault();

  const lastChild = terminalAppContentRef.current!.lastChild!;

  const isSingleChar = e.key.length === 1;
  const addChar = () => (lastChild.textContent += e.key);

  if (isSingleChar) return addChar();

  const triggerActionByKeys = {
    [KeysHandled.ENTER]: () =>
      setCommandHistory((prev: string[]) => [
        ...prev,
        lastChild.textContent as string,
      ]),
    [KeysHandled.BACKSPACE]: () => {
      const removeLastChar = () => {
        if (!lastChild.textContent) return;

        lastChild.textContent = lastChild.textContent?.slice(
          0,
          lastChild.textContent.length - 1
        );
      };

      removeLastChar();
    },
  };

  if (e.key in triggerActionByKeys) triggerActionByKeys[e.key as KeysHandled]();
}
