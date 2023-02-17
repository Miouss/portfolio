import { Dispatch, SetStateAction, createContext, useContext } from "react";
import { IsLoggedProp } from "../../types";

interface IsLoggedProviderProps {
  state: IsLoggedProp;
  dispatch: Dispatch<SetStateAction<IsLoggedProp>>;
  children: JSX.Element;
}

interface IsLoggedStateProviderProps {
  state: IsLoggedProp;
  children: JSX.Element;
}

interface IsLoggedDispatchProviderProps {
  dispatch: Dispatch<SetStateAction<IsLoggedProp>>;
  children: JSX.Element;
}

export const IsLoggedStateContext = createContext<IsLoggedProp>(false);

export const IsLoggedDispatchContext = createContext<
  Dispatch<SetStateAction<IsLoggedProp>>
>((isLogged) => isLogged);



export function IsLoggedProvider({ state, dispatch, children } : IsLoggedProviderProps) {
  return (
    <IsLoggedStateProvider state={state}>
      <IsLoggedDispatchProvider dispatch={dispatch}>
        {children}
      </IsLoggedDispatchProvider>
    </IsLoggedStateProvider>
  );
}

export function IsLoggedStateProvider({ state, children } : IsLoggedStateProviderProps) {
  return (
    <IsLoggedStateContext.Provider value={state}>
      {children}
    </IsLoggedStateContext.Provider>
  );
}

export function IsLoggedDispatchProvider({ dispatch, children } : IsLoggedDispatchProviderProps) {
  return (
    <IsLoggedDispatchContext.Provider value={dispatch}>
      {children}
    </IsLoggedDispatchContext.Provider>
  );
}

export default function useIsLoggedContext() {
  const isLogged = useContext(IsLoggedStateContext);
  const setIsLogged = useContext(IsLoggedDispatchContext);
  const isUnlocking = isLogged === "unlock";
  const isLocked = isLogged === "lock";

  return {
    isLogged,
    setIsLogged,
    isUnlocking,
    isLocked,
  };
}
