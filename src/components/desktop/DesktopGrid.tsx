import { ReactElement } from "react";

import DesktopApp from "./DesktopApp";

import { useSelector } from "react-redux";
import { RootState } from "../../redux";

import "../../styles/DesktopGrid.css";

function DesktopGrid() {
  const apps = useSelector((state: RootState) => state.apps);
  const shortcuts = useSelector((state: RootState) => state.shortcuts);

  const showDesktopApp = () => {
    let desktopApp: Array<ReactElement> = [];

    fillNormalApp(desktopApp);
    fillShortcupApp(desktopApp);


    return (desktopApp);
  };

  const fillNormalApp = (desktopApp: Array<ReactElement>) => {
    let col = 1;

    for (const appName in apps) {
      desktopApp.push(<DesktopApp key={appName} type="normal" appName={appName} gridArea={`1 / ${col} / 1 / ${col+1}`} />);
      col++;
    }
  }

  const fillShortcupApp = (desktopApp: Array<ReactElement>) => {
    let col = 9;

    for (const shortcutName in shortcuts) {
      desktopApp.push(<DesktopApp key={shortcutName} type="shortcut" appName={shortcutName} gridArea={`10 / ${col} / 10 / ${col+1}`} />);
      col++;
    } 
  }

  return <div className="desktop-grid">{showDesktopApp()}</div>;
}

export default DesktopGrid;
