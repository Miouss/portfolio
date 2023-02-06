import { ReactElement, useContext } from "react";

import {
  NotepadLogo,
  ChillBeatsLogo,
  GithubLogo,
  LinkedinLogo,
  ProjectLogo,
  MailSenderLogo,
  TerminalLogo,
} from "../../../../assets/icons/icons";

import TerminalApp from "./collection/Terminal/TerminalApp";
import ProjectsViewer from "./collection/ProjectsViewer/ProjectsViewer";

import { AppList, ShortcutList } from "./types";
import MailSender from "./collection/MailSender/MailSender";
import ChillBeats from "./collection/ChillBeats/ChillBeats";
import Notepad from "./collection/Notepad/Notepad";

import { LanguageStateContext } from "../../../App";

let appList = {} as AppList[];
let shortcutList = {} as ShortcutList[];

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
  "Projets",
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
  "GitHub",
  <GithubLogo />,
  "https://github.com/Miouss",
  9,
  6,
  "Vers mon GitHub",
  "Towards my GitHub"
);
addShortcut(
  "LinkedIn",
  <LinkedinLogo />,
  "https://www.linkedin.com/in/samir-ghabi-aa58a2224/",
  10,
  6,
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
  return appList[name].icon.desktop;
}

export function AppWindowIcon({ name }: Props) {
  return appList[name].icon.application;
}

export function AppTaskIcon({ name }: Props) {
  return appList[name].icon.task;
}

export function AppNotifIcon({ name }: Props) {
  return appList[name].icon.notif;
}

export function getAppGridPostion(appName: string) {
  return appList[`${appName}`].gridPostion;
}

export function getAllAppsName() {
  return Object.keys(appList).reduce((acc, app) => {
    if (!appList[app].isSecret) acc.push(appList[app].name);
    return acc;
  }, [] as string[]);
}

export function AppAction({ name }: Props) {
  const lang = useContext(LanguageStateContext);

  return appList[name].action[lang];
}

export function ShortcutDesktopIcon({ name }: Props) {
  return shortcutList[name].icon;
}

export function getShortcutGridPostion(shortcutName: string) {
  return shortcutList[`${shortcutName}`].gridPostion;
}

export function getShortcutLink(shortcutName: string) {
  return shortcutList[shortcutName].link;
}

export function ShortcutAction({ name }: Props) {
    const lang = useContext(LanguageStateContext);

  return shortcutList[name].action[lang];
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
    gridPostion: {
      col: col,
      row: row,
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
    gridPostion: {
      col: col,
      row: row,
    },
    action: {
      fr: actionFr,
      eng: actionEng,
    },
  };
}
