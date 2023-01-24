import ProfilPicture from "../../../assets/miouss.png";
import {
  InputButton,
  LoginFormInput,
  LoginFormTitle,
} from "../styled/LoginForm";
import LoginFormBuilder from "./helper/LoginFormBuilder";

import ArrowForward from "@mui/icons-material/ArrowForward";

export default function LoginFormMiouss() {
  const name = "Miouss";
  const profilPicture = ProfilPicture;

  return (
    <LoginFormBuilder sessionName={name} profilPicture={profilPicture}>
      <>
        <LoginFormTitle>{name}</LoginFormTitle>
        <LoginFormInput
          endAdornment={
            <InputButton>
              <ArrowForward />
            </InputButton>
          }
        ></LoginFormInput>
      </>
    </LoginFormBuilder>
  );
}
