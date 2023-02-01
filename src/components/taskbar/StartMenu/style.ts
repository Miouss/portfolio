import styled from "@mui/system/styled";

export const StartMenuBox = styled("div", {
  shouldForwardProp: (prop) => prop !== "rightclick" && prop !== "popOverMenuDisplayed",
})(({ rightclick, popOverMenuDisplayed }: { rightclick: boolean, popOverMenuDisplayed:boolean }) => ({
  position: popOverMenuDisplayed ? "relative" : "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },

  backgroundColor: rightclick || popOverMenuDisplayed ? "rgba(255, 255, 255, 0.1)" : "transparent",
}));
