import { useContext } from "react";
import {
  LoginSessionBadge,
  LoginSessionContainer,
  LoginSessionTitle,
} from "./style";

import { DispatchContext, StateContext } from "../../Login";
import { LoginSessionProp } from "../../Login";

interface Props {
    sessionName: LoginSessionProp;
    profilPicture: string;
}

export default function LoginSessionBuilder({sessionName, profilPicture }: Props) {
    const setSelectedLoginSession = useContext(DispatchContext);
    const selectedLoginSession = useContext(StateContext);

  return (
    <LoginSessionContainer
      selected={selectedLoginSession === `${sessionName}` ? true : false}
      onClick={() => setSelectedLoginSession(`${sessionName}`)}
    >
      <LoginSessionBadge>
        <img src={`${profilPicture}`} alt={`Profil of ${sessionName}`}></img>
      </LoginSessionBadge>
      <LoginSessionTitle>{sessionName}</LoginSessionTitle>
    </LoginSessionContainer>
  );
}
