import { ReactElement } from "react";

import TerminalIcon from "@mui/icons-material/Terminal";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import GitHubIcon from '@mui/icons-material/GitHub';
import { LinkedInIcon } from "../custom/icons/iconsList";

import TerminalApp from "./collection/Terminal/TerminalApp";
import CvPreviewApp from "./collection/CvPreview/CvPreviewApp";

interface AppList {
  app: ReactElement | null;
  icon: ReactElement;
}

let appList = {} as AppList;

appList["terminal"] = {
  app: <TerminalApp key="terminal" />,
  icon: <TerminalIcon fontSize="inherit" />,
};

appList["Aperçu CV"] = {
  app: <CvPreviewApp key="CVPreview" />,
  icon: <ContactMailIcon fontSize="inherit" />,
};

appList["GitHub"] = {
  app: null,
  icon: <GitHubIcon fontSize="inherit" />,
};

appList["LinkedIn"] = {
  app: null,
  icon: <LinkedInIcon fontSize="inherit" />,
};


interface Props {
  appName: string;
}

export function AppComponent({ appName }: Props) {
  return appList[`${appName}`].app;
}

export function AppIcon({ appName }: Props) {
  return appList[`${appName}`].icon;
}