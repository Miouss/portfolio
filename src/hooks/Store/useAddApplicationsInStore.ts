import { useEffect } from "react";
import {
  addApp,
  addSpecialApp,
  addNotifApp,
  useAppDispatch,
} from "../../redux";

export default function useAddApplicationsInStore() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const normalAppsName = ["Terminal", "Projects", "Welcome", "Presentation"];

    const specialAppsName = ["Mail Sender"];

    const notifAppsName = ["Chill Beats"];

    normalAppsName.forEach((name) => {
      dispatch(addApp(name));
    });

    specialAppsName.forEach((name) => {
      dispatch(addSpecialApp(name));
    });

    notifAppsName.forEach((name) => {
      dispatch(addNotifApp(name));
    });

    document.onselectstart = () => {
      return false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
