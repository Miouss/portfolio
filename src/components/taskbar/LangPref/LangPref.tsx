import { useContext, useRef, useState } from "react";
import {
  Divider,
  LangPrefContainer,
  LangPrefCurrent,
  LangPrefCurrentBox,
  LangPrefPopOverMenu,
} from "./style";
import { LanguageStateContext } from "../../App";
import { LangPrefIcon } from "../../../assets/icons/icons";
import LangPrefItem from "./helper/LangPrefItem";
import useOpenOnLeftClick from "../../../hooks/MouseEvents/useOpenOnLeftClick";
import useCloseOnClick from "../../../hooks/MouseEvents/useCloseOnClick";
import useCloseOnClickAway from "../../../hooks/MouseEvents/useCloseOnClickAway";
import { UndefinedBoolean } from "../../../types/types";

export default function LangPref() {
  const langPrefContainerRef = useRef<HTMLDivElement>(null);
  const lang = useContext(LanguageStateContext);

  const [openMenu, setOpenMenu] = useState<UndefinedBoolean>(undefined);

  useOpenOnLeftClick(langPrefContainerRef, openMenu, setOpenMenu);
  useCloseOnClick(langPrefContainerRef, openMenu, setOpenMenu);
  useCloseOnClickAway(openMenu, setOpenMenu)

  return (
    <LangPrefContainer>
      <LangPrefCurrentBox  ref={langPrefContainerRef}>
        <LangPrefCurrent> {lang.toUpperCase()} </LangPrefCurrent>
      </LangPrefCurrentBox>
      <LangPrefPopOverMenu visible={openMenu} onClick={(e) => e.stopPropagation()}>
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