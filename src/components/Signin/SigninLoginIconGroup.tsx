import { LoginIconContainer, IconButton } from "../../styles";

import { LanguageProp } from "../../types";
import { useLangContext } from "../../hooks";

export default function LoginIconGroup() {
  const { lang, setLang } = useLangContext();

  const switchLang = () =>
    setLang((lang: LanguageProp) => (lang === "fr" ? "eng" : "fr"));

  return (
    <LoginIconContainer>
      <IconButton onClick={switchLang}>{lang.toUpperCase()}</IconButton>
    </LoginIconContainer>
  );
}
