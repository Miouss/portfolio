import { LoginFormContainer } from "../../../../styles";
import FormSamir from "./Forms/FormSamir";
import FormMiouss from "./Forms/FormMiouss";
import { useLoginSessionSelectedContext } from "../../../../hooks";

export default function LoginForm() {
  const { loginSessionSelected } = useLoginSessionSelectedContext();

  return (
    <LoginFormContainer>
      {loginSessionSelected === "Samir" ? <FormSamir /> : <FormMiouss />}
    </LoginFormContainer>
  );
}
