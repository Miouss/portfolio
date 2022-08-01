import { ReactElement } from "react";

import TerminalIcon from "@mui/icons-material/Terminal";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import TerminalApp from "./TerminalApp";
import CvPreviewApp from "./CvPreviewApp";

interface AppList {
  app: ReactElement;
  icon: ReactElement;
}

let appList = {} as AppList;

appList["terminal"] = {
  app: <TerminalApp key="terminal" />,
  icon: <TerminalIcon />,
};

appList["Aperçu CV"] = {
  app: <CvPreviewApp key="CVPreview" />,
  icon: <ContactMailIcon />,
};

interface Props {
  appName: string;
}

export function App({ appName }: Props) {
  return appList[`${appName}`].app;
}

export function AppIcon({ appName }: Props) {
  return appList[`${appName}`].icon;
}
