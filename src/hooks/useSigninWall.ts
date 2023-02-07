import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { IsLoggedProp } from "../types/types";
import { closeApp, openApp, useAppDispatch } from "../redux";
import useRunningApps from "./Store/useRunningApps";

export default function useSignInWall(
  isLogged: IsLoggedProp,
  setShowSignIn: Dispatch<SetStateAction<boolean>>
) {
  const [alreadyLogged, setAlreadyLogged] = useState(false);
  const runningApps = useRunningApps();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLogged !== true) setShowSignIn(true);

    if (isLogged === "lock") return;

    if (isLogged === false) {
      runningApps?.forEach((app) => {
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
}
