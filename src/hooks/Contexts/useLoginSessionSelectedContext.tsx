import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { LoginSessionProp } from "../../types";

export const LoginSessionSelectedStateContext =
  createContext<LoginSessionProp>("Samir");

export const LoginSessionSelectedDispatchContext = createContext<
  Dispatch<SetStateAction<LoginSessionProp>>
>(() => {});

interface LoginSessionSelectedProviderProps {
  stateOnly?: boolean;
  children: JSX.Element;
}
export function LoginSessionSelectedProvider({
  stateOnly,
  children,
}: LoginSessionSelectedProviderProps) {
  const [loginSessionSelected, setLoginSessionSelected] =
    useState<LoginSessionProp>("Samir");

  return (
    <LoginSessionSelectedStateContext.Provider value={loginSessionSelected}>
      {stateOnly ? (
        <>{children}</>
      ) : (
        <LoginSessionSelectedDispatchContext.Provider
          value={setLoginSessionSelected}
        >
          {children}
        </LoginSessionSelectedDispatchContext.Provider>
      )}
    </LoginSessionSelectedStateContext.Provider>
  );
}

export default function useLoginSessionSelectedContext() {
  const loginSessionSelected = useContext(LoginSessionSelectedStateContext);
  const setLoginSessionSelected = useContext(
    LoginSessionSelectedDispatchContext
  );

  return {
    loginSessionSelected,
    setLoginSessionSelected,
  };
}
