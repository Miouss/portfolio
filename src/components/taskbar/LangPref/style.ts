import styled from "@mui/system/styled";

export const LangPrefContainer = styled("section")({
  position: "relative",
  height: "100%",
  width: "32px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 0.3rem",
  background: "transparent",
  color: "white",

  "&:hover": {
    background: "#313E53",
  },
});
export const LangPrefCurrent = styled("h5")({
  padding: "0",
  margin: "0",
});

export const LangPrefPopOverMenu = styled("div", {
  shouldForwardProp: (prop) => prop !== "visible",
})(({ visible }: { visible: undefined | boolean }) => ({
  position: "absolute",
  top: 0,
  transform: "translateY(-100%)",
  width: "230px",
  background: "#222A2F",
  border: "1px solid #3C3F43",
  borderBottom: "none",
  padding: "6px 0",

  display: "flex",
  flexDirection: "column-reverse",

  visibility: visible === undefined ? "hidden" : "visible",
  animation: visible
    ? "slideInLang 0.2s ease-in-out forwards"
    : "slideOutLang 0.2s ease-in-out forwards",

  "@keyframes slideInLang": {
    "0%": {
      transform: "translate(100%, -100%)",
    },
    "100%": {
      transform: "translate(0%, -100%)",
    },
  },

  "@keyframes slideOutLang": {
    "0%": {
      transform: "translate(0%, -100%)",
    },
    "100%": {
      transform: "translate(100%, -100%)",
    },
  },
}));

export const Divider = styled("hr")({
  width: "90%",
  border: "none",
  borderBottom: "1px solid #919191",
});
