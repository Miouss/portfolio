import styled from "@mui/system/styled";

import { Stack, Button, Input } from "@mui/material";

export const LoginFormTitle = styled("h2")({
  color: "white",
  fontSize: "1.4rem",
});

export const LoginFormButton = styled(Button)({
  height: "35px",
  background: "rgba(255, 255, 255, 0.2)",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.4)",
    cursor: "default",
    animationPlayState: "paused",

  },
  borderRadius: "10px",

  animation: "breathing 1s ease-in-out infinite alternate",

  "@keyframes breathing": {
    "0%": {
      transform: "scale(1)",
    },
    "100%": {
      transform: "scale(1.1)",
    },
  },
});

const wrongPassWordAnim = {
  "@keyframes wrong-password": {
    "0%": {
      transform: "translateX(-1%)",
    },
    "50%": {
      transform: "translateX(1%)",
    },
    "100%": {
      transform: "translateX(0%)",
    },
  },
};

export const LoginFormInput = styled(Input, {
  shouldForwardProp: (prop) => prop !== "anim",
})(({ anim }: { anim: boolean }) => ({
  border: "5px solid 	rgba(211,211,211, 0.3)",
  "& > :first-of-type": {
    backgroundColor: "white",

    paddingLeft: "10px",
    paddingRight: "10px",
  },
  animation: anim ? "wrong-password 0.1s linear forwards" : "none",
  ...wrongPassWordAnim,
}));

LoginFormInput.defaultProps = {
  type: "password",
  disableUnderline: true,
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
  cursor: "default",
});

LoginFormLoadingContainer.defaultProps = {
  direction: "row",
};

export const LoginFormError = styled(Stack)({
  paddingTop: "10px",
  color: "white",
  gap: "7px",
  fontSize: "0.9rem",
  "& > :first-of-type": {
    fontStyle: "italic",
  },
  "& > :last-of-type": {
    backgroundColor: "red",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
});
