/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, Dispatch, SetStateAction, useState } from "react";
import { getFormattedText, mimicWindowsTerminal } from "../../utils";
import { useLangContext } from "..";

type Directory = {
  [key: string]: Directory;
};

export default function useTerminalCommands(
  ref: React.MutableRefObject<HTMLElement | null>,
  commandHistory: string[],
  currentDir: string[],
  setCurrentDir: Dispatch<SetStateAction<string[]>>
) {
  const [isExiting, setIsExiting] = useState(false);
  const currentDirTree: Directory = getCurrentDirTree(currentDir);

  const { lang } = useLangContext();

  useEffect(() => {
    const command = commandHistory[commandHistory.length - 1];
    if ((command === " " || !command) && command !== undefined) {
      return createFeedbackCommandContainer(ref, ["\n"], currentDir, false);
    }

    if (command) {
      if (command.split(" ")[0] === "cd") {
        const path = command.split(" ")[1];

        switch (path) {
          case undefined:
            return createFeedbackCommandContainer(
              ref,
              [`\n${currentDir[0]}${currentDir.slice(1).join("\\")}`],
              currentDir,
              true
            );
          case "..":
            return currentDir.length === 1
              ? createFeedbackCommandContainer(
                  ref,
                  lang.apps.terminal.error.cd.root,
                  currentDir,
                  true
                )
              : setCurrentDir((prevState) => prevState.slice(0, -1));
          default:
            if (currentDirTree[path]) {
              return setCurrentDir((prevState) => [...prevState, path]);
            }

            createFeedbackCommandContainer(
              ref,
              lang.apps.terminal.error.cd.path,
              currentDir
            );
        }
      } else {
        switch (command) {
          case "help":
            return createFeedbackCommandContainer(
              ref,
              lang.apps.terminal.commands.help,
              currentDir
            );
          case "clear":
            ref.current!.innerHTML = "";
            return createFeedbackCommandContainer(
              ref,
              ["\n"],
              currentDir,
              false
            );
          case "dir":
            const dirContent = Object.keys(currentDirTree);
            if (dirContent.length === 0) {
              return createFeedbackCommandContainer(
                ref,
                lang.apps.terminal.error.dir.empty,
                currentDir
              );
            }

            return createFeedbackCommandContainer(
              ref,
              ["\n", dirContent.map((dir) => `'${dir}'`).join("  "), "\n\n"],
              currentDir,
              false
            );
          case "exit":
            return setIsExiting(true);
          default:
            const errorMessage = [
              `\n'${command}' is not recognized as an internal`,
              "or external command, operable program",
              `or batch file.\n`,
            ];

            createFeedbackCommandContainer(ref, errorMessage, currentDir);
        }
      }
    }
  }, [commandHistory]);

  useEffect(() => {
    if (currentDir[0] === "") return;

    if (currentDir.length === 1) {
      mimicWindowsTerminal(ref, [currentDir[0]]);
    } else {
      mimicWindowsTerminal(ref, currentDir);
    }
  }, [currentDir]);

  return isExiting;
}

function getDirTree(): Directory {
  return {
    "C:\\": {
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
  ref: React.MutableRefObject<HTMLElement | null>,
  text: string[],
  currentDir: string[],
  withLineBreak = true
) {
  const textContainer = document.createElement("span");
  if (text) textContainer.textContent = getFormattedText(text);
  ref.current!.appendChild(textContainer);

  mimicWindowsTerminal(ref, currentDir, withLineBreak);
}
