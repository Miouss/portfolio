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
