import { LoginFormContainer } from "../../styles";
import FormSamir from "./SigninLoginFormSamir";
import FormMiouss from "./SigninLoginFormMiouss";
import { useLoginSessionSelectedContext } from "../../hooks";

export default function LoginForm() {
  const { loginSessionSelected } = useLoginSessionSelectedContext();

  return (
    <LoginFormContainer>
      {loginSessionSelected === "Samir" ? <FormSamir /> : <FormMiouss />}
    </LoginFormContainer>
  );
}
