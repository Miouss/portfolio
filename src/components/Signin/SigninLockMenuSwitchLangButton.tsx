import { LanguageProp } from "../../types";
import { SwitchIconButton, SwitchIconContainer } from "../../styles";
import { useLangContext } from "../../hooks";

export default function SwitchLangButton() {
  const { langState, setLang } = useLangContext();

  const switchLang = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setLang((lang: LanguageProp) => (langState === "fr" ? "eng" : "fr"));
  };

  return (
    <SwitchIconContainer>
      <SwitchIconButton onClick={switchLang}>
        {langState.toUpperCase()}
      </SwitchIconButton>
    </SwitchIconContainer>
  );
}
