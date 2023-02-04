import styled from "@mui/system/styled";

export const LockMenuContainer = styled("div")({
  background: "transparent",
  color: "white",
  height: "100%",
  width: "100%",
  display: "flex",
});

export const FullDateContainer = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-end",
  whiteSpace: "nowrap",
});

export const FullDateBox = styled("div")({
  padding: "0 0 4rem 2rem",
});

export const Date = styled("div")({
  fontSize: "4.4rem",
});

export const Time = styled("div")({
  fontSize: "6.5rem",
});

export const IconContainer = styled("div")({
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
});

export const IconButton = styled("button")({
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
