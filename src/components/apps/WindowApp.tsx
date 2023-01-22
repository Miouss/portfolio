/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@mui/material";

import ResizableDiv from "./WindowApp/AppContainer";
import MovableBar from "./WindowApp/AppContainer/MovableBar";
import BarButtonGroup from "./WindowApp/AppContainer/MovableBar/BarButtonGroup";

import Typography from "@mui/material/Typography";

import { AppIcon } from "./collection/Collection";

import { ReactElement, useEffect } from "react";
import { focusApp, useAppDispatch } from "../../redux";

import "../../styles/WindowBar.css";
import "../../styles/WindowApp.css";

interface Props {
  appName: string;
  contentComponent: ReactElement;
}

export default function WindowApp({ appName, contentComponent }: Props) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(focusApp(appName));
  }, []);

  return (
    <ResizableDiv
      appName={appName}
      className="window-app"
      minWidth={800}
      minHeight={400}
    >
      <MovableBar appName={appName} className="window-bar">
        <Box>
          <AppIcon appName={appName} />
        </Box>
        <Typography style={{ flexGrow: 1 }}>{appName}</Typography>

        <BarButtonGroup appName={appName} />
      </MovableBar>

      {contentComponent}
    </ResizableDiv>
  );
}
