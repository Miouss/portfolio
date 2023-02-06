import styled from "@mui/system/styled";
import WindowsWallpaper from "../assets/backgrounds/session.png";

export const SessionContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "visible",
})(({ visible }: { visible: boolean | "lock" }) => ({
  width: "100%",
  height: "100%",

  backgroundImage: `url(${WindowsWallpaper})`,
  backgroundPosition: "76% 50%",
  backgroundRepeat: "norepeat",
  backgroundSize: "cover",
  visibility: visible ? "visible" : "hidden",
  transition: "visibility 1s",
  
  zIndex: 0,
}));

export const SigninContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "visible",
})(({ visible }: { visible: boolean }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",

  animation : visible ? "fadeInSignIn 1s forwards" : "fadeOutSignIn 1s forwards",
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
