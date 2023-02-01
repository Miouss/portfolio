import styled from "@mui/system/styled";  

export const PopOverMenuContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "wrapped",
})(({ wrapped }: { wrapped: boolean }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  transform: "translateY(-100%)",
  background: "#292F32",

  display: "flex",
  flexDirection: "column",
  width: wrapped ? "100%" : "300px",
  transition: "width 0.1s ease-in-out",
}));

export const PopOverMenuHeaderBox = styled("button")({
  border: "none",
  background: "transparent",
  display: "flex",
  marginBottom: "30vh",

  "&:hover": {
    background: "#57595B",
  },
});

export const PopOverMenuHeaderIcon = styled("i")({
  flex: 0,
  border: "none",
  padding: "1rem",
  transform: "translateX(-0.5rem)",

  background: "transparent",
  color: "white",
  "& > *": {
    width: "24px",
    height: "24px",
  },
});

export const PopOverMenuHeaderLabel = styled("h3",)({
  flex: 1,
  color: "white",
  textAlign: "left",
  alignSelf: "center",

  padding: 0,
  margin: 0,

  overflow: "hidden",
});

export const PopOverMenuItem = styled("button")({
  border: "none",
  background: "transparent",
  color: "white",

  display: "flex",
  "&:hover": {
    background: "#57595B",
  },
});

export const PopOverMenuItemIcon = styled("i")({
  flex: 0,
  padding: "1rem",
});
export const PopOverMenuItemLabel = styled("h4")({
  flex: 1,
  margin: 0,
  padding: 0,
  textAlign: "left",
  alignSelf: "center",
  overflow: "hidden",
  whiteSpace: "nowrap",
});
