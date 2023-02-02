import { useContext, useState } from "react";
import {
  Divider,
  LangPrefContainer,
  LangPrefCurrent,
  LangPrefPopOverMenu,
} from "./style";
import { LanguageStateContext } from "../../App";
import { LangPrefIcon } from "../../../assets/icons/icons";
import LangPrefItem from "./helper/LangPrefItem";
import useCloseOnClickAwayEffect from "../../../hooks/useCloseOnClickAwayEffect";

export default function LangPref() {
  const lang = useContext(LanguageStateContext);

  const [openMenu, setOpenMenu] = useState<undefined | boolean>(undefined);

  const handleClick = (e) => {
    e.stopPropagation();
    setOpenMenu(!openMenu);
  };

  useCloseOnClickAwayEffect(openMenu, setOpenMenu);
  
  return (
    <LangPrefContainer onClick={handleClick}>
      <LangPrefCurrent> {lang.toUpperCase()} </LangPrefCurrent>
      <LangPrefPopOverMenu visible={openMenu}>
        <LangPrefItem
          code={<LangPrefIcon fontSize={"1.5rem"} />}
          label={
            lang === "fr" ? "Préférences de langue" : "Language preferences"
          }
        />
        <Divider />
        <LangPrefItem code="eng" label="English (United States)" />
        <LangPrefItem code="fr" label="Français (France)" />
      </LangPrefPopOverMenu>
    </LangPrefContainer>
  );
}
