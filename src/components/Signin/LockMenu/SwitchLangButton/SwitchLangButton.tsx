import { LanguageProp } from "../../../../types/types";
import { IconButton, IconContainer } from "./style";
import useLangContext from "../../../../hooks/useLangContext";

export default function SwitchLangButton() {
  const {lang, setLang} = useLangContext();

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
