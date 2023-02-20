import { useState } from "react";
import { DesktopGrid, Taskbar, Signin } from "./components";
import { IsLoggedProp } from "./types";
import {
  useSignInWall,
  LangProvider,
  IsLoggedDispatchProvider,
  useRunningAppsComponents,
  useAddApplicationsInStore,
} from "./hooks";

import styled from "@mui/system/styled";
import { WindowsDesktopBackground } from "./assets";

export default function App() {
  const [isLogged, setIsLogged] = useState<IsLoggedProp>(false);
  const [showSignInWall, setShowSignInWall] = useState(true);
  const [showDesktop, setShowDesktop] = useState(false);

  useAddApplicationsInStore();
  useSignInWall(isLogged, setShowSignInWall);

  const runningAppsComponents = useRunningAppsComponents();

  return (
    <LangProvider>
      {showDesktop && (
        <SessionContainer visible={isLogged === true}>
          {runningAppsComponents}
          <DesktopGrid />
          <IsLoggedDispatchProvider dispatch={setIsLogged}>
            <Taskbar />
          </IsLoggedDispatchProvider>
        </SessionContainer>
      )}

      {showSignInWall && (
        <Signin
          isLogged={isLogged}
          setIsLogged={setIsLogged}
          setShowSignInWall={setShowSignInWall}
          setShowDesktop={setShowDesktop}
        />
      )}
    </LangProvider>
  );
}

const SessionContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "visible",
})(({ visible }: { visible: boolean}) => ({
  width: "100%",
  height: "100%",

  backgroundImage: `url(${WindowsDesktopBackground})`,
  backgroundPosition: "76% 50%",
  backgroundRepeat: "norepeat",
  backgroundSize: "cover",
  visibility: visible ? "visible" : "hidden",
  transition: "visibility 1s",

  zIndex: 0,
}));
