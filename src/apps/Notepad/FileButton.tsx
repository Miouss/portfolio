import { useContext } from "react";
import { useLangContext } from "../../hooks";
import { useAppDispatch, closeApp } from "../../redux";
import { DropDownMenuButton } from "../../styles";
import { AppNameContext } from "./Notepad";

export function FileButton() {
  const { lang } = useLangContext();
  const dispatch = useAppDispatch();

  const appName = useContext(AppNameContext);

  const exitFct = () => {
    dispatch(closeApp(appName));
  };

  return (
    <DropDownMenuButton onClick={exitFct}>
      {lang.apps.aboutMe.toolbar.file.action}
    </DropDownMenuButton>
  );
}
