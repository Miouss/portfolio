import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import LoginFormHelper from "./SigninLoginFormHelper";
import {
  LoginFormButton,
  LoginFormLoadingContainer,
  LoginFormTitle,
} from "../../styles";
import { Samir } from "../../assets";
import { useLangContext, useIsLoggedContext } from "../../hooks";

export default function FormSamir() {
  const name = "Samir Ghabi";
  const profilPicture = Samir;
  const [loadDesktop, setLoadDesktop] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Bienvenue");
  const [promptMessage, setPromptMessage] = useState("Se connecter");

  const { lang } = useLangContext();
  const { isUnlocking, setIsLogged } = useIsLoggedContext();

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

  useEffect(() => {
    if (loadDesktop) return;

    if (isUnlocking) {
      setPromptMessage(lang.signin.message.unlock);
      setLoadingMessage(lang.signin.loading.unlock);
      return;
    }
    setPromptMessage(lang.signin.message.connect);
    setLoadingMessage(lang.signin.loading.connect);
  }, [isUnlocking, lang, loadDesktop]);

  return (
    <LoginFormHelper sessionName={name} profilPicture={profilPicture}>
      <>
        <LoginFormTitle>{name}</LoginFormTitle>

        {loadDesktop ? (
          <LoginFormLoadingContainer>
            <CircularProgress style={{ color: "rgba(255,255,255,0.5)" }} />
            <Box>{loadingMessage}</Box>
          </LoginFormLoadingContainer>
        ) : (
          <LoginFormButton
            variant="contained"
            onClick={() => setLoadDesktop(true)}
          >
            {promptMessage}
          </LoginFormButton>
        )}
      </>
    </LoginFormHelper>
  );
}
