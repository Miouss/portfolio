import { ReactElement } from "react";

import {
  TerminalIcon,
  ProjectIcon,
  NotepadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PlaylistIcon,
} from "../../../../../assets/icons/icons";

import TerminalApp from "./collection/Terminal/TerminalApp";
import ProjectPreviewApp from "./collection/Project/ProjectPreviewApp";

import { AppList, ShortcutList } from "./types";
import MailSender from "./collection/MailSender/MailSender";
import ChillBeats from "./collection/ChillBeats/ChillBeats";
import Notepad from "./collection/Notepad/Notepad";

let appList = {} as AppList[];
let shortcutList = {} as ShortcutList[];

addApp("Terminal", <TerminalApp />, <TerminalIcon fontSize="inherit" />, 1, 1, "Ouvrir le Terminal");
addApp(
  "Mail Sender",
  <MailSender appName="Mail Sender" />,
  <MailIcon fontSize="inherit" />,
  3,
  1,
  "Envoyer un mail"
);
addApp(
  "Chill Beats",
  <ChillBeats appName="Chill Beats" />,
  <PlaylistIcon fontSize="inherit" />,
  9,
  2,
  "Ecouter de la musique"
);
addApp(
  "Projets",
  <ProjectPreviewApp />,
  <ProjectIcon fontSize="inherit" />,
  1,
  3,
  "Voir mes projets"
);
addApp("About me", <Notepad />, <NotepadIcon fontSize="inherit" />, 1, 4, "A propos de moi");
addApp(
  "Welcome",
  <TerminalApp key="welcome" mode="notepad" />,
  <TerminalIcon fontSize="inherit" />,
  0,
  0,
  "",
  true
);

addShortcut(
  "GitHub",
  <GithubIcon fontSize="inherit" />,
  "https://github.com/Miouss",
  9,
  6,
  "Vers mon GitHub"
);
addShortcut(
  "LinkedIn",
  <LinkedinIcon fontSize="inherit" />,
  "https://www.linkedin.com/in/samir-ghabi-aa58a2224/",
  10,
  6,
  "Vers mon profil LinkedIn"
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
  return appList[name].action;
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
  return shortcutList[name].action;
}

export function getAllShortcutsName() {
  return Object.keys(shortcutList).map(
    (shortcut) => shortcutList[shortcut].name
  );
}

function addApp(
  appName: string,
  Window: ReactElement,
  Icon: any,
  col?: number,
  row?: number,
  action?: string,
  isSecret?: boolean
) {
  appList[`${appName}`] = {
    name: appName,
    component: Window,
    icon: {
      application: Icon,
      desktop: Icon,
      task: Icon,
      notif: Icon,
    },
    gridPostion: {
      col: col,
      row: row,
    },
    action: action,
    isSecret: isSecret ?? false,
  };
}

function addShortcut(
  shortcutName: string,
  Icon: any,
  link: string,
  col: number,
  row: number,
  action: string
) {
  shortcutList[`${shortcutName}`] = {
    name: shortcutName,
    link: link,
    icon: Icon,
    gridPostion: {
      col: col,
      row: row,
    },
    action: action
  };
}
