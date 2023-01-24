import { useContext } from "react";
import { LoginFormContainer } from "../styled/LoginForm";
import LoginFormSamir from "./LoginFormSamir";
import LoginFormMiouss from "./LoginFormMiouss";

import { StateContext } from "../Login";

export default function LoginForm() {
  const selectedLoginSession = useContext(StateContext);

  return (
    <LoginFormContainer>
      {selectedLoginSession === "Samir" ? (
        <LoginFormSamir />
      ) : (
        <LoginFormMiouss />
      )}
    </LoginFormContainer>
  );
}
