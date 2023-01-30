import { useContext } from "react";
import { LoginFormContainer } from "./style";
import FormSamir from "./Forms/FormSamir";
import FormMiouss from "./Forms/FormMiouss";

import { StateContext } from "../Login";

export default function LoginForm() {
  const selectedLoginSession = useContext(StateContext);

  return (
    <LoginFormContainer>
      {selectedLoginSession === "Samir" ? (
        <FormSamir />
      ) : (
        <FormMiouss />
      )}
    </LoginFormContainer>
  );
}
