import styled from "@mui/system/styled";

export const DesktopGridContainer = styled("div")({
  position: "relative",
  height: "calc(100vh - 45px)",
  display: "grid",
  gridTemplateColumns: "repeat(10, 1fr)",
  gridTemplateRows: "repeat(5, 1fr)",
  marginRight: "1rem",

  zIndex: -1,
});

export const DesktopEmptyGridItem = styled("div")({
  backgroundColor: "transparent",
});
