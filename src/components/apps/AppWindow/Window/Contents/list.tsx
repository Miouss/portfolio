import { ReactElement } from "react";

import {
  TerminalAppIcon,
  CvPreviewAppIcon,
  GitHubShortcutIcon,
  LinkedInShortcutIcon,
} from "./icons";

import TerminalApp from "./collection/TerminalApp";
import ProjectPreviewApp from "./collection/ProjectPreviewApp";

import { AppList, ShortcutList } from "./types";

let appList = {} as AppList[];
let shortcutList = {} as ShortcutList[];

addApp("terminal", <TerminalApp />, <TerminalAppIcon  fontSize="inherit" />, 1, 1);
addApp("Aperçu CV", <ProjectPreviewApp />, <CvPreviewAppIcon  fontSize="inherit" />, 1, 2);

addShortcut(
  "GitHub",
  <GitHubShortcutIcon fontSize="inherit" />,
  "https://github.com/Miouss",
  9,
  6
);
addShortcut(
  "LinkedIn",
  <LinkedInShortcutIcon fontSize="inherit"  />,
  "https://www.linkedin.com/in/samir-ghabi-aa58a2224/",
  10,
  6
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

export function getAppGridPostion(appName: string) {
  return appList[`${appName}`].gridPostion;
}

export function getAllAppsName() {
  return Object.keys(appList).map((app) => appList[app].name);
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

export function getAllShortcutsName() {
  return Object.keys(shortcutList).map(
    (shortcut) => shortcutList[shortcut].name
  );
}

function addApp(
  appName: string,
  Window: ReactElement,
  Icon: any,
  col: number,
  row: number
) {
  appList[`${appName}`] = {
    name: appName,
    component: Window,
    icon: {
      application: Icon,
      desktop: Icon,
      task: Icon,
    },
    gridPostion: {
      col: col,
      row: row,
    },
  };
}

function addShortcut(
  shortcutName: string,
  Icon: any,
  link: string,
  col: number,
  row: number
) {
  shortcutList[`${shortcutName}`] = {
    name: shortcutName,
    link: link,
    icon: Icon,
    gridPostion: {
      col: col,
      row: row,
    },
  };
}
