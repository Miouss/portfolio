import styled from "@mui/system/styled";
import { Stack, Typography } from "@mui/material";

export const MovableBarContainer = styled(Stack)({
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  borderBottom: "1px solid black",
  "& > *": {
    height: "100%",
  },
});

MovableBarContainer.defaultProps = {
  direction: "row",
};
export const MovableBarIcon = styled(Stack)({
  width: "48px",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  "& > *": {
    color: "black !important",
    width: "40%",
    height: "100%",
    objectFit: "contain",
  },
});

export const MovableBarTitle = styled(Typography)({
  flexGrow: 1,
  display: "flex",
  height: "100%",
  alignItems: "center",
});
