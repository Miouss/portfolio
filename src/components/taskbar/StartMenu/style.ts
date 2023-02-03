import styled from "@mui/system/styled";

export const StartMenuBox = styled("div", {
  shouldForwardProp: (prop) => prop !== "rightclick" && prop !== "popOverMenuDisplayed",
})(({ rightclick, popOverMenuDisplayed }: { rightclick: boolean | undefined, popOverMenuDisplayed:boolean | undefined }) => ({
  position: popOverMenuDisplayed ? "relative" : "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    backgroundColor: "#313E53",
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
});