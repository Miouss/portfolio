import {
  LoginSessionBadge,
  LoginSessionContainer,
  LoginSessionTitle,
} from "../../styles";

import { LoginSessionProp } from "../../types";
import { useLoginSessionSelectedContext } from "../../hooks";

interface Props {
  sessionName: LoginSessionProp;
  profilPicture: string;
}

export default function LoginSessionHelper({
  sessionName,
  profilPicture,
}: Props) {
  const { loginSessionSelected, setLoginSessionSelected } =
    useLoginSessionSelectedContext();

  return (
    <LoginSessionContainer
      selected={loginSessionSelected === `${sessionName}` ? true : false}
      onClick={() => setLoginSessionSelected(`${sessionName}`)}
    >
      <LoginSessionBadge sessionName={sessionName}>
        <img src={`${profilPicture}`} alt={`Profil of ${sessionName}`}></img>
      </LoginSessionBadge>
      <LoginSessionTitle>{sessionName}</LoginSessionTitle>
    </LoginSessionContainer>
  );
}
