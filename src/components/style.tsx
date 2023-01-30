import styled from "@mui/system/styled";
import WindowsWallpaper from "../assets/backgrounds/session.png";

export const SessionContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "isLogged",
})(({ isLogged }: { isLogged: boolean }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",

  backgroundImage: `url(${WindowsWallpaper})`,
  backgroundPosition: "76% 50%",
  backgroundSize: "1920px 1080px",
  backgroundRepeat: "repeat",
  visibility: isLogged ? "visible" : "hidden",
}));

export const LoginContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "isLogged",
})(({ isLogged }: { isLogged: boolean }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",

  animation: !isLogged
    ? "fadeInLogin 0.5s ease-in-out forwards"
    : "fadeOutLogin 0.5s ease-in-out forwards",

  "@keyframes fadeInLogin": {
    "0%": {
      opacity: "0",
    },
    "100%": {
      opacity: "1",
      visibility: "visible",
    },
  },

  "@keyframes fadeOutLogin": {
    "0%": {
      opacity: "1",
    },
    "100%": {
      opacity: "0",
      visibility: "hidden",
    },
  },
}));
