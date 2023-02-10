import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { LanguageProp } from "../types/types";

export const LangStateContext = createContext<LanguageProp>("fr");
export const LangDispatchContext = createContext<
  Dispatch<SetStateAction<LanguageProp>>
>((lang) => lang);

export function LangProvider({ children }) {
  const [lang, setLang] = useState<LanguageProp>("eng");

  return (
    <LangStateContext.Provider value={lang}>
      <LangDispatchContext.Provider value={setLang}>
        {children}
      </LangDispatchContext.Provider>
    </LangStateContext.Provider>
  );
}

export default function useLangContext() {
  const lang = useContext(LangStateContext);
  const setLang = useContext(LangDispatchContext);

  return {
    lang,
    setLang,
  };
}
