import styled from "@mui/system/styled";

export const NotifbarContainer = styled("div")({
  position: "relative",
  display: "flex",
});

export const NotifWindow = styled("div", {
  shouldForwardProp: (prop) => prop !== "visible",
})(({ visible }: { visible: boolean }) => ({
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
      transform: "translate(-59%, -100%)",
    },
  },
}));
