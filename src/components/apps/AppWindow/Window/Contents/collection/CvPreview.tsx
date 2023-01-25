import styled from "@mui/system/styled";

export const ProjetPreviewApp = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  rowGap: "10rem",
  backgroundColor: "lightgray !important",
  overflow: "scroll",
});

export const ProjectContainer = styled("div")({
  position: "relative",
  width: "80%",

  display: "flex",
  justifyContent: "center",
  alignItems: "center", 
  alignSelf: "center",
});

export const BackgroundLayer = styled("div")({
  "& > *": {
    height: "auto",
    width: "100%",
  },
});