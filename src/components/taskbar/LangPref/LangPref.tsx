import { useEffect, useRef, useState } from "react";
import {
  Divider,
  LangPrefContainer,
  LangPrefCurrent,
  LangPrefCurrentBox,
  LangPrefPopOverMenu,
} from "./style";
import { LangPrefIcon } from "../../../assets/icons/icons";
import LangPrefItem from "./helper/LangPrefItem";
import useOpenOnLeftClick from "../../../hooks/MouseEvents/useOpenOnLeftClick";
import useCloseOnClick from "../../../hooks/MouseEvents/useCloseOnClick";
import useCloseOnClickAway from "../../../hooks/MouseEvents/useCloseOnClickAway";
import { UndefinedBoolean } from "../../../types/types";
import useLangContext from "../../../hooks/useLangContext";

export default function LangPref() {
  const langPrefContainerRef = useRef<HTMLDivElement>(null);
  const { lang } = useLangContext();

  const [openMenu, setOpenMenu] = useState<UndefinedBoolean>(undefined);

  useOpenOnLeftClick(langPrefContainerRef, openMenu, setOpenMenu);
  useCloseOnClick(langPrefContainerRef, openMenu, setOpenMenu);
  useCloseOnClickAway(openMenu, setOpenMenu);

  useEffect(() => {
    if(openMenu === undefined) return;
    
    setOpenMenu(!openMenu);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return (
    <LangPrefContainer>
      <LangPrefCurrentBox ref={langPrefContainerRef}>
        <LangPrefCurrent> {lang.toUpperCase()} </LangPrefCurrent>
      </LangPrefCurrentBox>
      <LangPrefPopOverMenu
        visible={openMenu}
        onClick={(e) => e.stopPropagation()}
      >
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
