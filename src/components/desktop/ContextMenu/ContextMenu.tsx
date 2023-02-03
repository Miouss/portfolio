import {
  ActionIcon,
  ActionLabel,
  ActionButtonContainer,
  ContextMenuPop,
  Divider,
} from "./style";
import {
  AppAction,
  AppDesktopIcon,
  ShortcutAction,
  ShortcutDesktopIcon,
  getShortcutLink,
} from "../../Applications/Window/Contents/list";

import { useAppDispatch, openApp } from "../../../redux";

interface Props {
  mouseX: number;
  mouseY: number;
  appsName: string[];
  shortcutsName: string[];
}

export default function ContextMenu({
  mouseX,
  mouseY,
  appsName,
  shortcutsName,
}: Props) {
    const dispatch = useAppDispatch();

    const handleAppActionClicked = (e, appName: string) => {
        dispatch(openApp(appName));
    };

    const handleShortcutActionClicked = (e, shortcutName: string) => {
        const link = getShortcutLink(shortcutName);
        window.open(link, "_blank");
    };

  const actions = () => {
    let actionsContainer: JSX.Element[] = [];

    appsName.forEach((appName) => {
      actionsContainer.push(
        <ActionButtonContainer key={`Action ${appName}`} onClick={(e) => handleAppActionClicked(e, appName)}>
          <ActionIcon>
            <AppDesktopIcon name={appName} />
          </ActionIcon>
          <ActionLabel>
            <AppAction name={appName} />
          </ActionLabel>
        </ActionButtonContainer>
      );
    });

    actionsContainer.push(<Divider key={"Divider Action"} />);

    shortcutsName.forEach((shortcutName) => {
      actionsContainer.push(
        <ActionButtonContainer key={`Action ${shortcutName}`} onClick={(e) => handleShortcutActionClicked(e, shortcutName)}>
          <ActionIcon>
            <ShortcutDesktopIcon name={shortcutName} />
          </ActionIcon>
          <ActionLabel>
            <ShortcutAction name={shortcutName} />
          </ActionLabel>
        </ActionButtonContainer>
      );
    });

    return actionsContainer;
  };
  return (
    <ContextMenuPop mouseX={mouseX} mouseY={mouseY} onMouseDown={(e) => e.stopPropagation()}>
      {actions()}
    </ContextMenuPop>
  );
}
