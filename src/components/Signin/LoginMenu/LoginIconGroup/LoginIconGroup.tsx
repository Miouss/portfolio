import { LoginIconContainer, IconButton } from "./style";

import { useContext } from "react";
import { LanguageDispatchContext } from "../../../App";
import { LanguageProp } from "../../../../types/types";

import { LanguageStateContext } from "../../../App";

export default function LoginIconGroup() {
  const lang = useContext(LanguageStateContext);
  const setLang = useContext(LanguageDispatchContext);

  const switchLang = () =>
    setLang((lang: LanguageProp) => (lang === "fr" ? "eng" : "fr"));

  return (
    <LoginIconContainer>
      <IconButton onClick={switchLang}>{lang.toUpperCase()}</IconButton>
    </LoginIconContainer>
  );
}
