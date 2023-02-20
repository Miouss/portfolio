import styled from "@mui/system/styled";

export const SwitchIconContainer = styled("div")({
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
});

export const SwitchIconButton = styled("button")({
  background: "transparent",
  border: "none",
  color: "white",

  margin: "0 2rem 2rem 0",
  padding: "1rem",

  "&:hover": {
    background: "rgba(255, 255, 255, 0.1)",
  },
  "& > *": {
    fontSize: "2rem",
  },
});
