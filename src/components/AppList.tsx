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

export const getApp = (name: string) => {
  return appList[`${name}`].app;
};

export const getIcon = (name: string) => {
  return appList[`${name}`].icon;
};

export const windowsIcon = (color: string) => {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width="30px"
      height="30px"
    >
      <path d="M12 16L3 16 3 23.75 12 24.988zM12 5L3 6.25 3 14 12 14zM14 4.75L14 14 27 14 27 3zM14 16L14 25.25 27 27 27 16z" />
    </svg>
  );
};
