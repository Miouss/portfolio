import styled from "@mui/system/styled";

export const ProjetPreviewApp = styled("div", {
  shouldForwardProp: (prop) => prop !== "fsresp",
})(({ fsresp }: { fsresp: number }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  rowGap: "5rem",
  paddingTop: "2rem",
}));

export const ProjectContainer = styled("div")({
  position: "relative",
  alignSelf: "center",
  width: "70%",
  display: "flex",
  flexDirection: "column",

  border: "1px solid rgba(0, 0, 0, 0.2)",
});

export const BackgroundLayer = styled("div")({
  position: "absolute",
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",

  "& > *": {
    flex: 1,
  },

  "& > * > img": {
    width: "100%",
    height: "100%",
    objectFit: "scale-down",
  },
});
