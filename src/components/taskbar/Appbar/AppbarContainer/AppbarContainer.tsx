import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { focusApp, minimizeApp, RootState, useAppDispatch } from "../../../../redux";

import { AppIcon } from "../../../apps/collection/Collection";
import AppbarContextMenu from "./AppbarContextMenu/AppbarContextMenu";

interface Props {
  appName: string;
}

function AppContainer({ appName }: Props) {
  const isFocused = useSelector((state: RootState) => {
    const app = state.apps.find((app) => app.name === appName);
    return app!.status.isFocused;
  }); 

  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [bgColor, setBgColor] = useState("");
  const [lineWidth, setLineWidth] = useState("");
  const [opacityBgColorBoost, setOpacityBgColorBoost] = useState(0);

  const handleMouseOver = (event: React.MouseEvent): void => {
    event.type === "mouseenter"
      ? setOpacityBgColorBoost(0.4)
      : setOpacityBgColorBoost(0);
  };

  const handleClick = () => {
    isFocused
      ? dispatch(minimizeApp(appName))
      : dispatch(focusApp(appName));
  };

  useEffect(() => {
    if (opacityBgColorBoost === 0.4 && !isFocused) {
      setBgColor(`rgba(100, 100, 100, ${opacityBgColorBoost})`);
      setLineWidth("45px");
    } else if (isFocused) {
      setBgColor(`rgba(100, 100, 100, ${0.4 + opacityBgColorBoost})`);
      setLineWidth("45px");
    } else {
      setBgColor(`rgba(100, 100, 100, ${opacityBgColorBoost})`);
      setLineWidth("35px");
    }
  }, [opacityBgColorBoost, isFocused]);

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
    <div
      id="basic-button"
      onClick={handleClick}
      onMouseDown={(event) => event.preventDefault()}
      onMouseEnter={(event) => handleMouseOver(event)}
      onMouseLeave={(event) => handleMouseOver(event)}
      onContextMenu={(event) => {
        event.preventDefault();
        if(!isFocused){
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

      <div style={{ backgroundColor: bgColor, fontSize: "1.5rem" }}>
        <AppIcon appName={appName} />
      </div>
      <div style={{ width: lineWidth }} />
    </div>
  );
}

export default AppContainer;
