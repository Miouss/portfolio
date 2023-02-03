import styled from "@mui/system/styled";

export const LangPrefContainer = styled("section")({
  position: "relative",
  height: "100%",
  width: "32px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "white",

  "&:hover": {
    background: "#313E53",
  },

  background: "inherit",
  zIndex: "0",
});
export const LangPrefCurrentBox = styled("div")({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  
  background: "inherit",
  zIndex: "1",
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

  zIndex: "0",
  display: "flex",
  flexDirection: "column-reverse",

  visibility: visible === undefined ? "hidden" : "visible",

  animation: visible
    ? "slideInLang 0.11s ease-in-out forwards"
    : "slideOutLang 0.11s ease-in-out forwards",

  "@keyframes slideInLang": {
    "0%": {
      transform: "translateY(0%)",
    },
    "100%": {
      transform: "translateY(-100%)",
    },
  },

  "@keyframes slideOutLang": {
    "0%": {
      transform: "translateY(-100%)",
    },
    "100%": {
      transform: "translateY(0%)",
      visibility: "hidden",
    },
  },
}));

export const Divider = styled("hr")({
  width: "90%",
  border: "none",
  borderBottom: "1px solid #919191",
});
