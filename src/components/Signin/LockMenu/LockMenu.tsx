import {useContext} from "react";
import useFullDate from "../../../hooks/useFullDate";
import {
  LockMenuContainer,
  FullDateBox,
  TimeBox,
  DateBox,
  IconContainer,
  FullDateContainer,
  IconButton,
} from "./style";

import { LanguageStateContext, LanguageDispatchContext } from "../../App";
import { LanguageProp } from "../../types";

export default function LockMenu() {
  const fullDate = useFullDate();
  const lang = useContext(LanguageStateContext);
  const setLang = useContext(LanguageDispatchContext);

  const switchLang = (e) => {
    e.stopPropagation();
    setLang((lang: LanguageProp) => (lang === "fr" ? "eng" : "fr"));
  };
  return (
    <LockMenuContainer>
      <FullDateContainer>
        <FullDateBox>
          <TimeBox>{fullDate.time}</TimeBox>
          <DateBox>{fullDate.details}</DateBox>
        </FullDateBox>
      </FullDateContainer>
      <IconContainer>
        <IconButton onClick={switchLang}>{lang.toUpperCase()}</IconButton>
      </IconContainer>
    </LockMenuContainer>
  );
}
