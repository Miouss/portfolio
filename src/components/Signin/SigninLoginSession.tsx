import {
  LoginSessionGlobalContainer,
} from "../../styles";
import SessionSamir from "./SigninLoginSessionSamir";
import SessionMiouss from "./SigninLoginSessionMiouss";


export default function LoginSession() {
  return (
    <LoginSessionGlobalContainer>
        <SessionSamir />
        <SessionMiouss />
    </LoginSessionGlobalContainer>
  );
}
