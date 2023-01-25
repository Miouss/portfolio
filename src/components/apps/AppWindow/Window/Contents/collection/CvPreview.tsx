import styled from "@mui/system/styled";

export const ProjetPreviewApp = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  rowGap: "10rem",
  backgroundColor: "lightgray !important",
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
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  overflow: "hidden",
  
  "& > *": {
    width: "100%",
    objectFit: "cover",
  },
});