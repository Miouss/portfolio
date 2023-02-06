import styled from "@mui/system/styled";
import LoginBackground from "../../assets/backgrounds/login.png";
import { Stack } from "@mui/material";

export const LoginContainer = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "visible",
})(({ visible }: { visible: boolean }) => ({
  alignItems: "center",
  width: "100%",
  height: "100%",
  position: "relative",
  opacity: visible ? 1 : 0,
  transition: "opacity 1s",
}));

export const BackgroundLayer = styled("div", {
  shouldForwardProp: (prop) => prop !== "blurred",
})(({ blurred }: { blurred: boolean }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundImage: `url(${LoginBackground})`,
  "& > *": {
    width: "100%",
    height: "auto",
  },

  ":before": {
    content: "''",
    position: "absolute",
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    backdropFilter: blurred ? "blur(10px)" : "blur(0px)",
    transition: "backdrop-filter 0.5s",
  },

  zIndex: -1,
}));

export const LoginBox = styled(Stack)({
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

export const LockContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "visible",
})(({ visible }: { visible: boolean }) => ({
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