import {
  Dispatch,
  ReactElement,
  SetStateAction,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useSelector } from "react-redux";
import {
  addApp,
  addSpecialApp,
  addNotifApp,
  closeApp,
  openApp,
  RootState,
  useAppDispatch,
} from "../redux";
import AppGrid from "./Desktop/DesktopGrid";
import Taskbar from "./Taskbar/Taskbar";

import AppWindow from "./Applications/AppWindow";

import Signin from "./Signin/Signin";
import { SessionContainer, SigninContainer } from "./style";
import { AppComponent } from "./Applications/AppWindow/Window/Contents/list";

import { IsLoggedProp, LanguageProp } from "./types";

export const LoginDispathContext = createContext(
  (isLogged: IsLoggedProp) => {}
);

export const LanguageStateContext = createContext<LanguageProp>("fr");
export const LanguageDispatchContext = createContext<Dispatch<SetStateAction<LanguageProp>>>((lang) => lang);

export default function App() {
  const [lang, setLang] = useState<LanguageProp>("fr");
  const [isLogged, setIsLogged] = useState<IsLoggedProp>(undefined);
  const [isValid, setIsValid] = useState(false);
  const [alreadyLogged, setAlreadyLogged] = useState(false);
  const apps = useSelector((state: RootState) => state.apps);
  const dispatch = useAppDispatch();

  const loginRef = useRef<HTMLDivElement>(null);

  const [runningApps, setRunningApps] = useState<ReactElement[]>([]);

  useEffect(() => {
    const dispatchAddApp = (name: string) => {
      dispatch(addApp(name));
    };

    dispatchAddApp("Terminal");
    dispatchAddApp("Projets");
    dispatch(addSpecialApp("Mail Sender"));
    dispatch(addNotifApp("Chill Beats"));
    dispatchAddApp("Welcome");
    dispatchAddApp("Presentation");

    document.onselectstart = () => {
      return false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const appsRunning = apps.filter(
      (app) => app.status.isRunning && app.status.isSpecial !== "notif"
    );
    setRunningApps(
      appsRunning.map((appRunning) => {
        if (appRunning.status.isSpecial === true)
          return (
            <AppComponent
              key={`Component ${appRunning.name}`}
              name={appRunning.name}
            />
          );
        return (
          <AppWindow
            key={`Component ${appRunning.name}`}
            appName={appRunning.name}
          />
        );
      })
    );
  }, [apps]);

  useEffect(() => {
    if (isLogged === "lock") return;
    const appsRunning = apps.filter((app) => app.status.isRunning);

    if (isLogged === false) {
      console.log("close all apps");
      appsRunning?.forEach((app) => {
        if (app.status.isRunning) {
          dispatch(closeApp(app.name));
        }
      });
      return;
    }

    if (isLogged === true && !alreadyLogged) {
      setTimeout(() => {
        dispatch(openApp("Welcome"));
      }, 1000);

      setAlreadyLogged(true);
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);

  if (window.location.hostname !== "localhost") {
    const handleSiteEntrance = (e) => {
      e.preventDefault();
      console.log(e.target[0].value);
      if (e.target[0].value === "miouss") {
        setIsValid(true);
      }
    };
    if (!isValid) {
      return (
        <form
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "lightgrey",
          }}
          onSubmit={handleSiteEntrance}
        >
          <input type="text" placeholder="password" />
          <button type="submit">Valider</button>
        </form>
      );
    }
  }

  return (
    <>
      <LanguageStateContext.Provider value={lang}>
        <LanguageDispatchContext.Provider value={setLang}>
          <SessionContainer visible={isLogged === true}>
            {runningApps}
            <AppGrid />
            <LoginDispathContext.Provider value={setIsLogged}>
              <Taskbar />
            </LoginDispathContext.Provider>
          </SessionContainer>

          <SigninContainer ref={loginRef} visible={isLogged !== true}>
            <Signin isLogged={isLogged} setIsLogged={setIsLogged} />
          </SigninContainer>
        </LanguageDispatchContext.Provider>
      </LanguageStateContext.Provider>
    </>
  );
}
