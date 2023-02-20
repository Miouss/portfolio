import { ReactElement } from "react";
import {
  getAppGridPosition,
  getShortcutGridPosition,
} from "../../apps";
import NormalApp from "../../components/Desktop/DesktopGridAppWindow";
import ShortcutApp from "../../components/Desktop/DesktopGridAppShortcut";
import styled from "@mui/system/styled";

interface GridPosition {
  col: number;
  row: number;
}

const DesktopEmptyGridItem = styled("div")({
  background: "transparent",
});

export const fillAppCells = (
  appsName: string[],
  desktopApp: Array<ReactElement>,
  currentGridPosition: GridPosition,
  getGridPosition: typeof getAppGridPosition | typeof getShortcutGridPosition,
  AppContainer: typeof NormalApp | typeof ShortcutApp
) => {
  appsName.forEach((appName, index) => {
    fillEmptyCell(
      desktopApp,
      appName,
      currentGridPosition,
      getGridPosition(appName)
    );

    desktopApp.push(
      <AppContainer key={`${appName} cell ${index}`} appName={appName} />
    );
  });
};

export const fillEmptyCell = (
  desktopApp: Array<ReactElement>,
  appName: string,
  currentGridPosition: GridPosition,
  gridPosition: GridPosition
) => {
  // While the current cell is not the same as the cell of the app, add empty cell
  while (
    gridPosition.col !== currentGridPosition.col ||
    gridPosition.row !== currentGridPosition.row
  ) {
    desktopApp.push(
      <DesktopEmptyGridItem
        key={`${appName} ${currentGridPosition.col} ${currentGridPosition.row}`}
        style={{
          gridColumn: currentGridPosition.col,
          gridRow: currentGridPosition.row,
        }}
      />
    );

    // Remember to go to the next row if we are at the end of the column
    if (currentGridPosition.col >= 10) {
      currentGridPosition.row++;
      currentGridPosition.col = 1;
    } else {
      currentGridPosition.col++;
    }
  }

  // Increment the current grid position to the next NOT EMPTY CELL that will be added at the end of this function
  // Avoid overlaping at the next iteration
  currentGridPosition.col < 10
    ? currentGridPosition.col++
    : currentGridPosition.row++;
};
