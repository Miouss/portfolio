import { useContext, useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import LoginFormBuilder from "../helper/LoginFormBuilder";
import {
  LoginFormButton,
  LoginFormLoadingContainer,
  LoginFormTitle,
} from "./style";
import { LoginDispatchContext } from "../../Login";
import ProfilPicture from "../../../../assets/avatars/samir.png";

export default function FormSamir() {
  const name = "Samir Ghabi";
  const profilPicture = ProfilPicture;
  const setIsLogged = useContext(LoginDispatchContext);

  const [loadDesktop, setLoadDesktop] = useState(false);

  useEffect(() => {
    if (!loadDesktop) return;

    setTimeout(() => {
      setIsLogged(true);
    }, 1500);
    setTimeout(() => {
      setLoadDesktop(false);
    }, 3000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadDesktop]);

  return (
    <LoginFormBuilder sessionName={name} profilPicture={profilPicture}>
      {loadDesktop ? (
        <LoginFormLoadingContainer>
          <CircularProgress style={{ color: "rgba(255,255,255,0.5)" }} />
          <Box>Bienvenue</Box>
        </LoginFormLoadingContainer>
      ) : (
        <>
          <LoginFormTitle>{name}</LoginFormTitle>

          <LoginFormButton
            variant="contained"
            onClick={() => setLoadDesktop(true)}
          >
            Se connecter
          </LoginFormButton>
        </>
      )}
    </LoginFormBuilder>
  );
}