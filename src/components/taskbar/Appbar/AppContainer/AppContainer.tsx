import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { focusApp, minimizeApp, RootState, useAppDispatch } from "../../../../redux";

import { AppIcon } from "../../../apps/AppList";
import ContextMenu from "../../DesktopTaskBarContextMenu";

interface Props {
  appName: string;
}

function AppContainer({ appName }: Props) {
  const app = useSelector((state: RootState) => state.apps[appName]);
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
    app.isFocused
      ? dispatch(minimizeApp(appName))
      : dispatch(focusApp(appName));
  };

  useEffect(() => {
    if (opacityBgColorBoost === 0.4 && !app.isFocused) {
      setBgColor(`rgba(100, 100, 100, ${opacityBgColorBoost})`);
      setLineWidth("45px");
    } else if (app.isFocused) {
      setBgColor(`rgba(100, 100, 100, ${0.4 + opacityBgColorBoost})`);
      setLineWidth("45px");
    } else {
      setBgColor(`rgba(100, 100, 100, ${opacityBgColorBoost})`);
      setLineWidth("35px");
    }
  }, [opacityBgColorBoost, app.isFocused]);

  const handleDocumentContextMenu = (event) => {
    event.preventDefault();
    setAnchorEl(null);
  };

  useEffect(() => {
    if (Boolean(anchorEl)) {
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
        if(!app.isFocused){
          dispatch(focusApp(appName));
        }

        setAnchorEl(event.currentTarget);
      }}
    >
      <ContextMenu
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
