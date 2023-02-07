import { LoginIconContainer, IconButton } from "./style";

import { LanguageProp } from "../../../../types/types";
import useLangContext from "../../../../hooks/useLangContext";

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
