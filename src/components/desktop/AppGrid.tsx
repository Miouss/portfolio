import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

import NormalApp from "./NormalApp";
import ShortcutApp from "./ShortcutApp";

import "../../styles/DesktopGrid.css";
import "../../styles/DesktopApp.css";


export interface AppStyle {
  borderStyle?: string;
  padding?: string;
  background?: string;
  cursor?: string;
}

export default function AppGrid() {
  const apps = useSelector((state: RootState) => state.apps);
  const shortcuts = useSelector((state: RootState) => state.shortcuts);

  const showDesktopApp = () => {
    let desktopApp: Array<ReactElement> = [];

    fillNormalApp(desktopApp);
    fillShortcupApp(desktopApp);

    return desktopApp;
  };

  const fillNormalApp = (desktopApp: Array<ReactElement>) => {
    let col = 1;

    apps.forEach((app, index) => {      
      desktopApp.push(
        <NormalApp
          key={`normalApp${index}`}
          appName={app.name}
          gridArea={`1 / ${col} / 1 / ${col + 1}`}
        />
      );
      col++;
    });
  };

  const fillShortcupApp = (desktopApp: Array<ReactElement>) => {
    let col = 9;

    shortcuts.forEach((shortcut, index) => {
      desktopApp.push(
        <ShortcutApp
          key={`shortcutApp${index}`}
          shortcutName={shortcut.name}
          gridArea={`1 / ${col} / 1 / ${col + 1}`}
        />
      );
      col++;
    });
  };

  return <div className="desktop-grid">{showDesktopApp()}</div>;
}