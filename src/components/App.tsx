import { useState } from "react";
import AppGrid from "./Desktop/DesktopGrid";
import Taskbar from "./Taskbar/Taskbar";

import Signin from "./Signin/Signin";
import { SessionContainer } from "./style";

import { IsLoggedProp } from "../types/types";
import useAddApplicationsInStore from "../hooks/Store/useAddApplicationsInStore";
import useRunningAppsComponents from "../hooks/Store/useRunningAppsComponents";
import usePasswordProtection from "../hooks/usePasswordProtection";
import useSignInWall from "../hooks/useSigninWall";

import { LangProvider } from "../hooks/useLangContext";
import { IsLoggedDispatchProvider } from "../hooks/useIsLoggedContext";

export default function App() {
  const [isLogged, setIsLogged] = useState<IsLoggedProp>(false);
  const [showSignInWall, setShowSignInWall] = useState(true);
  const [showDesktop, setShowDesktop] = useState(false);

  useAddApplicationsInStore();
  useSignInWall(isLogged, setShowSignInWall);

  const runningAppsComponents = useRunningAppsComponents();
  const passwordProtection = usePasswordProtection();

  if (passwordProtection) return passwordProtection;

  return (
    <LangProvider>
      {showDesktop && (
        <SessionContainer visible={isLogged === true}>
          {runningAppsComponents}
          <AppGrid />
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
