import {
  LoginContainer,
  BackgroundLayer,
  LoginBox,
  LoginSubBox,
  LockContainer,
} from "./style";
import LoginBackground from "../../assets/backgrounds/login.png";
import LoginForm from "./LoginMenu/LoginForm/LoginForm";
import LoginSession from "./LoginMenu/LoginSession/LoginSession";
import { createContext, useRef, useState } from "react";
import LoginIconGroup from "./LoginMenu/LoginIconGroup/LoginIconGroup";
import LockMenu from "./LockMenu/LockMenu";
import { IsLoggedProp, LoginSessionProp } from "../../types/types";

export const StateContext = createContext("" as LoginSessionProp);
export const DispatchContext = createContext(
  (prevState: LoginSessionProp) => {}
);

export const LoginDispatchContext = createContext((loginState: boolean) => {});

interface Props {
  isLogged: IsLoggedProp;
  setIsLogged: (loginState: IsLoggedProp) => void;
}

export const IsUnlockingContext = createContext(false);

export default function Signin({ isLogged, setIsLogged }: Props) {
  const lockMenuRef = useRef<HTMLDivElement>(null);
  const [selectedLoginSession, setSelectedLoginSession] =
    useState<LoginSessionProp>("Samir");

  if (isLogged === "lock") {
    setTimeout(() => {
      lockMenuRef.current?.focus();
    }, 500);
  }

  return (
    <>
      <BackgroundLayer blurred={isLogged !== "lock"}>
        <img src={`${LoginBackground}`} alt={"login background"}></img>
      </BackgroundLayer>
      <LockContainer
        ref={lockMenuRef}
        visible={isLogged === "lock"}
        onClick={() => setIsLogged("unlock")}
        onContextMenu={() => {
          setIsLogged("unlock");
        }}
        onKeyDown={() => {
          setIsLogged("unlock");
        }}
        tabIndex={0}
      >
        <LockMenu />
      </LockContainer>
      <LoginContainer visible={isLogged !== "lock"}>
        <LoginBox>
          <StateContext.Provider value={selectedLoginSession}>
            <LoginDispatchContext.Provider value={setIsLogged}>
              <IsUnlockingContext.Provider value={isLogged === "unlock"}>
                <LoginForm />
              </IsUnlockingContext.Provider>
            </LoginDispatchContext.Provider>
          </StateContext.Provider>
          <LoginSubBox>
            <StateContext.Provider value={selectedLoginSession}>
              <DispatchContext.Provider value={setSelectedLoginSession}>
                <LoginSession />
              </DispatchContext.Provider>
            </StateContext.Provider>
            <LoginIconGroup />
          </LoginSubBox>
        </LoginBox>
      </LoginContainer>
    </>
  );
}
