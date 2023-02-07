import { ReactElement } from "react";
import {
  getAppGridPostion,
  getShortcutGridPostion,
} from "../../components/Applications/Window/Contents/list";
import NormalApp from "../../components/Desktop/DesktopGrid/GridAppWindow";
import ShortcutApp from "../../components/Desktop/DesktopGrid/GridAppShortcut";
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
  getGridPostion: typeof getAppGridPostion | typeof getShortcutGridPostion,
  AppContainer: typeof NormalApp | typeof ShortcutApp
) => {
  appsName.forEach((appName, index) => {
    fillEmptyCell(
      desktopApp,
      appName,
      currentGridPosition,
      getGridPostion(appName)
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
  gridPostion: GridPosition
) => {
  // While the current cell is not the same as the cell of the app, add empty cell
  while (
    gridPostion.col !== currentGridPosition.col ||
    gridPostion.row !== currentGridPosition.row
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
