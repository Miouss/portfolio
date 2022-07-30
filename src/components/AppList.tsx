import { ReactElement } from "react";

import TerminalIcon from "@mui/icons-material/Terminal";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import TerminalApp from "./TerminalApp";
import PDFViewerApp from "./PDFViewerApp";

interface AppList {
  app: ReactElement;
  icon: ReactElement;
}

let appList: AppList = {} as AppList;

appList["terminal"] = {
  app: <TerminalApp key="terminal" />,
  icon: <TerminalIcon />,
};

appList["PDFViewer"] = {
  app: <PDFViewerApp key="PDFViewer" />,
  icon: <ContactMailIcon />,
};

export const getApp = (name: String) => {
  return appList[`${name}`].app;
};

export const getIcon = (name: String) => {
  return appList[`${name}`].icon;
};
