/* eslint-disable react-hooks/exhaustive-deps */

import { useRef, useState, useEffect, useCallback } from "react";
import delay from "../../../../../../utils/delay";


export default function TerminalApp() {
  const TerminalAppContentRef = useRef<HTMLDivElement | null>(null);

  const [text, updateText] = useState<string>("");
  const [content, updateContent] = useState<string>("Hello World");
  const [CSSAnimationName, updateCSSAnimationName] = useState<string>("blink");

  async function simulateKeyPressed(txt: string) {
    await delay(10);

    let updatedContent: string;
    let updatedText: string;

    if (txt.slice(0, 2) === "\n") {
      updatedContent = txt.slice(2);
      updatedText = text + txt.charAt(1);
    } else {
      updatedContent = txt.slice(1);
      updatedText = text + txt.charAt(0);
    }

    updateText(updatedText);
    updateContent(updatedContent);
  }

  async function resetCursorAnimation() {
    updateCSSAnimationName("none");

    await delay(30);

    updateCSSAnimationName("blink");
  }

  const keyHandler = useCallback(
    (event: KeyboardEvent) => {
      event.preventDefault();

      if (event.key === "Enter") {
        if (event.shiftKey) {
          updateText("");
        } else {
          updateText(text + "\n ");
        }
      } else if (event.key === "Backspace") {
        updateText(text.slice(0, -1));
      } else if (event.key.length === 1) {
        updateText(text + event.key);
      }

      resetCursorAnimation();
    },
    [text]
  );

  useEffect(
    function mimicUserTyping() {
      if (content !== "") {
        simulateKeyPressed(content);
      }
    },
    [content]
  );

  useEffect(
    function resetEventListener() {
      if (TerminalAppContentRef.current !== null) {
        const content = TerminalAppContentRef.current!
          .offsetParent as HTMLDivElement;
        content!.addEventListener("keydown", keyHandler);
        return () => content!.removeEventListener("keydown", keyHandler);
      }
    },
    [keyHandler]
  );

  return (
    <div ref={TerminalAppContentRef} id="text-area" tabIndex={0}>
      {"C:\\>"}
      {text}
      <span style={{ animationName: CSSAnimationName }} id="cursor"></span>
    </div>
  );
}