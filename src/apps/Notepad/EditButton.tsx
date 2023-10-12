import { useLangContext } from "../../hooks";
import { DropDownMenuButton } from "../../styles";
import { useContext } from "react";
import { TriggerClearAllContext } from "./Notepad";

export function EditButton() {
  const { lang } = useLangContext();
  const setTriggerClearAll = useContext(TriggerClearAllContext);

  return (
    <DropDownMenuButton onClick={() => setTriggerClearAll((curr) => !curr)}>
      {lang.apps.aboutMe.toolbar.edit.action}
    </DropDownMenuButton>
  );
}
