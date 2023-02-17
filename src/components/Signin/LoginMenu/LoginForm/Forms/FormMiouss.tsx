import { useState } from "react";
import {Miouss, langs} from "../../../../../assets";
import {
  InputButton,
  LoginFormError,
  LoginFormInput,
  LoginFormTitle,
} from "../../../../../styles";
import LoginFormHelper from "../helper/LoginFormHelper";

import ArrowForward from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";

import { useLangContext } from "../../../../../hooks";

export default function FormMiouss() {
  const name = "Miouss";
  const profilPicture = Miouss;

  const [cssAnim, setCssAnim] = useState(false);
  const [showPasswordHint, setShowPasswordHint] = useState(false);

  const { lang } = useLangContext();

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
    <LoginFormHelper sessionName={name} profilPicture={profilPicture}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <LoginFormTitle>{name}</LoginFormTitle>
        <LoginFormInput
          placeholder={langs[lang].signin.password.placeholder}
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
            <Box>{langs[lang].signin.password.hint}</Box>
            <Box>{langs[lang].signin.password.error}</Box>
          </LoginFormError>
        )}
      </form>
    </LoginFormHelper>
  );
}
