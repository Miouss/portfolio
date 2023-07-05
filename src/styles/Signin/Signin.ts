import styled from "@mui/system/styled";
import { propsFilter } from "../propsFilter";

export const SigninContainer = styled(
  "div",
  propsFilter("visible")
)(({ visible }: { visible: boolean }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",

  animation: visible ? "fadeInSignIn 1s forwards" : "fadeOutSignIn 1s forwards",
  zIndex: 1,

  "@keyframes fadeInSignIn": {
    "0%": {
      opacity: "0",
      visibility: "visible",
    },
    "99.999%": {
      opacity: "1",
    },
    "100%": {
      opacity: "1",
      visibility: "visible",
    },
  },

  "@keyframes fadeOutSignIn": {
    "0%": {
      opacity: "1",
      visibility: "visible",
    },
    "99.999%": {
      opacity: "0",
    },
    "100%": {
      opacity: "0",
      visibility: "hidden",
    },
  },
}));

export const LoginContainer = styled(
  "div",
  propsFilter("visible")
)(({ visible }: { visible: boolean }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "100%",
  position: "relative",
  opacity: visible ? 1 : 0,
  transition: "opacity 1s",
}));

export const BackgroundLayer = styled(
  "div",
  propsFilter("blurred")
)(({ blurred }: { blurred: boolean }) => ({
  position: "absolute",
  width: "100vw",
  height: "100vh",
  "& > *": {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },

  ":before": {
    content: "''",
    position: "absolute",
    width: "100vw",
    height: "100vh",
    pointerEvents: "none",
    backdropFilter: blurred ? "blur(10px)" : "blur(0px)",
    transition: "backdrop-filter 0.5s",
  },

  zIndex: -1,
}));

export const LoginBox = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",

  alignItems: "center",
  zIndex: 1,
});

export const LoginSubBox = styled("section")({
  width: "100%",
  height: "100%",

  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  paddingBottom: "2rem",
});

export const LockContainer = styled(
  "div",
  propsFilter("visible")
)(({ visible }: { visible: boolean }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  display: visible ? "unset" : "none",
  animation: visible ? "fadeInLockMenu 0.5s ease-in-out both" : "none",

  "@keyframes fadeInLockMenu": {
    "100%": {
      opacity: 1,
    },
  },
}));
