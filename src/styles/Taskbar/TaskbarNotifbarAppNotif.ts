import styled from "@mui/system/styled";
import { propsFilter } from "../propsFilter";

export const NotifWindow = styled(
  "div",
  propsFilter("visible")
)(({ visible }: { visible: boolean }) => ({
  position: "absolute",
  top: 0,
  height: "fit-content",
  width: "320px",
  display: "flex",

  visibility: visible ? "visible" : "hidden",

  border: "1px solid #3C3F43",
  borderBottom: "none",
  borderRight: "none",
  background: "#222A2F",
  zIndex: 0,

  animation: visible ? "notifWindowOpen 0.1s linear forwards" : "none",

  "@keyframes notifWindowOpen": {
    "0%": {
      transform: "translate(59%, -100%)",
    },
    "100%": {
      zIndex: 3,
      transform: "translate(-47%, -100%)",
    },
  },
}));

export const AppNotifButton = styled("div")({
  positon: "relative",
  width: "20px",
  height: "100%",
  display: "flex",
  alignItems: "center",
  padding: "0 0.5rem",
  "& > *": {
    width: "100%",
    height: "auto",
    color: "white",
  },

  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
});
