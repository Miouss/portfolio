import { useLangContext } from "../../hooks";
import { DropDownMenuButton } from "../../styles";
import { TriggerRerunContext } from "./Notepad";
import { useContext } from "react";

export function HelpButton() {
  const { lang } = useLangContext();
  const setTriggerRerun = useContext(TriggerRerunContext);

  return (
    <DropDownMenuButton onClick={() => setTriggerRerun((curr) => !curr)}>
      {lang.apps.aboutMe.toolbar.help.action}
    </DropDownMenuButton>
  );
}
