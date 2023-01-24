import {
  LoginSessionGlobalContainer,
} from "../styled/LoginSession";
import LoginSessionSamir from "./LoginSessionSamir";
import LoginSessionMiouss from "./LoginSessionMiouss";


export default function LoginSession() {
  return (
    <LoginSessionGlobalContainer>
        <LoginSessionSamir />
        <LoginSessionMiouss />
    </LoginSessionGlobalContainer>
  );
}
