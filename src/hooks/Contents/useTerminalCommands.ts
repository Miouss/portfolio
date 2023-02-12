/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, Dispatch, SetStateAction } from "react";
import getFormattedText from "../../utils/Contents/getFormattedText";
import mimicWindowsTerminal from "../../utils/Contents/mimicWIndowsTerminal";

export default function useTerminalCommands(
  ref: React.MutableRefObject<HTMLElement | null>,
  commandHistory: string[],
  currentDir: string[],
  setCurrentDir: Dispatch<SetStateAction<string[]>>
) {
  const currentDirTree = getCurrentDirTree(currentDir);

  useEffect(() => {
    const command = commandHistory[commandHistory.length - 1];

    if ((command === " " || !command) && commandHistory.length > 1) {
      return createFeedbackCommandContainer(ref, ["\n"], currentDir, false);
    }

    if (command) {
      if (command.split(" ")[0] === "cd") {
        const path = command.split(" ")[1];

        switch (path) {
          case undefined:
            let directory = "";

            if (currentDir.length === 1)
              directory = "\n" + currentDir[0] + "\\>";
            else directory = `\n${currentDir.join("\\")}`;

            return createFeedbackCommandContainer(ref, [directory], currentDir);
          case "..":
            if (currentDir.length === 1)
              return createFeedbackCommandContainer(
                ref,
                [
                  "\nCannot go back because you are already in the root directory",
                  "Try 'dir' command to see the content of the current directory.\n\n",
                ],
                currentDir
              );
            return setCurrentDir((prevState) => prevState.slice(0, -1));
          default:
            if (currentDirTree[path]) {
              return setCurrentDir((prevState) => [...prevState, path]);
            }

            const errorMessage = [
              `\nCannot find path '${currentDir.join(
                "\\"
              )}\\${path}' because it does not exist.\n\n`,
            ];

            createFeedbackCommandContainer(ref, errorMessage, currentDir);
        }
      } else {
        switch (command) {
          case "dir":
            const dirContent = Object.keys(currentDirTree);
            if (dirContent.length === 0) {
              return createFeedbackCommandContainer(
                ref,
                [
                  "\nThe directory is empty.",
                  "Try 'cd ..' to go back to the parent directory.",
                ],
                currentDir
              );
            }
            console.log(dirContent);
            return createFeedbackCommandContainer(
              ref,
              ["\n", dirContent.map((dir) => `'${dir}'`).join("  "), "\n\n"],
              currentDir,
              false
            );
          default:
            const errorMessage = [
              `\n'${command}' is not recognized as an internal`,
              "or external command, operable program",
              `or batch file.\n\n`,
            ];

            createFeedbackCommandContainer(ref, errorMessage, currentDir);
        }
      }
    }
  }, [commandHistory]);

  useEffect(() => {
    if(currentDir[0] === "") return;

    if (currentDir.length === 1) {
      mimicWindowsTerminal(ref, "\n\n" + currentDir[0] + "\\>");
    } else {
      mimicWindowsTerminal(ref, currentDir);
    }
  }, [currentDir]);
}

function getDirTree() {
  return {
    "C:": {
      Users: {
        Samir: {
          Desktop: {
            Terminal: {},
            Projets: {},
            Presentation: {},
            CV: {},
            ChillBeats: {},
            Github: {},
            Linkedin: {},
          },
          Documents: {},
          Downloads: {},
          Pictures: {},
          Videos: {},
        },
        Miouss: {
          Desktop: {},
          Documents: {},
          Downloads: {},
          Pictures: {
            lotOfCatsPics: {},
          },
          Videos: {
            catsFighting: {},
          },
        },
      },
      Windows: {
        System32: {},
        SysWOW64: {},
      },
    },
  };
}

function getCurrentDirTree(currentDir: string[]) {
  let currentDirTree = getDirTree();
  for (let i = 0; i < currentDir.length; i++) {
    currentDirTree = currentDirTree[currentDir[i]];
  }
  return currentDirTree;
}

function createFeedbackCommandContainer(
  ref,
  text,
  currentDir,
  withLineBreak = true
) {
  const textContainer = document.createElement("span");
  if (text) textContainer.textContent = getFormattedText(text);
  ref.current!.appendChild(textContainer);

  if (currentDir.length === 1)
    return mimicWindowsTerminal(
      ref, currentDir[0] + "\\>",
      withLineBreak
    );

  mimicWindowsTerminal(ref, currentDir, withLineBreak);
}
