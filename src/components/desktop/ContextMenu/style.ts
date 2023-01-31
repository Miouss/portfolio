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
  flexDirection: "column",
  width: "250px",
  background: "#EEEEEE",

  top: mouseY,
  left: mouseX,

  // We want to make sure the context menu is not too close to the bottom of the screen (35%)
  // to avoid it being cut off
  transform:
    mouseY > 0.65 * window.innerHeight
      ? "translateY(-100%)"
      : "none",

  padding: "3px 1px",

  zIndex: 3,
  border: "1px solid white",
}));

export const ActionButtonContainer = styled("button")({
  flex: 1,
  display: "flex",
  alignItems: "center",
  border: "none",
  background: "none",
  paddingLeft: "1rem",

  "&:hover": {
    background: "#FFFFFF",
  },
});

export const Divider = styled("hr")({
  width: "90%",
  border: "none",
  borderBottom: "1px solid #919191",
});

export const ActionLabel = styled("h4")({
  flex: 1,
  padding: 0,
  margin: 0,

  textAlign: "left",
  paddingLeft: "1rem",
  fontWeight: "normal",
  fontFamily: "Segoe UI",
});

export const ActionIcon = styled("i")({
  fontSize: "1.2rem",
});
