import { ReactElement } from "react";

import {
  NotepadLogo,
  ChillBeatsLogo,
  GithubLogo,
  LinkedinLogo,
  ProjectLogo,
  MailSenderLogo,
  TerminalLogo,
  CVLogo,
} from "../assets";

import {
  TerminalApp,
  ProjectsViewer,
  MailSender,
  ChillBeats,
  Notepad,
} from "./";

import { AppList, ShortcutList } from "./types";
import { useLangContext } from "../hooks";

let appList: AppList = {};
let shortcutList: ShortcutList = {};

addApp(
  "Terminal",
  <TerminalApp />,
  <TerminalLogo />,
  1,
  1,
  "Ouvrir le Terminal",
  "Open Terminal"
);
addApp(
  "Mail Sender",
  <MailSender appName="Mail Sender" />,
  <MailSenderLogo />,
  3,
  1,
  "Envoyer un mail",
  "Send an email"
);
addApp(
  "Chill Beats",
  <ChillBeats appName="Chill Beats" />,
  <ChillBeatsLogo />,
  9,
  2,
  "Ecouter de la musique",
  "Listen to music"
);
addApp(
  "Projects",
  <ProjectsViewer />,
  <ProjectLogo />,
  1,
  3,
  "Voir mes projets",
  "See my projects"
);
addApp(
  "Presentation",
  <Notepad appName="Presentation" />,
  <NotepadLogo />,
  1,
  4,
  "A propos de moi",
  "About me"
);
addApp(
  "Welcome",
  <TerminalApp key="welcome" mode="notepad" />,
  <TerminalLogo />,
  undefined,
  undefined,
  undefined,
  undefined,
  true
);

addShortcut(
  "CV",
  <CVLogo />,
  `./Samir-Ghabi_CV.pdf`,
  1,
  5,
  "Télécharger mon CV",
  "Download my CV"
);
addShortcut(
  "GitHub",
  <GithubLogo />,
  "https://github.com/Miouss",
  9,
  5,
  "Vers mon GitHub",
  "Towards my GitHub"
);
addShortcut(
  "LinkedIn",
  <LinkedinLogo />,
  "https://www.linkedin.com/in/samir-ghabi-aa58a2224/",
  10,
  5,
  "Vers mon profil LinkedIn",
  "Towards my Linkedin profile"
);

interface Props {
  name: string;
}

export function AppComponent({ name }: Props) {
  return appList[name].component;
}

export function AppDesktopIcon({ name }: Props) {
  return appList[name].icon.desktop!;
}

export function AppWindowIcon({ name }: Props) {
  return appList[name].icon.application!;
}

export function AppTaskIcon({ name }: Props) {
  return appList[name].icon.task!;
}

export function AppNotifIcon({ name }: Props) {
  return appList[name].icon.notif!;
}

export function getAppGridPosition(appName: string) {
  return appList[`${appName}`].gridPosition;
}

export function getAllAppsName() {
  return Object.keys(appList).reduce((acc, app) => {
    if (!appList[app].isSecret) acc.push(appList[app].name);
    return acc;
  }, [] as string[]);
}

export function AppAction({ name }: Props) {
  const { langState } = useLangContext();

  return <span>{appList[name].action[langState]!}</span>;
}

export function ShortcutDesktopIcon({ name }: Props) {
  return shortcutList[name].icon;
}

export function getShortcutGridPosition(shortcutName: string) {
  return shortcutList[`${shortcutName}`].gridPosition;
}

export function getShortcutLink(shortcutName: string) {
  return shortcutList[shortcutName].link;
}

export function ShortcutAction({ name }: Props) {
  const { langState } = useLangContext();

  return <span>{shortcutList[name].action[langState]}</span>;
}

export function getAllShortcutsName() {
  return Object.keys(shortcutList).map(
    (shortcut) => shortcutList[shortcut].name
  );
}

function addApp(
  appName: string,
  Window: ReactElement,
  Logo?: ReactElement,
  col?: number,
  row?: number,
  actionFr?: string,
  actionEng?: string,
  isSecret?: boolean
) {
  appList[`${appName}`] = {
    name: appName,
    component: Window,
    icon: {
      application: Logo,
      desktop: Logo,
      task: Logo,
      notif: Logo,
    },
    gridPosition: {
      col: col ?? 0,
      row: row ?? 0,
    },
    action: {
      fr: actionFr,
      eng: actionEng,
    },
    isSecret: isSecret ?? false,
  };
}

function addShortcut(
  shortcutName: string,
  Icon: any,
  link: string,
  col: number,
  row: number,
  actionFr: string,
  actionEng: string
) {
  shortcutList[`${shortcutName}`] = {
    name: shortcutName,
    link: link,
    icon: Icon,
    gridPosition: {
      col: col,
      row: row,
    },
    action: {
      fr: actionFr,
      eng: actionEng,
    },
  };
}
