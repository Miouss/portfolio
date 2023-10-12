import { LoginIconContainer, IconButton } from "../../styles";

import { LanguageProp } from "../../types";
import { useLangContext } from "../../hooks";

export default function LoginIconGroup() {
  const { langState, setLang } = useLangContext();

  const switchLang = () =>
    setLang((lang: LanguageProp) => (langState === "fr" ? "eng" : "fr"));

  return (
    <LoginIconContainer>
      <IconButton onClick={switchLang}>{langState.toUpperCase()}</IconButton>
    </LoginIconContainer>
  );
}
