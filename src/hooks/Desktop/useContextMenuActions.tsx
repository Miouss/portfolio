import styled from "@mui/system/styled";
import {
  AppAction,
  AppDesktopIcon,
  ShortcutAction,
  ShortcutDesktopIcon,
  getAllAppsName,
  getAllShortcutsName,
  getShortcutLink,
} from "../../components/Applications/Window/Contents/list";
import { openApp, useAppDispatch } from "../../redux";
import { useEffect, useState } from "react";

export default function useContextMenuActions() {
  const [actionsContainersFilled, setActionsContainersFilled] = useState<
    JSX.Element[]
  >([]);
  const dispatch = useAppDispatch();

  const handleAppActionClicked = (appName: string) =>
    dispatch(openApp(appName));

  const handleShortcutActionClicked = (shortcutName: string) =>
    window.open(getShortcutLink(shortcutName), "_blank");

  useEffect(() => {
    let actionsContainers: JSX.Element[] = [];

    const appsName = getAllAppsName();
    const shortcutsName = getAllShortcutsName();

    appsName.forEach((appName) => {
      actionsContainers.push(
        <ActionButtonContainer
          key={`Action ${appName}`}
          onClick={() => handleAppActionClicked(appName)}
        >
          <ActionIcon>
            <AppDesktopIcon name={appName} />
          </ActionIcon>
          <ActionLabel>
            <AppAction name={appName} />
          </ActionLabel>
        </ActionButtonContainer>
      );
    });

    actionsContainers.push(<Divider key={"Divider Action"} />);

    shortcutsName.forEach((shortcutName) => {
      actionsContainers.push(
        <ActionButtonContainer
          key={`Action ${shortcutName}`}
          onClick={() => handleShortcutActionClicked(shortcutName)}
        >
          <ActionIcon>
            <ShortcutDesktopIcon name={shortcutName} />
          </ActionIcon>
          <ActionLabel>
            <ShortcutAction name={shortcutName} />
          </ActionLabel>
        </ActionButtonContainer>
      );
    });

    setActionsContainersFilled(actionsContainers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return actionsContainersFilled;
}

const ActionButtonContainer = styled("button")({
  flex: 1,
  display: "flex",
  alignItems: "center",
  border: "none",
  background: "none",
  paddingLeft: "1rem",

  "&:hover": {
    background: "#FFFFFF",
  },
});

const Divider = styled("hr")({
  width: "90%",
  border: "none",
  borderBottom: "1px solid #919191",
});

const ActionLabel = styled("h4")({
  flex: 1,
  padding: 0,
  margin: 0,

  textAlign: "left",
  paddingLeft: "1rem",
  fontWeight: "normal",
  fontFamily: "Segoe UI",
});

const ActionIcon = styled("i")({
  "& > * ": {
    width: "18px",
    height: "18px",
  },
});
