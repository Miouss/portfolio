/* eslint-disable react-hooks/exhaustive-deps */

import { useRef, useState, useEffect } from "react";
import delay from "../../../../../../../utils/delay";
import { TerminalAppContainer, TerminalAppContent } from "./TerminalAppStyle";

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

  async function simulateKeyPressed(txt: string) {
    await delay(10);
    terminalAppContentRef.current!.textContent += txt[0];
    if (txt.length > 1) return simulateKeyPressed(txt.slice(1));
  }

  useEffect(() => {
    const mimicUserTyping = async () => {
      const welcomeMessage = !mode
        ? `Microsoft Windows [Version 10.0.19042.867]\n
      (c) 2020 Microsoft Corporation. All rights reserved.`
        : `
      Bonjour et bienvenue sur mon portofolio !\n
      Comme vous pouvez le constater, j'ai imité le comportement de Windows 10 pour ce projet.\n
      Je vous laisse soin d'explorer les différentes applications disponibles.\n
      Bonne visite !\n\n
      Appuyez sur une touche pour continuer...`;
      await simulateKeyPressed(welcomeMessage);
      console.log("coucou");
      terminalAppContentRef.current!.textContent! += currentDir;
      if (!mode) setCurrentDir("C:\\>");
      terminalAppContentRef.current!.focus();
    };
    mimicUserTyping();
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
