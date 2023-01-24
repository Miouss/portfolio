import { ReactElement, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { addApp, RootState, useAppDispatch } from "../redux";
import AppGrid from "./desktop/DesktopGrid";
import Taskbar from "./taskbar/Taskbar";

import AppWindow from "./apps/AppWindow";
import WindowsWallpaper from "../assets/windows-wallpaper.png";
import "../styles/Desktop.css";

import Login from "./Login/Login";

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  const apps = useSelector((state: RootState) => state.apps);
  const dispatch = useAppDispatch();

  const loginRef = useRef<HTMLDivElement>(null);

  const [runningApps, setRunningApps] = useState<Array<ReactElement>>([]);

  const bgImageStyle = {
    backgroundImage: `url(${WindowsWallpaper})`,
    backgroundPosition: "76% 50%",
    backgroundSize: "1920px 1080px",
    backgroundRepeat: "no-repeat",
  };

  useEffect(() => {
    const dispatchAddApp = (name: string) => {
      dispatch(addApp(name));
    };

    dispatchAddApp("terminal");
    dispatchAddApp("Aperçu CV");

    document.onselectstart = () => {
      return false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const appsRunning = apps.filter((app) => app.status.isRunning);
    setRunningApps(
      appsRunning.map((appRunning) => (
        <AppWindow
          key={`Component ${appRunning.name}`}
          appName={appRunning.name}
        />
      ))
    );
  }, [apps]);

  useEffect(() => {
    if (loginRef.current?.style.opacity === "0") {
      setTimeout(() => (loginRef.current!.style.visibility = "hidden"), 500);
    }
  }, [isLogged]);

  return (
    <>
      <div
        id="desktop"
        style={{
          width: "100%",
          visibility: isLogged ? "visible" : "hidden",
          ...bgImageStyle,
        }}
      >
        {runningApps}
        <AppGrid />
        <Taskbar />
      </div>
      <div
        ref={loginRef}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: !isLogged ? "1" : "0",
          transition: "opacity 0.5s ease-out",
        }}
      >
        <Login setIsLogged={setIsLogged} />
      </div>
    </>
  );
}
