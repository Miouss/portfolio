import { useRef, useState, useEffect } from "react";
import { TerminalAppContainer, TerminalAppContent } from "../../styles";
import {
  useAutoScrollOnOverflow,
  useQuitOnAnyKey,
  useRerun,
  useSpecialKeyHandler,
  useTerminalCommands,
} from "../../hooks";

interface Props {
  mode?: "notepad" | "welcome";
}

export default function Terminal({ mode }: Props) {
  const terminalAppRef = useRef<HTMLDivElement | null>(null);
  const terminalAppContentRef = useRef<HTMLDivElement | null>(null);
  const [currentDir, setCurrentDir] = useState<string[]>(
    mode ? [""] : ["C:\\"]
  );
  const [commandHistory, setCommandHistory] = useState<string[]>([]);

  useEffect(() => {
    terminalAppContentRef.current!.focus();
  }, []);

  useTerminalCommands(
    terminalAppContentRef,
    commandHistory,
    currentDir,
    setCurrentDir
  );

  useSpecialKeyHandler(terminalAppContentRef, setCommandHistory, mode);
  useAutoScrollOnOverflow(terminalAppRef, commandHistory, currentDir);
  useRerun(terminalAppContentRef, setCurrentDir, mode);
  useQuitOnAnyKey(terminalAppContentRef, mode);

  return (
    <TerminalAppContainer ref={terminalAppRef}>
      <TerminalAppContent
        tabIndex={0}
        ref={terminalAppContentRef}
        notepad={mode}
      />
    </TerminalAppContainer>
  );
}
