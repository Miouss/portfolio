import {
  Dispatch,
  SetStateAction,
  createContext,
  useRef,
  useState,
} from "react";
import AppGrid from "./Desktop/DesktopGrid";
import Taskbar from "./Taskbar/Taskbar";

import Signin from "./Signin/Signin";
import { SessionContainer, SigninContainer } from "./style";

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
  const loginRef = useRef<HTMLDivElement>(null);

  const [lang, setLang] = useState<LanguageProp>("fr");
  const [isLogged, setIsLogged] = useState<IsLoggedProp>(true);

  useAddApplicationsInStore();
  useSignInWall(isLogged);

  const runningAppsComponents = useRunningAppsComponents();
  const passwordProtection = usePasswordProtection();

  if (passwordProtection) return passwordProtection;

  return (
    <LanguageStateContext.Provider value={lang}>
      <LanguageDispatchContext.Provider value={setLang}>
        <SessionContainer visible={isLogged === true}>
          {runningAppsComponents}
          <AppGrid />
          <LoginDispathContext.Provider value={setIsLogged}>
            <Taskbar />
          </LoginDispathContext.Provider>
        </SessionContainer>

       {/*  <SigninContainer ref={loginRef} visible={isLogged !== true}>
          <Signin isLogged={isLogged} setIsLogged={setIsLogged} />
        </SigninContainer> */}
      </LanguageDispatchContext.Provider>
    </LanguageStateContext.Provider>
  );
}
