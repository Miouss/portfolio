import styled from "@mui/system/styled";

export const StartMenuContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "rightclick" && prop !== "popOverMenuDisplayed",
})(({ rightclick, popOverMenuDisplayed }: { rightclick: boolean | undefined, popOverMenuDisplayed:boolean | undefined }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:hover": {
    background: "#313D53",
  },
  "&:active": {
    background: "#3A455C",
  },

  backgroundColor: rightclick || popOverMenuDisplayed ? "#313E53" : "inherit",
}));

export const WindowsIconBox = styled("i")({
  width: "100%",
  height: "100%",
  padding: "0 1rem",
  
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "1",
  background: "inherit",

  "&:hover": {
    "& > *": {
      color: "#429CE3",
    },
  },


});