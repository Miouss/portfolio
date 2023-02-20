import { useEffect, useState } from "react";
import { focusApp, minimizeApp, useAppDispatch } from "../../../../redux";

import { AppTaskIcon } from "../../../Applications/Window/Contents/list";
import ContextMenu from "./ContextMenu/ContextMenu";
import { AppIconBox, AppUnderline, AppTaskContainer } from "../../../../styles";
import { useAppStatus } from "../../../../hooks";

interface Props {
  appName: string;
}

export default function AppbarItem({ appName }: Props) {
  const { isFocused } = useAppStatus(appName);

  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [contextmenu, setContextmenu] = useState(false);

  const handleClick = () => {
    isFocused ? dispatch(minimizeApp(appName)) : dispatch(focusApp(appName));
  };

  const handleDocumentContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    setAnchorEl(null);
  };

  useEffect(() => {
    if (!!anchorEl) {
      setContextmenu(true);

      document.addEventListener("contextmenu", handleDocumentContextMenu, true);
      return () => {
        setContextmenu(false);
        document.removeEventListener("contextmenu", handleDocumentContextMenu);
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
