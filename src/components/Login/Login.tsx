import { LoginContainer, BackgroundLayer, LoginBox } from "./styled/Login";
import LoginBackground from "../../assets/login-background.png";
import LoginForm from "./LoginForm/LoginForm";
import LoginSession from "./LoginSession/LoginSession";
import { createContext, useState } from "react";

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

          <StateContext.Provider value={selectedLoginSession}>
            <DispatchContext.Provider value={setSelectedLoginSession}>
              <LoginSession />
            </DispatchContext.Provider>
          </StateContext.Provider>
        </LoginBox>
      </LoginContainer>
  );
}
