import {
  LangPrefPopOverMenuItem,
  LangPrefPopOverMenuItemCode,
  LangPrefPopOverMenuItemLabel,
} from "../../../../styles";
import { LanguageProp } from "../../../../types";
import { useLangContext } from "../../../../hooks";

interface Props {
  code: LanguageProp | JSX.Element;
  label: string;
}

export default function LangPrefItem({ code, label }: Props) {
  const { lang, setLang } = useLangContext();
  const handleClick = () => {
    typeof code === "string" && setLang(code);
  };

  return (
    <LangPrefPopOverMenuItem
      onClick={handleClick}
      selected={lang === code}
      disabled={typeof code !== "string"}
    >
      <LangPrefPopOverMenuItemCode>
        {typeof code === "string" ? code.toUpperCase() : code}
      </LangPrefPopOverMenuItemCode>
      <LangPrefPopOverMenuItemLabel>{label}</LangPrefPopOverMenuItemLabel>
    </LangPrefPopOverMenuItem>
  );
}
