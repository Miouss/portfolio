/* eslint-disable react-hooks/exhaustive-deps */

import { useRef, useState, useEffect, useContext } from "react";
import { TerminalAppContainer, TerminalAppContent } from "./style";
import mimicTyping from "../../../../../../utils/Contents/mimicTyping";

import languages from "../../../../../../assets/languages/languages.json";
import { LanguageStateContext } from "../../../../../App";

interface Props {
  mode?: "notepad";
}

export default function TerminalApp({ mode }: Props) {
  const terminalAppRef = useRef<HTMLDivElement | null>(null);
  const terminalAppContentRef = useRef<HTMLDivElement | null>(null);
  const [blink, setBlink] = useState(false);
  const [previousTextLength, setPreviousTextLength] = useState(0);
  const [currentDir, setCurrentDir] = useState("");
  const [command, setCommand] = useState("");

  const lang = useContext(LanguageStateContext);

  useEffect(() => {
    const typeWelcomeMessage = async () => {
      const welcomeMessage = !mode
        ? `£Microsoft Windows [Version 10.0.19042.867]
      (c) 2020 Microsoft Corporation. All rights reserved.£`
        : languages[lang].apps.terminal.welcomeMsg.reduce(
            (prev, curr) => (prev += "\n\n" + curr)
          );

      await mimicTyping(terminalAppContentRef, welcomeMessage);
      if (!terminalAppContentRef.current) return;
      terminalAppContentRef.current!.textContent! += currentDir;
      if (!mode) setCurrentDir("C:\\>");
      terminalAppContentRef.current!.focus();
    };
    typeWelcomeMessage();
    setBlink(!blink);
  }, []);

  const keyHandler = (event) => {
    event.preventDefault();

    if (mode) {
      (terminalAppRef!.current!.offsetParent as HTMLElement).style.animation =
        "despawnWindow 0.15s ease-out forwards";
      return;
    }

    if (event.key.length !== 1) {
      switch (event.key) {
        case "Enter":
          if (
            terminalAppContentRef?.current!.textContent!.length ===
            previousTextLength
          ) {
            terminalAppContentRef.current!.textContent += `\n${currentDir}`;
            setPreviousTextLength(
              terminalAppContentRef.current!.textContent!.length
            );
            return;
          }
          setCommand(
            terminalAppContentRef.current!.textContent!.slice(
              previousTextLength
            )
          );
          return;
        case "Backspace":
          if (
            terminalAppContentRef.current!.textContent!.length ===
            previousTextLength
          )
            return;
          terminalAppContentRef.current!.textContent! =
            terminalAppContentRef.current!.textContent!.slice(0, -1);
          return;
        default:
          return;
      }
    } else {
      switch (event.key) {
        default:
          terminalAppContentRef.current!.textContent += event.key;
      }
    }
  };

  useEffect(() => {
    if (command) {
      switch (command) {
        case "cd User":
          setCurrentDir((prevState) => prevState.slice(0, -1) + "User>");
          return;
        case "cd ..":
          setCurrentDir(
            (prevState) =>
              prevState.substring(0, prevState.lastIndexOf("\\")) + "\\>"
          );
          return;
        case "cd":
          setCurrentDir("C:\\>");
          return;
        default:
          const errorMessage = `\n'${command}' is not recognized as an internal 
          or external command, operable program 
          or batch file.\n\n${currentDir}`;

          terminalAppContentRef.current!.textContent += errorMessage;
          setPreviousTextLength(
            terminalAppContentRef.current!.textContent!.length
          );
      }
    }
  }, [command]);

  useEffect(() => {
    let offSetParent: Element | undefined = undefined;
    const eventCallback = (event) => keyHandler(event);

    if (terminalAppContentRef.current !== null) {
      offSetParent = terminalAppContentRef.current.offsetParent!;
      offSetParent.addEventListener("keydown", eventCallback);
    }

    return () => {
      offSetParent?.removeEventListener("keydown", eventCallback);
    };
  }, [keyHandler]);

  useEffect(() => {
    if (terminalAppContentRef!.current!.textContent!.length === 0) return;
    terminalAppContentRef!.current!.textContent! += `\n\n` + currentDir;
    setPreviousTextLength(terminalAppContentRef.current!.textContent!.length);
  }, [currentDir]);

  useEffect(() => {
    if (terminalAppContentRef.current) {
      terminalAppContentRef.current.scrollIntoView({
        block: "end",
      });
    }
  }, [previousTextLength]);

  return (
    <TerminalAppContainer ref={terminalAppRef}>
      <TerminalAppContent
        tabIndex={0}
        ref={terminalAppContentRef}
        blink={blink}
      />
    </TerminalAppContainer>
  );
}
