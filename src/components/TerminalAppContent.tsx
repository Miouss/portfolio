/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect, useCallback } from "react";
import { delay } from "../assets/usefulFunction";

import "../styles/InteractiveTextArea.css";

interface Props {
  windowId: string
}
function TerminalAppContent({windowId} : Props) {
  let [text, updateText] = useState<string>("");
  let [content, updateContent] = useState<string>("Hello World");
  let [CSSAnimationName, updateCSSAnimationName] = useState<string>("blink");

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
      const windowContainer = (document.querySelector('#' + windowId) as HTMLDivElement);

      if(windowContainer !== null){
        windowContainer.addEventListener("keydown", keyHandler);
        return () => windowContainer.removeEventListener("keydown", keyHandler);
      }
    },
    [keyHandler]
  );

  return (
    <div id="text-area">
      {"C:\\>"}
      {text}
      <span style={{ animationName: CSSAnimationName }} id="cursor"></span>
    </div>
  );
}

export default TerminalAppContent;
