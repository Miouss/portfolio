import styled from "@mui/system/styled";

interface Props {
  visibility: "default" | "visible" | "hidden";
  zIndex: "1" | "2";
  cursor: string;
}
export const WindowContainer = styled("div", {
  shouldForwardProp: (prop) =>
    prop !== "visibility" && prop !== "zIndex" && prop !== "cursor",
})(({ visibility, zIndex, cursor }: Props) => ({
  position: "absolute",
  width: "50%",
  height: "50%",
  top: visibility === "default" ? "20%" : "",
  left: visibility === "default" ? "25%" : "",
  zIndex: zIndex,
  cursor: cursor,
  padding: "10px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  "& > :last-of-type": {
    backgroundColor: "white",
    overflowY: "scroll",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },

  animation:
    visibility !== "default"
      ? visibility === "visible"
        ? "fadeIn 0.2s linear"
        : "fadeOut 0.2s linear forwards"
      : "spawn 0.1s linear",

  "@keyframes fadeIn": {
    "0%": {
      visibility: "visible",
      opacity: 0,
      left: 0,
      top: 0,
      transform: "translate(0, calc(100vh - 100%)) scale(0)",
      transformOrigin: "bottom left",
    },
    "100%": {
      opacity: 1,
      transformOrigin: "bottom left",
    },
  },

  "@keyframes fadeOut": {
    "0%": {
      opacity: 1,
      transformOrigin: "bottom left",
    },
    "100%": {
      opacity: 0,
      top: 0,
      left: 0,
      transformOrigin: "bottom left",

      transform: "translate(0, calc(100vh - 100%)) scale(0)",
    },
  },

  "@keyframes spawn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },

  "@keyframes despawn": {
    "0%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
    },
  },

}));
