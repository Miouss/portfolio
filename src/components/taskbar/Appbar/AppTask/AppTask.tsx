import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  focusApp,
  minimizeApp,
  RootState,
  useAppDispatch,
} from "../../../../redux";

import { AppTaskIcon } from "../../../Applications/AppWindow/Window/Contents/list";
import ContextMenu from "./AppTaskContextMenu/ContextMenu";
import {
  AppIconBox,
  AppUnderline,
  AppTaskContainer,
} from "./style";

interface Props {
  appName: string;
}

export default function AppTask({ appName }: Props) {
  const isFocused = useSelector((state: RootState) => {
    const app = state.apps.find((app) => app.name === appName);
    return app!.status.isFocused;
  });

  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [contextmenu, setContextmenu] = useState(false);

  const handleClick = () => {
    isFocused ? dispatch(minimizeApp(appName)) : dispatch(focusApp(appName));
  };

  const handleDocumentContextMenu = (event) => {
    event.preventDefault();
    setAnchorEl(null);
  };

  useEffect(() => {
    if (!!anchorEl) {
      setContextmenu(true);

      document.addEventListener(
        "contextmenu",
        (event) => handleDocumentContextMenu(event),
        true
      );
      return () => {
        setContextmenu(false);
        document.removeEventListener("contextmenu", (event) =>
          handleDocumentContextMenu(event)
        );
      };
    }
  }, [anchorEl]);

  return (
    <AppTaskContainer
      focus={isFocused}
      contextmenu={contextmenu}
      onClick={handleClick}
      onMouseDown={(event) => event.preventDefault()}
      onContextMenu={(event) => {
        event.preventDefault();
        setAnchorEl(event.currentTarget);
      }}
    >
      <ContextMenu
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        appName={appName}
      />

      <AppIconBox>
        <AppTaskIcon name={appName} />
      </AppIconBox>
      <AppUnderline />
    </AppTaskContainer>
  );
}
