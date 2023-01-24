import styled from "@mui/system/styled";

import { Stack } from "@mui/material";

export const ProjetPreviewApp = styled(Stack)({
  boxSizing: "border-box",
  padding: "1rem",
  gap: "2rem",
  flexWrap: "wrap",
  backgroundColor: "lightgray !important",
  justifyContent: "center",
  alignItems: "center",
  overflow: "scroll",
});

ProjetPreviewApp.defaultProps = {
  direction: "row",
};

export const ProjectContainer = styled(Stack)({
  position: "relative",
  width: "80%",
  justifyContent: "center",
  alignItems: "center",
});

export const BackgroundLayer = styled(Stack)({
  border: "1px solid black",
  borderRadius: "1rem",
  overflow: "hidden",
  "& > *": {
    height: "auto",
    width: "100%",
  },
});