import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  focusApp,
  minimizeApp,
  RootState,
  useAppDispatch,
} from "../../../../redux";

import { AppIcon } from "../../../apps/collection/Collection";
import AppbarContextMenu from "./AppTask/ContextMenu";
import {
  AppIconBox,
  AppUnderline,
  AppTaskContainer,
} from "../../styled/Appbar";

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

  const handleClick = () => {
    isFocused ? dispatch(minimizeApp(appName)) : dispatch(focusApp(appName));
  };

  const handleDocumentContextMenu = (event) => {
    event.preventDefault();
    setAnchorEl(null);
  };

  useEffect(() => {
    if (!!anchorEl) {
      document.addEventListener(
        "contextmenu",
        (event) => handleDocumentContextMenu(event),
        true
      );
      return () =>
        document.removeEventListener("contextmenu", (event) =>
          handleDocumentContextMenu(event)
        );
    }
  }, [anchorEl]);

  return (
    <AppTaskContainer
      isFocused={isFocused}
      onClick={handleClick}
      onMouseDown={(event) => event.preventDefault()}
      onContextMenu={(event) => {
        event.preventDefault();
        if (!isFocused) {
          dispatch(focusApp(appName));
        }

        setAnchorEl(event.currentTarget);
      }}
    >
      <AppbarContextMenu
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        appName={appName}
      />

      <AppIconBox>
        <AppIcon appName={appName} />
      </AppIconBox>
      <AppUnderline />
    </AppTaskContainer>
  );
}
