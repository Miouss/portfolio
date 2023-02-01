import { ReactElement, useState } from "react";

import NormalApp from "./DesktopGrid/GridAppWindow";
import ShortcutApp from "./DesktopGrid/GridAppShortcut";

import { DesktopEmptyGridItem, DesktopGridContainer } from "./style";
import {
  getAllAppsName,
  getAllShortcutsName,
  getAppGridPostion,
  getShortcutGridPostion,
} from "../Applications/AppWindow/Window/Contents/list";
import ContextMenu from "./ContextMenu/ContextMenu";
import useCloseOnClickAwayEffect from "../../hooks/useCloseOnClickAwayEffect";

export interface AppStyle {
  borderStyle?: string;
  padding?: string;
  background?: string;
  cursor?: string;
}

export default function DesktopGrid() {
  const appsName = getAllAppsName();
  const shortcutsName = getAllShortcutsName();
  let desktopAppFilled: ReactElement[] = [];

  let currentGridPosition = {
    col: 1,
    row: 1,
  };

  let desktopApp: Array<ReactElement> = [];

  const fillNormalApp = (desktopApp: Array<ReactElement>) => {
    appsName.forEach((appName, index) => {
      fillEmptyCell(desktopApp, appName, getAppGridPostion);

      desktopApp.push(
        <NormalApp key={`normalApp${index}`} appName={appName} />
      );
    });
  };

  const fillShortcupApp = (desktopApp: Array<ReactElement>) => {
    shortcutsName.forEach((shortcutName, index) => {
      fillEmptyCell(desktopApp, shortcutName, getShortcutGridPostion);

      desktopApp.push(
        <ShortcutApp key={`shortcutApp${index}`} shortcutName={shortcutName} />
      );
    });
  };

  const fillEmptyCell = (
    desktopApp: Array<ReactElement>,
    appName: string,
    getGridPostion
  ) => {
    const gridPostion = getGridPostion(appName);

    while (
      gridPostion.col !== currentGridPosition.col ||
      gridPostion.row !== currentGridPosition.row
    ) {
      desktopApp.push(
        <DesktopEmptyGridItem
          key={`${appName} ${currentGridPosition.col} ${currentGridPosition.row}`}
        />
      );

      if (currentGridPosition.col >= 10) {
        currentGridPosition.row++;
        currentGridPosition.col = 1;
      } else {
        currentGridPosition.col++;
      }
    }

    // Add position of the NOT EMPTY CELL that will be added after
    if (currentGridPosition.col < 10) {
      currentGridPosition.col++;
    } else {
      currentGridPosition.row++;
    }
  };

  fillNormalApp(desktopApp);
  fillShortcupApp(desktopApp);

  desktopAppFilled = desktopApp;

  const [openContextMenu, setOpenContextMenu] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenContextMenu(true);
    setMousePosition({ x: e.pageX, y: e.pageY });
  };

  useCloseOnClickAwayEffect(openContextMenu, setOpenContextMenu);

  return (
    <DesktopGridContainer onContextMenu={handleContextMenu}>
      {openContextMenu && (
        <ContextMenu
          mouseX={mousePosition.x}
          mouseY={mousePosition.y}
          appsName={appsName}
          shortcutsName={shortcutsName}
        ></ContextMenu>
      )}
      {desktopAppFilled}
    </DesktopGridContainer>
  );
  //return <DesktopGrid className="desktop-grid">{showDesktopApp()}</DesktopGrid>;
}
