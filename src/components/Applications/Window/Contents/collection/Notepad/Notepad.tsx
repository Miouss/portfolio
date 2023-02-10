import { useEffect, useRef, useState } from "react";
import {
  DropDownMenu,
  DropDownMenuButton,
  NotepadContainer,
  TextInputArea,
  Toolbar,
  ToolbarButton,
} from "./style";

import mimicTyping from "../../../../../../utils/Contents/mimicTyping";
import clearAll from "../../../../../../utils/Contents/clearAll";

import { useAppDispatch, closeApp } from "../../../../../../redux";

import { DynamicFontSize, DropDownMenuContent } from "./types";

import languages from "../../../../../../assets/languages/languages.json";
import getFormattedText from "../../../../../../utils/Contents/getFormattedText";
import useLangContext from "../../../../../../hooks/useLangContext";

export default function Notepad({ appName }: { appName: string }) {
  const notepadRef = useRef<HTMLDivElement>(null);
  const textInputAreaRef = useRef<HTMLTextAreaElement>(null);
  const dropDownMenuRef = useRef<HTMLDivElement>(null);

  const [contextMenuTarget, setContextMenuTarget] =
    useState<HTMLElement | null>(null);
  const [dropDownMenuContent, setDropDownMenuContent] =
    useState<DropDownMenuContent>(null);

  const [dynamicFontSize, setDynamicFontSize] =
    useState<DynamicFontSize>("16px");

  const [isTxtTyping, setIsTxtTyping] = useState(false);
  const { lang } = useLangContext();
  const txt = getFormattedText(languages[lang].apps.aboutMe.speech, "\n");

  const dispatch = useAppDispatch();

  const awaitMimicTyping = async () => {
    try {
      clearAll(textInputAreaRef);
      await mimicTyping(textInputAreaRef, txt, "value");
    } catch (e: any) {}
  };

  useEffect(() => {
    (
      notepadRef.current!.offsetParent!.firstChild as HTMLElement
    ).style.borderBottom = "none";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (contextMenuTarget && dropDownMenuRef.current) {
      const eventCallback = (e) => {
        setContextMenuTarget(null);
        setDropDownMenuContent(null);
      };

      document.addEventListener("click", eventCallback);

      contextMenuTarget.appendChild(dropDownMenuRef.current);

      return () => document.removeEventListener("click", eventCallback);
    }
  }, [contextMenuTarget]);

  const changeDropDownMenuParent = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    content: DropDownMenuContent
  ) => {
    e.stopPropagation();
    setContextMenuTarget(e.currentTarget);
    setDropDownMenuContent(content);
  };

  const switchDropDownMenuParent = (e, content: DropDownMenuContent) => {
    if (contextMenuTarget && contextMenuTarget !== e.currentTarget) {
      setContextMenuTarget(e.currentTarget);
      setDropDownMenuContent(content);
    }
  };

  const exitFct = (e?) => {
    e?.stopPropagation();
    dispatch(closeApp(appName));
  };

  const rerun = (e?) => {
    e?.stopPropagation();
    if (isTxtTyping) {
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Rerun" }));
      awaitMimicTyping();
      return;
    }
    setIsTxtTyping(true);
  };

  useEffect(() => {
    rerun();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  useEffect(() => {
    if (isTxtTyping) {
      clearAll(textInputAreaRef);
      awaitMimicTyping();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTxtTyping]);

  const getDropDownMenuContent = () => {
    switch (dropDownMenuContent) {
      case "File":
        return (
          <>
            <DropDownMenuButton onClick={exitFct}>
              {languages[lang].apps.aboutMe.toolbar.file.action}
            </DropDownMenuButton>
          </>
        );
      case "Edit":
        return (
          <DropDownMenuButton onClick={() => clearAll(textInputAreaRef)}>
            {" "}
            {languages[lang].apps.aboutMe.toolbar.edit.action}
          </DropDownMenuButton>
        );
      case "Format":
        return (
          <>
            {dynamicFontSize !== "24px" && (
              <DropDownMenuButton onClick={() => setDynamicFontSize("24px")}>
                {languages[lang].apps.aboutMe.toolbar.format.actions[0]}
              </DropDownMenuButton>
            )}
            {dynamicFontSize !== "16px" && (
              <DropDownMenuButton onClick={() => setDynamicFontSize("16px")}>
                {languages[lang].apps.aboutMe.toolbar.format.actions[1]}
              </DropDownMenuButton>
            )}
            {dynamicFontSize !== "12px" && (
              <DropDownMenuButton onClick={() => setDynamicFontSize("12px")}>
                {languages[lang].apps.aboutMe.toolbar.format.actions[2]}
              </DropDownMenuButton>
            )}
          </>
        );
      case "Help":
        return (
          <DropDownMenuButton onClick={rerun}>
            {languages[lang].apps.aboutMe.toolbar.help.action}
          </DropDownMenuButton>
        );
      default:
        return null;
    }
  };

  return (
    <NotepadContainer ref={notepadRef}>
      <Toolbar>
        <DropDownMenu ref={dropDownMenuRef} open={!!contextMenuTarget}>
          {getDropDownMenuContent()}
        </DropDownMenu>
        <ToolbarButton
          active={dropDownMenuContent === "File"}
          onClick={(e) => changeDropDownMenuParent(e, "File")}
          onMouseEnter={(e) => switchDropDownMenuParent(e, "File")}
        >
          {languages[lang].apps.aboutMe.toolbar.file.name}
        </ToolbarButton>
        <ToolbarButton
          active={dropDownMenuContent === "Edit"}
          onClick={(e) => changeDropDownMenuParent(e, "Edit")}
          onMouseEnter={(e) => switchDropDownMenuParent(e, "Edit")}
        >
          {languages[lang].apps.aboutMe.toolbar.edit.name}
        </ToolbarButton>
        <ToolbarButton
          active={dropDownMenuContent === "Format"}
          onClick={(e) => changeDropDownMenuParent(e, "Format")}
          onMouseEnter={(e) => switchDropDownMenuParent(e, "Format")}
        >
          {languages[lang].apps.aboutMe.toolbar.format.name}
        </ToolbarButton>
        <ToolbarButton
          active={dropDownMenuContent === "Help"}
          onClick={(e) => changeDropDownMenuParent(e, "Help")}
          onMouseEnter={(e) => switchDropDownMenuParent(e, "Help")}
        >
          {languages[lang].apps.aboutMe.toolbar.help.name}
        </ToolbarButton>
      </Toolbar>
      <TextInputArea
        ref={textInputAreaRef}
        tabIndex={0}
        dynamicFontSize={dynamicFontSize}
        spellCheck={false}
      ></TextInputArea>
    </NotepadContainer>
  );
}
