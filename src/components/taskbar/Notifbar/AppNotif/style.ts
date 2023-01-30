import styled from "@mui/system/styled";

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
