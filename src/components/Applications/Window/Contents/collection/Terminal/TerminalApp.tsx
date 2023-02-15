/* eslint-disable react-hooks/exhaustive-deps */

import { useRef, useState, useEffect } from "react";
import { TerminalAppContainer, TerminalAppContent } from "./style";
import mimicTyping from "../../../../../../utils/Contents/mimicTyping";
import useAutoScrollOnOverflow from "../../../../../../hooks/Contents/useAutoScrollOnOverflow";

import languages from "../../../../../../assets/languages/languages.json";
import useLangContext from "../../../../../../hooks/useLangContext";
import useSpecialKeyHandler from "../../../../../../hooks/Contents/useSpecialKeyHandler";
import useTerminalCommands from "../../../../../../hooks/Contents/useTerminalCommands";
import mimicWindowsTerminal from "../../../../../../utils/Contents/mimicWIndowsTerminal";
import clearAll from "../../../../../../utils/Contents/clearAll";

interface Props {
  mode?: "notepad";
}

export default function TerminalApp({ mode }: Props) {
  const firstRender = useRef(true);
  const terminalAppRef = useRef<HTMLDivElement | null>(null);
  const terminalAppContentRef = useRef<HTMLDivElement | null>(null);
  const [blink, setBlink] = useState(false);
  const [currentDir, setCurrentDir] = useState<string[]>(
    mode ? [""] : ["C:\\"]
  );
  const [commandHistory, setCommandHistory] = useState<string[]>([]);

  const { lang } = useLangContext();

  const welcomeMessage = mode
    ? languages[lang].apps.terminal.welcomeMsg
    : [
        "Microsoft Windows [Version 10.0.19042.867]\n(c) 2020 Microsoft Corporation. All rights reserved.\n",
        `${languages[lang].apps.terminal.start}\n`,
      ];

  const awaitMimicTyping = async () => {
    try {
      clearAll(terminalAppContentRef);
      await mimicTyping(terminalAppContentRef, welcomeMessage);
    } catch (e: any) {}
  };

  useEffect(() => {
    if (!mode) {
      clearAll(terminalAppContentRef);
      typeWelcomeMessage();
      if (firstRender.current) {
        firstRender.current = false;
        return;
      }
      setCurrentDir(["C:\\"]);
      return;
    }

    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Rerun" }));
    awaitMimicTyping();
    return;
  }, [lang]);

  const typeWelcomeMessage = () => {
    if (!mode) {
      mimicWindowsTerminal(
        terminalAppContentRef,
        welcomeMessage,
        undefined,
        true
      );
    }

    if (!terminalAppContentRef.current) return;
    terminalAppContentRef.current!.focus();
  };

  useEffect(() => {
    setBlink(!blink);
  }, []);

  const keyHandler = (event) => {
    event.preventDefault();

    if (mode)
      return ((
        terminalAppRef!.current!.offsetParent as HTMLElement
      ).style.animation = "despawnWindow 0.15s ease-out forwards");

    let textContentRef = terminalAppContentRef.current!.lastChild!.textContent;

    if (event.key.length === 1)
      return (terminalAppContentRef.current!.lastChild!.textContent +=
        event.key);

    switch (event.key) {
      case "Enter":
        setCommandHistory((prev: string[]) => [
          ...prev,
          textContentRef as string,
        ]);
        return;
      case "Backspace":
        if (!textContentRef) return;

        terminalAppContentRef.current!.lastChild!.textContent =
          textContentRef.slice(0, textContentRef.length - 1);
        return;
      default:
        return;
    }
  };

  const isExiting = useTerminalCommands(
    terminalAppContentRef,
    commandHistory,
    currentDir,
    setCurrentDir
  );
  useSpecialKeyHandler(terminalAppContentRef, keyHandler);
  useAutoScrollOnOverflow(terminalAppContentRef, commandHistory);

  if (isExiting)
    (terminalAppRef!.current!.offsetParent as HTMLElement).style.animation =
      "despawnWindow 0.15s ease-out forwards";

  return (
    <TerminalAppContainer ref={terminalAppRef}>
      <TerminalAppContent
        tabIndex={0}
        ref={terminalAppContentRef}
        notepad={mode}
        blink={blink}
      />
    </TerminalAppContainer>
  );
}
