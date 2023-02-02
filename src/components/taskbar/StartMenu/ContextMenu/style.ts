import styled from "@mui/system/styled";

interface ContextMenuProps {
  mouseX: number;
  mouseY: number;
}

export const ContextMenuPop = styled("div", {
  shouldForwardProp: (prop) => prop !== "mouseX" && prop !== "mouseY",
})(({ mouseX, mouseY }: ContextMenuProps) => ({
  position: "absolute",
  display: "flex",
  height: "100px",
  width: "150px",
  backgroundColor: "#2B2B2B",

  top: mouseY,
  left: mouseX,

  transform: "translateY(-100%)",
  zIndex: 3,
  border: "1px solid #8E8E8E",
}));

export const MenuList = styled("ul")({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column-reverse",
  justifyContent: "space-around",
  alignItems: "center",

  listStyleType: "none",

  boxSizing: "border-box",
  padding: "5px 0px 5px 0px",
  margin: "0",
});

export const MenuItem = styled("li")({
  flex: "1",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "left",

  fontSize: "12px !important",

  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    cursor: "default",
  },
});
