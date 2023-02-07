import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import AppGrid from "./Desktop/DesktopGrid";
import Taskbar from "./Taskbar/Taskbar";

import Signin from "./Signin/Signin";
import { SessionContainer } from "./style";

import { IsLoggedProp, LanguageProp } from "../types/types";
import useAddApplicationsInStore from "../hooks/Store/useAddApplicationsInStore";
import useRunningAppsComponents from "../hooks/Store/useRunningAppsComponents";
import usePasswordProtection from "../hooks/usePasswordProtection";
import useSignInWall from "../hooks/useSigninWall";

export const LoginDispathContext = createContext(
  (isLogged: IsLoggedProp) => {}
);

export const LanguageStateContext = createContext<LanguageProp>("fr");
export const LanguageDispatchContext = createContext<
  Dispatch<SetStateAction<LanguageProp>>
>((lang) => lang);

export default function App() {
  const [isLogged, setIsLogged] = useState<IsLoggedProp>(false);
  const [showSignInWall, setShowSignInWall] = useState(true);
  const [showDesktop, setShowDesktop] = useState(false);
  const [lang, setLang] = useState<LanguageProp>("fr");

  useAddApplicationsInStore();
  useSignInWall(isLogged, setShowSignInWall);

  const runningAppsComponents = useRunningAppsComponents();
  const passwordProtection = usePasswordProtection();

  if (passwordProtection) return passwordProtection;

  return (
    <LanguageStateContext.Provider value={lang}>
      <LanguageDispatchContext.Provider value={setLang}>
        {showDesktop && (
          <SessionContainer visible={isLogged === true}>
            {runningAppsComponents}
            <AppGrid />
            <LoginDispathContext.Provider value={setIsLogged}>
              <Taskbar />
            </LoginDispathContext.Provider>
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
      </LanguageDispatchContext.Provider>
    </LanguageStateContext.Provider>
  );
}
