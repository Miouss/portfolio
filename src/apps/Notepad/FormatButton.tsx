import { Dispatch } from "react";
import { useLangContext } from "../../hooks";
import { DropDownMenuButton } from "../../styles";
import { FontSize } from "./Notepad";

interface Props {
  fontSize: FontSize;
  setFontSize: Dispatch<FontSize>;
}

export function FormatButton({ fontSize, setFontSize }: Props) {
  const { LARGE, MEDIUM, SMALL } = FontSize;
  const { lang } = useLangContext();

  const formatAction = lang.apps.aboutMe.toolbar.format.actions;

  const actionKeys = {
    [LARGE]: 0,
    [MEDIUM]: 1,
    [SMALL]: 2,
  };

  return (
    <DropDownMenuButton onClick={() => setFontSize(fontSize)}>
      {formatAction[actionKeys[fontSize]]}
    </DropDownMenuButton>
  );
}
