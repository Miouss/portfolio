import {
  LoginFormContainer,
  LoginFormButton,
  LoginFormTitle,
  LoginFormBadge,
  LoginInput,
  InputButton,
} from "../styled/LoginForm";
import ProfilPicture from "../../../assets/profil.png";
import { LoginSessionProp } from "../Login";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface Props {
  selectedLoginSession: LoginSessionProp;
  setIsLogged: (isLogged: boolean) => void;
}
export default function LoginForm({ selectedLoginSession, setIsLogged }: Props) {
  return (
    <LoginFormContainer>
      {selectedLoginSession === "Samir" ? (
        <>
          <LoginFormBadge>
            <img src={`${ProfilPicture}`}></img>
          </LoginFormBadge>
          <LoginFormTitle>Samir Ghabi</LoginFormTitle>
          <LoginFormButton variant="contained" onClick={() => setIsLogged(true)}>Se connecter</LoginFormButton>
        </>
      ) : (
        <>
          <LoginFormBadge>
            <img src={`${ProfilPicture}`}></img>
          </LoginFormBadge>
          <LoginFormTitle>Miouss</LoginFormTitle>
          <LoginInput
            endAdornment={
              <InputButton>
                <ArrowForwardIcon />
              </InputButton>
            }
          ></LoginInput>
        </>
      )}
    </LoginFormContainer>
  );
}
