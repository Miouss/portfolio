import { ReactElement, useEffect, useState } from "react";
import {
  getAllAppsName,
  getAllShortcutsName,
  getAppGridPostion,
  getShortcutGridPostion,
} from "../../components/Applications/Window/Contents/list";
import ShortcutApp from "../../components/Desktop/DesktopGrid/GridAppShortcut";
import NormalApp from "../../components/Desktop/DesktopGrid/GridAppWindow";
import { fillAppCells } from "../../utils/Desktop/fillGridCells";

export default function useGridCells() {
  const [filledCells, setFilledCells] = useState<ReactElement[]>([]);

  useEffect(() => {
    let currentGridPosition = {
      col: 1,
      row: 1,
    };

    let cells: ReactElement[] = [];

    const appsName = getAllAppsName();
    const shortcutsName = getAllShortcutsName();

    fillAppCells(
      appsName,
      cells,
      currentGridPosition,
      getAppGridPostion,
      NormalApp
    );

    fillAppCells(
      shortcutsName,
      cells,
      currentGridPosition,
      getShortcutGridPostion,
      ShortcutApp
    );

    setFilledCells(cells);
  }, []);

  return filledCells;
}
