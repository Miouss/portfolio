import {
  LoginSessionGlobalContainer,
  LoginSessionContainer,
  LoginSessionBadge,
  LoginSessionTitle,
} from "../styled/LoginSession";
import ProfilPicture from "../../../assets/profil.png";
import { LoginSessionProp } from "../Login";

interface Props {
    selectedLoginSession: LoginSessionProp;
    setSelectedLoginSession: (loginSession: LoginSessionProp) => void;
}
export default function LoginSession({ selectedLoginSession, setSelectedLoginSession }: Props) {
  const selectLoginSession = (loginSession: "Samir" | "Miouss") => {
    setSelectedLoginSession(loginSession);
  };

  return (
    <LoginSessionGlobalContainer>
      <LoginSessionContainer
        selected={selectedLoginSession === "Samir" ? true : false}
        onClick={() => selectLoginSession("Samir")}
      >
        <LoginSessionBadge>
          <img src={`${ProfilPicture}`}></img>
        </LoginSessionBadge>
        <LoginSessionTitle>Samir Ghabi</LoginSessionTitle>
      </LoginSessionContainer>
      <LoginSessionContainer
        selected={selectedLoginSession === "Miouss" ? true : false}
        onClick={() => selectLoginSession("Miouss")}
      >
        <LoginSessionBadge>
          <img src={`${ProfilPicture}`}></img>
        </LoginSessionBadge>
        <LoginSessionTitle>Miouss</LoginSessionTitle>
      </LoginSessionContainer>
    </LoginSessionGlobalContainer>
  );
}
