import { useContext } from "react";
import {
  LangPrefPopOverMenuItem,
  LangPrefPopOverMenuItemCode,
  LangPrefPopOverMenuItemLabel,
} from "./style";
import { LanguageDispatchContext } from "../../../App";
import { LanguageStateContext } from "../../../App";
import { LanguageProp } from "../../../types";

interface Props {
  code: LanguageProp | JSX.Element;
  label: string;
}

export default function LangPrefItem({ code, label }: Props) {
  const lang = useContext(LanguageStateContext);
  const setLangContext = useContext(LanguageDispatchContext);
  const handleClick = () => {
    typeof code === "string" && setLangContext(code);
  };

  return (
    <LangPrefPopOverMenuItem onClick={handleClick} selected={lang === code} disabled={typeof code !== "string"}>
      <LangPrefPopOverMenuItemCode>
        {typeof code === "string" ? code.toUpperCase() : code}
      </LangPrefPopOverMenuItemCode>
      <LangPrefPopOverMenuItemLabel>{label}</LangPrefPopOverMenuItemLabel>
    </LangPrefPopOverMenuItem>
  );
}
