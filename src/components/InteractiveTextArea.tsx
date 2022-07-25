/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";
import { useState, useEffect, useCallback } from "react";

import "../styles/InteractiveTextArea.css";

function InteractiveTextArea() {
  let [text, updateText] = useState<string>("");
  let [content, updateContent] = useState<string>(
    "Coucou, j'agis comme une zone de texte"
  );
  let [CSSAnimationName, updateCSSAnimationName] = useState<string>("blink");

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

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
        updateText(text + "\n ");
      } else if (event.key === "Backspace") {
        updateText(text.slice(0, -1));
      } else if (event.key.length === 1) {
        updateText(text + event.key);
      }

      resetCursorAnimation();
    },
    [text]
  );

  useEffect(() => {
    if (content !== "") {
      simulateKeyPressed(content);
    }
  }, [content]);

  useEffect(() => {
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [keyHandler]);

  return (
    <div id="text-area">
      {text}
      <span style={{ animationName: CSSAnimationName }} id="cursor"></span>
    </div>
  );
}

export default InteractiveTextArea;
