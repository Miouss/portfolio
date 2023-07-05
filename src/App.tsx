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
import { propsFilter } from "./styles/propsFilter";

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

const SessionContainer = styled(
  "div",
  propsFilter("visible")
)(({ visible }: { visible: boolean }) => ({
  visibility: visible ? "visible" : "hidden",
  transition: "visibility 1s",

  zIndex: 0,
}));
