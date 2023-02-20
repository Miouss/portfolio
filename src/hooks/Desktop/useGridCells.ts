import { ReactElement, useEffect, useState } from "react";
import {
  getAllAppsName,
  getAllShortcutsName,
  getAppGridPosition,
  getShortcutGridPosition,
} from "../../components/Applications/Window/Contents/list";
import ShortcutApp from "../../components/Desktop/GridApp/GridAppShortcut";
import NormalApp from "../../components/Desktop/GridApp/GridAppWindow";
import { fillAppCells } from "../../utils";

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
      getAppGridPosition,
      NormalApp
    );

    fillAppCells(
      shortcutsName,
      cells,
      currentGridPosition,
      getShortcutGridPosition,
      ShortcutApp
    );

    setFilledCells(cells);
  }, []);

  return filledCells;
}
