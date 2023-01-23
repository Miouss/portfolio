import { LoginContainer, BackgroundLayer, LoginBox } from "./styled/Login";
import LoginBackground from "../../assets/login-background.png";
import LoginForm from "./LoginForm/LoginForm";
import LoginSession from "./LoginSession/LoginSession";
import { useContext, useState } from "react";

export type LoginSessionProp = "Samir" | "Miouss";

export default function Login({setIsLogged} : any) {
  const [selectedLoginSession, setSelectedLoginSession] =
    useState<LoginSessionProp>("Samir");

  return (
    <LoginContainer>
      <BackgroundLayer>
        <img src={`${LoginBackground}`}></img>
      </BackgroundLayer>
      <LoginBox>
        <LoginForm selectedLoginSession={selectedLoginSession} setIsLogged={setIsLogged} />

          <LoginSession
            selectedLoginSession={selectedLoginSession}
            setSelectedLoginSession={setSelectedLoginSession}
          />
      </LoginBox>
    </LoginContainer>
  );
}
