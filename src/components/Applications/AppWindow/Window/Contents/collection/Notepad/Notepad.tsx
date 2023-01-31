import { useEffect, useRef, useState } from "react";
import {
  DropDownMenu,
  DropDownMenuButton,
  NotepadContainer,
  TextInputArea,
  Toolbar,
  ToolbarButton,
} from "./style";

import mimicTyping from "../../utils/mimicTyping";
import useTextInputEffect from "../../hooks/useTextInputEffect";

import { useAppDispatch, closeApp } from "../../../../../../../redux";

import { DynamicFontSize, DropDownMenuContent } from "./types";

export default function Notepad() {
  const notepadRef = useRef<HTMLDivElement>(null);
  const textInputAreaRef = useRef<HTMLDivElement>(null);
  const dropDownMenuRef = useRef<HTMLDivElement>(null);

  const [contextMenuTarget, setContextMenuTarget] =
    useState<HTMLElement | null>(null);
  const [dropDownMenuContent, setDropDownMenuContent] =
    useState<DropDownMenuContent>(null);

  const [dynamicFontSize, setDynamicFontSize] =
    useState<DynamicFontSize>("16px");

  const [textTyping, setTextTyping] = useState(true);

  const dispatch = useAppDispatch();
  const txt = `Je m'appelle Samir Ghabi, j'ai 26 ans et depuis tout petit je suis passionné par l'informatique.

  J'ai commencé la programmation vers l'âge de 14 ans, avec des tutoriels sur le langage C puis C++.

  Mais c'est bien plus tard, à 25 ans, où j'ai décidé de réellement m'impliquer dans la programmation.

  J'ai d'abord suivi une formation en Javascript / Php / Mysql qui m'a surtout permis de me remettre dans le bain.

  C'est ensuite que j'ai découvert le framework React et j'ai décidé de me spécialiser dans ce dernier.

  Et c'est tout naturellement que je me suis au final orienté vers Node JS pour le backend.

  Pendant mes projets j'ai retrouvé la notion de typage qui m'attiré dans les langages bas niveau avec TypeScript.
  
  Toutes mes réalisations sont disponibles sur mon GitHub et tous ont été conçu from scratch.

  Il était important pour moi de faire des projets qui me plaisent et me donnent une vision plus long terme que simplement les concevoir "juste pour le CV", car c'est pour moi la meilleure façon d'apprendre et de s'investir pour progresser.  

  Merci de m'avoir lu :)`;

  useEffect(() => {
    if (notepadRef.current?.offsetParent?.firstChild) {
      (
        notepadRef.current.offsetParent.firstChild as HTMLDivElement
      ).style.borderBottom = "none";
    }

    setTextTyping(true);
  }, []);

  useEffect(() => {
    const awaitMimicTyping = async () => {
      await mimicTyping(textInputAreaRef, txt);
      setTextTyping(false);
    };

    if (textTyping) awaitMimicTyping();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textTyping]);

  useTextInputEffect(textInputAreaRef, textTyping);

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

  const clearAll = () => {
    if (textInputAreaRef.current && !textTyping) textInputAreaRef.current.textContent = "";
  };

  const exitFct = (e) => {
    e.stopPropagation();
    dispatch(closeApp("About me"));
  };

  const rerun = async (e) => {
    e.stopPropagation();
    if(textTyping) return;
    clearAll();
    setTextTyping(true);
  };

  const getDropDownMenuContent = () => {
    switch (dropDownMenuContent) {
      case "File":
        return (
          <>
            <DropDownMenuButton onClick={exitFct}>Exit</DropDownMenuButton>
          </>
        );
      case "Edit":
        return (
          <DropDownMenuButton onClick={clearAll}>Clear all</DropDownMenuButton>
        );
      case "Format":
        return (
          <>
            {dynamicFontSize !== "24px" && (
              <DropDownMenuButton onClick={() => setDynamicFontSize("24px")}>
                Change font to 24px
              </DropDownMenuButton>
            )}
            {dynamicFontSize !== "16px" && (
              <DropDownMenuButton onClick={() => setDynamicFontSize("16px")}>
                Change font to 16px
              </DropDownMenuButton>
            )}
            {dynamicFontSize !== "12px" && (
              <DropDownMenuButton onClick={() => setDynamicFontSize("12px")}>
                Change font to 8px
              </DropDownMenuButton>
            )}
          </>
        );
      case "Help":
        return (
          <DropDownMenuButton onClick={rerun}>
            Rerun About Me
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
          File
        </ToolbarButton>
        <ToolbarButton
          active={dropDownMenuContent === "Edit"}
          onClick={(e) => changeDropDownMenuParent(e, "Edit")}
          onMouseEnter={(e) => switchDropDownMenuParent(e, "Edit")}
        >
          Edit
        </ToolbarButton>
        <ToolbarButton
          active={dropDownMenuContent === "Format"}
          onClick={(e) => changeDropDownMenuParent(e, "Format")}
          onMouseEnter={(e) => switchDropDownMenuParent(e, "Format")}
        >
          Format
        </ToolbarButton>
        <ToolbarButton
          active={dropDownMenuContent === "Help"}
          onClick={(e) => changeDropDownMenuParent(e, "Help")}
          onMouseEnter={(e) => switchDropDownMenuParent(e, "Help")}
        >
          Help
        </ToolbarButton>
      </Toolbar>
      <TextInputArea
        ref={textInputAreaRef}
        tabIndex={0}
        dynamicFontSize={dynamicFontSize}
      ></TextInputArea>
    </NotepadContainer>
  );
}
