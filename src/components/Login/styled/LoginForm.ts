import styled from "@mui/system/styled";

import { Stack, Button, Input } from "@mui/material";

export const LoginFormContainer = styled(Stack)({
  marginTop: "150px",
  width: "100%",
  maxWidth: "400px",
  "& > *": {
    textAlign: "center",
    width: "100%",
  },
});

export const LoginFormBadge = styled(Stack)({
  backgroundColor: "white",
  borderRadius: "50%",
  width: "100%",
  height: "240px",
  justifyContent: "center",
  alignItems: "center",
  background: "transparent",
  "& > *": {
    height: "100%",
    width: "auto",
    borderRadius: "50%",
  },
});

export const LoginFormTitle = styled("h2")({
  color: "white",
});

export const LoginFormButton = styled(Button)({
  height: "50px",
  background: "rgba(255, 255, 255, 0.2)",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.4)",
    cursor: "default",
  },
  borderRadius: "10px",
});

export const LoginFormInput = styled(Input)({
  border: "5px solid 	rgba(211,211,211, 0.3)",
  "& > *": {
    backgroundColor: "white !important",
  },
  "& > :first-child": {
    paddingLeft: "10px",
    paddingRight: "10px",
  },
});

LoginFormInput.defaultProps = {
  type: "password",
  disableUnderline: true,
  placeholder: "Password",
};

export const InputButton = styled(Button)({
  "& > *": {
    color: "white",
  },
  "&:hover": {
    cursor: "default",
  },

  background: "rgba(211,211,211, 0.3) !important",
  borderLeft: "1px solid black",
  borderRadius: "0",
});

export const LoginFormLoadingContainer = styled(Stack)({
  marginTop: "60px",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  color: "white",
  fontSize: "1.2rem",
});

LoginFormLoadingContainer.defaultProps = {
  direction: "row",
};