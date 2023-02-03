import { useEffect } from "react";
import { addApp, addSpecialApp, addNotifApp, useAppDispatch } from "../../redux";

export default function useAddApplicationsInStore() {
  const dispatch = useAppDispatch();
  
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
}
