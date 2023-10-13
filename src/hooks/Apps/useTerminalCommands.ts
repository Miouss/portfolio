/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, Dispatch, SetStateAction, useState } from "react";
import { getFormattedText, mimicWindowsTerminal } from "../../utils";
import { useLangContext } from "..";
import { DespawnAnimation } from "../../components/Applications/WindowMovableBarButtonGroup";

type Directory = {
  [key: string]: Directory;
};

enum CDCommand {
  DEFAULT = "default",
  PARENT = "..",
  EMPTY = "EMPTY",
}

enum Commands {
  HELP = "help",
  CLEAR = "clear",
  DIR = "dir",
  EXIT = "exit",
  ERROR = "error",
}

enum ComplexCommands {
  CD = "cd",
}

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
    let command = commandHistory[commandHistory.length - 1];

    if (!command)
      return createFeedbackCommandContainer(ref, ["\n"], currentDir, false);

    const { HELP, CLEAR, DIR, EXIT, ERROR } = Commands;

    if (command.split(" ")[0] === ComplexCommands.CD) {
      const { DEFAULT, PARENT, EMPTY } = CDCommand;
      let path = command.split(" ")[1] ?? EMPTY;

      let defaultPath = path;

      if (path !== PARENT && path !== EMPTY) path = DEFAULT;

      const actionByKeys = {
        [EMPTY]: () =>
          createFeedbackCommandContainer(
            ref,
            [`\n${currentDir[0]}${currentDir.slice(1).join("\\")}`],
            currentDir,
            true
          ),
        [PARENT]: () =>
          currentDir.length === 1
            ? createFeedbackCommandContainer(
                ref,
                lang.apps.terminal.error.cd.root,
                currentDir,
                true
              )
            : setCurrentDir((prevState) => prevState.slice(0, -1)),
        [DEFAULT]: () => {
          console.log(defaultPath);

          if (currentDirTree[defaultPath]) {
            return setCurrentDir((prevState) => [...prevState, defaultPath]);
          }

          createFeedbackCommandContainer(
            ref,
            lang.apps.terminal.error.cd.path,
            currentDir
          );
        },
      };

      return actionByKeys[path as CDCommand]();
    } else {
      const actionByKeys = {
        [HELP]: () =>
          createFeedbackCommandContainer(
            ref,
            lang.apps.terminal.commands.help,
            currentDir
          ),
        [CLEAR]: () => {
          ref.current!.innerHTML = "";
          return createFeedbackCommandContainer(ref, ["\n"], currentDir, false);
        },
        [DIR]: () => {
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
        },
        [EXIT]: () => setIsExiting(true),
        [ERROR]: () => {
          const errorMessage = [
            `\n'${command}' is not recognized as an internal`,
            "or external command, operable program",
            `or batch file.\n`,
          ];

          createFeedbackCommandContainer(ref, errorMessage, currentDir);
        },
      };

      const isCommand = Object.values(Commands).includes(command as Commands);

      if (!isCommand) command = ERROR;

      return actionByKeys[command as Commands]();
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

  if (isExiting)
    (ref!.current!.offsetParent as HTMLElement).style.animation =
      DespawnAnimation;

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
