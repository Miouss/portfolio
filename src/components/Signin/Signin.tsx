import {
  LoginContainer,
  BackgroundLayer,
  LoginBox,
  LoginSubBox,
  LockContainer,
  SigninContainer,
} from "../../styles";
import { LoginBackground } from "../../assets";
import LoginForm from "./SigninLoginForm";
import LoginSession from "./SigninLoginSession";
import { Dispatch, SetStateAction, useRef } from "react";
import LoginIconGroup from "./SigninLoginIconGroup";
import LockMenu from "./SigninLockMenu";
import { IsLoggedProp } from "../../types";
import { IsLoggedProvider, LoginSessionSelectedProvider } from "../../hooks";

interface Props {
  isLogged: IsLoggedProp;
  setIsLogged: Dispatch<SetStateAction<IsLoggedProp>>;
  setShowSignInWall: Dispatch<SetStateAction<boolean>>;
  setShowDesktop: Dispatch<SetStateAction<boolean>>;
}

export default function Signin({
  isLogged,
  setIsLogged,
  setShowSignInWall,
  setShowDesktop,
}: Props) {
  const loginRef = useRef<HTMLDivElement>(null);
  const lockMenuRef = useRef<HTMLDivElement>(null);

  if (isLogged === "lock") setTimeout(() => lockMenuRef.current?.focus(), 500);

  const handleAnimationStart = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === "fadeOutSignIn") return setShowDesktop(true);
  };

  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === "fadeOutSignIn") return setShowSignInWall(false);
    if (e.animationName === "fadeInSignIn" && isLogged !== "lock")
      return setShowDesktop(false);
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
          <LoginSessionSelectedProvider>
              <IsLoggedProvider state={isLogged} dispatch={setIsLogged}>
                <LoginForm />
              </IsLoggedProvider>
              <LoginSubBox>
                <LoginSession />
                <LoginIconGroup />
              </LoginSubBox>
          </LoginSessionSelectedProvider>
        </LoginBox>
      </LoginContainer>
    </SigninContainer>
  );
}
