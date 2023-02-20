import { ReactElement, useEffect, useState } from "react";
import {
  getAllAppsName,
  getAllShortcutsName,
  getAppGridPosition,
  getShortcutGridPosition,
} from "../../apps";
import ShortcutApp from "../../components/Desktop/DesktopGridAppShortcut";
import NormalApp from "../../components/Desktop/DesktopGridAppWindow";
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
