import {
  LoginSessionBadge,
  LoginSessionContainer,
  LoginSessionTitle,
} from "./style";

import { LoginSessionProp } from "../../../../../types/types";
import useLoginSessionSelectedContext from "../../../../../hooks/useLoginSessionSelectedContext";

interface Props {
  sessionName: LoginSessionProp;
  profilPicture: string;
}

export default function LoginSessionBuilder({
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
      <LoginSessionBadge>
        <img src={`${profilPicture}`} alt={`Profil of ${sessionName}`}></img>
      </LoginSessionBadge>
      <LoginSessionTitle>{sessionName}</LoginSessionTitle>
    </LoginSessionContainer>
  );
}
