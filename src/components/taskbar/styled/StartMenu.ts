import { styled } from "@mui/styles";
import { WindowsIcon } from "../../../assets/icons/iconsList";

export const StartMenuBox = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
});

export const StartMenuIcon = styled(WindowsIcon)({
  color: "dodgerblue",
  "&:hover": {
    color: "white",
  },
});
