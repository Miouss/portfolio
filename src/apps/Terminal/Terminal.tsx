import { useRef, useState, useEffect } from "react";
import { TerminalAppContainer, TerminalAppContent } from "../../styles";
import {
  useAutoScrollOnOverflow,
  useRerun,
  useSpecialKeyHandler,
  useTerminalCommands,
} from "../../hooks";

interface Props {
  mode?: "notepad";
}

export default function Terminal({ mode }: Props) {
  const terminalAppRef = useRef<HTMLDivElement | null>(null);
  const terminalAppContentRef = useRef<HTMLDivElement | null>(null);
  const [blink, setBlink] = useState(false);
  const [currentDir, setCurrentDir] = useState<string[]>(
    mode ? [""] : ["C:\\"]
  );
  const [commandHistory, setCommandHistory] = useState<string[]>([]);

  useEffect(() => {
    terminalAppContentRef.current!.focus();
    setBlink(!blink);
  }, []);

  useTerminalCommands(
    terminalAppContentRef,
    commandHistory,
    currentDir,
    setCurrentDir
  );

  useSpecialKeyHandler(terminalAppContentRef, setCommandHistory);
  useAutoScrollOnOverflow(terminalAppRef, commandHistory, currentDir);
  useRerun(terminalAppContentRef, setCurrentDir, mode);

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
