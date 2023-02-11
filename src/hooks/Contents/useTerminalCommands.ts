/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, Dispatch, SetStateAction } from "react";
import getFormattedText from "../../utils/Contents/getFormattedText";

export default function useTerminalCommands(
  ref: React.MutableRefObject<HTMLElement | null>,
  command: string,
  currentDir: string,
  setCurrentDir: Dispatch<SetStateAction<string>>,
  setPreviousTextLength: Dispatch<SetStateAction<number>>
  ) {
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
          const errorMessage = [
            `\n'${command}' is not recognized as an internal`,
            "or external command, operable program",
            `or batch file.\n\n${currentDir}`,
          ];

          ref.current!.textContent += getFormattedText(errorMessage);

          setPreviousTextLength(ref.current!.textContent!.length);
      }
    }
  }, [command]);

  
  useEffect(() => {
    if (ref.current!.textContent!.length === 0) return;
    ref.current!.textContent! += `\n\n` + currentDir;
    setPreviousTextLength(ref.current!.textContent!.length);
  }, [currentDir]);

}
