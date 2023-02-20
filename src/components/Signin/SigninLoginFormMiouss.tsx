import { useState } from "react";
import {Miouss, langs, ArrowForwardIcon} from "../../assets";
import {
  InputButton,
  LoginFormError,
  LoginFormInput,
  LoginFormTitle,
} from "../../styles";
import LoginFormHelper from "./SigninLoginFormHelper";

import { Box } from "@mui/material";

import { useLangContext } from "../../hooks";

export default function FormMiouss() {
  const name = "Miouss";
  const profilPicture = Miouss;

  const [cssAnim, setCssAnim] = useState(false);
  const [showPasswordHint, setShowPasswordHint] = useState(false);

  const { lang } = useLangContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCssAnim(true);
    setShowPasswordHint(true);
  };

  const handleKeyPressed = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    e.currentTarget.value = e.currentTarget.value.slice(0, -1);

    if ((e.nativeEvent as unknown as InputEvent).inputType === "deleteContentBackward") return;
    e.currentTarget.value += "●";
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
              <ArrowForwardIcon />
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
