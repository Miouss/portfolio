import {
  useEffect,
  useRef,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { NotepadContainer, TextInputArea } from "../../styles";

import { mimicKeystrokes, clearAll, getFormattedText } from "../../utils";
import { Toolbar } from "./Toolbar";

import { useLangContext } from "../../hooks";

export enum FontSize {
  LARGE = "24px",
  MEDIUM = "16px",
  SMALL = "12px",
}

export type TriggerContext = Boolean | undefined;
export type TriggerSetter = Dispatch<SetStateAction<TriggerContext>>;
export const TriggerRerunContext = createContext<TriggerSetter>(() => {});
export const TriggerClearAllContext = createContext<TriggerSetter>(() => {});

export default function Notepad() {
  const notepadRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [fontSize, setFontSize] = useState<FontSize>(FontSize.MEDIUM);
  const [triggerRerun, setTriggerRerun] = useState<TriggerContext>(false);
  const [triggerClearAll, setTriggerClearAll] = useState<TriggerContext>(false);

  useEffect(() => {
    (
      notepadRef.current!.offsetParent!.firstChild as HTMLElement
    ).style.borderBottom = "none";
  }, []);

  useTxtTyping(triggerClearAll, triggerRerun, textAreaRef);

  return (
    <NotepadContainer ref={notepadRef}>
      <TriggerRerunContext.Provider value={setTriggerRerun}>
        <TriggerClearAllContext.Provider value={setTriggerClearAll}>
          <Toolbar fontSize={fontSize} setFontSize={setFontSize} />
        </TriggerClearAllContext.Provider>
      </TriggerRerunContext.Provider>
      <TextInputArea
        ref={textAreaRef}
        tabIndex={0}
        fontSize={fontSize}
        spellCheck={false}
      />
    </NotepadContainer>
  );
}

function useTxtTyping(
  triggerClearAll: TriggerContext,
  triggerRerun: TriggerContext,
  textAreaRef: React.RefObject<HTMLTextAreaElement>
) {
  const { lang } = useLangContext();
  const [isTxtTyping, setIsTxtTyping] = useState(false);
  const txt = getFormattedText(lang.apps.aboutMe.speech, "\n");

  const mimicTyping = async () => {
    try {
      clearAll(textAreaRef);
      await mimicKeystrokes(txt, textAreaRef.current!, "value");
    } catch (e: any) {}
  };

  const rerun = () => {
    if (!isTxtTyping) return setIsTxtTyping(true);

    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Rerun" }));
    mimicTyping();
  };

  useEffect(() => {
    if (!isTxtTyping) return;

    clearAll(textAreaRef);
    mimicTyping();
  }, [isTxtTyping]);

  useEffect(() => {
    rerun();
  }, [triggerRerun, lang]);

  useEffect(() => {
    if (!triggerClearAll) return;

    clearAll(textAreaRef);
    setIsTxtTyping(false);
  }, [triggerClearAll]);
}
