import { LanguageProp } from "../../../../types";
import { SwitchIconButton, SwitchIconContainer } from "../../../../styles";
import { useLangContext } from "../../../../hooks";

export default function SwitchLangButton() {
  const { lang, setLang } = useLangContext();

  const switchLang = (e) => {
    e.stopPropagation();
    setLang((lang: LanguageProp) => (lang === "fr" ? "eng" : "fr"));
  };

  return (
    <SwitchIconContainer>
      <SwitchIconButton onClick={switchLang}>{lang.toUpperCase()}</SwitchIconButton>
    </SwitchIconContainer>
  );
}
