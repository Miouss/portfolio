import { useState } from "react";
import ProfilPicture from "../../../../assets/avatars/miouss.png";
import {
  InputButton,
  LoginFormError,
  LoginFormInput,
  LoginFormTitle,
} from "./style";
import LoginFormBuilder from "../helper/LoginFormBuilder";

import ArrowForward from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";

export default function FormMiouss() {
  const name = "Miouss";
  const profilPicture = ProfilPicture;

  const [cssAnim, setCssAnim] = useState(false);
  const [showPasswordHint, setShowPasswordHint] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCssAnim(true);
    setShowPasswordHint(true);
  };

  const handleKeyPressed = (event) => {
    event.preventDefault();

    event.target.value = event.target.value.slice(0, -1);

    if (event.nativeEvent.inputType === "deleteContentBackward") return;
    event.target.value += "●";
  };

  return (
    <LoginFormBuilder sessionName={name} profilPicture={profilPicture}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <LoginFormTitle>{name}</LoginFormTitle>
        <LoginFormInput
          onChange={handleKeyPressed}
          type="text"
          anim={cssAnim}
          onAnimationEnd={() => setCssAnim(false)}
          endAdornment={
            <InputButton type="submit">
              <ArrowForward />
            </InputButton>
          }
        ></LoginFormInput>
        {showPasswordHint && (
          <LoginFormError>
            <Box>Password hint : Meow! Meow! Meow!</Box>
            <Box>Password incorrect !</Box>
          </LoginFormError>
        )}
      </form>
    </LoginFormBuilder>
  );
}