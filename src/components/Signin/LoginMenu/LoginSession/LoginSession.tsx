import {
  LoginSessionGlobalContainer,
} from "../../../../styles";
import SessionSamir from "./Sessions/SessionSamir";
import SessionMiouss from "./Sessions/SessionMiouss";


export default function LoginSession() {
  return (
    <LoginSessionGlobalContainer>
        <SessionSamir />
        <SessionMiouss />
    </LoginSessionGlobalContainer>
  );
}
