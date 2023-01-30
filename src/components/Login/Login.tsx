import {
  LoginContainer,
  BackgroundLayer,
  LoginBox,
  LoginSubBox,
} from "./style";
import LoginBackground from "../../assets/backgrounds/login.png";
import LoginForm from "./LoginForm/LoginForm";
import LoginSession from "./LoginSession/LoginSession";
import { createContext, useState } from "react";
import LoginIcon from "./LoginIcon/LoginIcon";

export type LoginSessionProp = "Samir" | "Miouss";

export const StateContext = createContext("" as LoginSessionProp);
export const DispatchContext = createContext(
  (prevState: LoginSessionProp) => {}
);

export const LoginDispatchContext = createContext((loginState: boolean) => {});

interface Props {
  setIsLogged: (loginState: boolean) => void;
}

export default function Login({ setIsLogged }: Props) {
  const [selectedLoginSession, setSelectedLoginSession] =
    useState<LoginSessionProp>("Samir");

  return (
    <LoginContainer>
      <BackgroundLayer>
        <img src={`${LoginBackground}`} alt={"login background"}></img>
      </BackgroundLayer>
      <LoginBox>
        <StateContext.Provider value={selectedLoginSession}>
          <LoginDispatchContext.Provider value={setIsLogged}>
            <LoginForm />
          </LoginDispatchContext.Provider>
        </StateContext.Provider>
        <LoginSubBox>
          <StateContext.Provider value={selectedLoginSession}>
            <DispatchContext.Provider value={setSelectedLoginSession}>
              <LoginSession />
            </DispatchContext.Provider>
          </StateContext.Provider>
          <LoginIcon />
        </LoginSubBox>
      </LoginBox>
    </LoginContainer>
  );
}
