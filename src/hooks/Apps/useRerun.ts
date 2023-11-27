import { Dispatch, MutableRefObject, useEffect } from "react";
import { useLangContext } from "..";
import { clearAll, mimicTyping, mimicWindowsTerminal } from "../../utils";

enum MicrosoftMsg {
  WINDOWS = "Microsoft Windows [Version 10.0.19042.867]\n(c) 2020 Microsoft Corporation. All rights reserved.\n",
}

export function useRerun(
  terminalAppContentRef: MutableRefObject<HTMLDivElement | null>,
  setCurrentDir: Dispatch<string[]>,
  mode?: "notepad" | "welcome"
) {
  const { lang } = useLangContext();
  const { welcomeMsg, start } = lang.apps.terminal;

  const welcomeMessage = mode
    ? welcomeMsg
    : [MicrosoftMsg.WINDOWS, `${start}\n`];

  const awaitMimicTyping = async () => {
    try {
      clearAll(terminalAppContentRef);
      await mimicTyping(terminalAppContentRef, welcomeMessage);
    } catch (e: any) {}
  };

  const typeWelcomeMessage = () => {
    if (!mode) {
      mimicWindowsTerminal(
        terminalAppContentRef,
        welcomeMessage,
        undefined,
        true
      );
    }

    terminalAppContentRef.current?.focus();
  };

  useEffect(() => {
    if (!mode) {
      clearAll(terminalAppContentRef);
      typeWelcomeMessage();
      setCurrentDir(["C:\\"]);
      return;
    }

    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Rerun" }));
    awaitMimicTyping();
  }, [lang]);
}
