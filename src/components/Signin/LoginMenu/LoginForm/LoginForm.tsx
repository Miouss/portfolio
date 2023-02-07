import { LoginFormContainer } from "./style";
import FormSamir from "./Forms/FormSamir";
import FormMiouss from "./Forms/FormMiouss";
import useLoginSessionSelectedContext from "../../../../hooks/useLoginSessionSelectedContext";

export default function LoginForm() {
  const { loginSessionSelected } = useLoginSessionSelectedContext();
  console.log('Login form', loginSessionSelected);
  return (
    <LoginFormContainer>
      {loginSessionSelected === "Samir" ? <FormSamir /> : <FormMiouss />}
    </LoginFormContainer>
  );
}
