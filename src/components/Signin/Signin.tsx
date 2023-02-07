import {
  LoginContainer,
  BackgroundLayer,
  LoginBox,
  LoginSubBox,
  LockContainer,
  SigninContainer,
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
  setShowSignInWall: (showSignIn: boolean) => void;
  setShowDesktop: (showDesktop: boolean) => void;
}

export const IsUnlockingContext = createContext(false);

export default function Signin({
  isLogged,
  setIsLogged,
  setShowSignInWall,
  setShowDesktop,
}: Props) {
  const loginRef = useRef<HTMLDivElement>(null);
  const lockMenuRef = useRef<HTMLDivElement>(null);
  const [selectedLoginSession, setSelectedLoginSession] =
    useState<LoginSessionProp>("Samir");

  if (isLogged === "lock") setTimeout(() => lockMenuRef.current?.focus(), 500);

  const handleAnimationStart = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === "fadeOutSignIn") return setShowDesktop(true);
  };

  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === "fadeOutSignIn") return setShowSignInWall(false);
    if (e.animationName === "fadeInSignIn" && isLogged !== "lock") return setShowDesktop(false);
  };

  return (
    <SigninContainer
      ref={loginRef}
      visible={isLogged !== true}
      onAnimationStart={handleAnimationStart}
      onAnimationEnd={handleAnimationEnd}
    >
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
    </SigninContainer>
  );
}
