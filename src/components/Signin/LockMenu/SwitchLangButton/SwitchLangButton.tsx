import { useContext } from "react";
import { LanguageStateContext, LanguageDispatchContext } from "../../../App";
import { LanguageProp } from "../../../../types/types";
import { IconButton, IconContainer } from "./style";

export default function SwitchLangButton() {
  const lang = useContext(LanguageStateContext);
  const setLang = useContext(LanguageDispatchContext);

  const switchLang = (e) => {
    e.stopPropagation();
    setLang((lang: LanguageProp) => (lang === "fr" ? "eng" : "fr"));
  };

  return (
    <IconContainer>
      <IconButton onClick={switchLang}>{lang.toUpperCase()}</IconButton>
    </IconContainer>
  );
}
