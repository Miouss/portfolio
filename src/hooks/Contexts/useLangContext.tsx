import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { LanguageProp } from "../../types";

export const LangStateContext = createContext<LanguageProp>("fr");
export const LangDispatchContext = createContext<
  Dispatch<SetStateAction<LanguageProp>>
>((lang) => lang);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<LanguageProp>("fr");

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
