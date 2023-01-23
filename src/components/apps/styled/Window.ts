import styled from "@mui/system/styled";

interface Props {
  display: "flex" | "none";
  zIndex: "1" | "2";
  cursor: string;
}
export const WindowContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "display" && prop !== "zIndex" && prop !== "cursor",
})(({ display, zIndex, cursor }: Props) => ({
  display: display,
  zIndex: zIndex,
  cursor: cursor,
  minWidth: "800px",
  minHeight: "400px",
  position: "absolute",
  flexDirection: "column",
  padding: "10px",
  boxSizing: "border-box",
  overflow: "hidden",
  "& > :last-child": {
    backgroundColor: "white",
    overflowY: "scroll",
    overflowX: "scroll",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
}));