import styled from "@mui/system/styled";

interface Props {
  animationName: "spawnWindow" | "fadeInWindow" | "fadeOutWindow";
  zIndex: "1" | "2";
  cursor: string;
}
export const WindowContainer = styled("div", {
  shouldForwardProp: (prop) =>
    prop !== "animationName" && prop !== "zIndex" && prop !== "cursor",
})(({ animationName, zIndex, cursor }: Props) => {
  let correctAnimation: string;

  switch (animationName) {
    case "spawnWindow":
      correctAnimation = "spawn 0.1s linear";
      break;
    case "fadeInWindow":
      correctAnimation = "fadeInWindow 0.2s linear";
      break;
    case "fadeOutWindow":
      correctAnimation = "fadeOutWindow 0.2s linear forwards";
      break;
  }

  return {
    position: "absolute",
    width: "55%",
    height: "60%",
    top: "20%",
    left: "25%",
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

    zIndex: zIndex,
    cursor: cursor,

    animation: correctAnimation,

    "@keyframes fadeInWindow": {
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

    "@keyframes fadeOutWindow": {
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

    "@keyframes spawnWindow": {
      "0%": {
        opacity: 0,
      },
      "100%": {
        opacity: 1,
      },
    },

    "@keyframes despawnWindow": {
      "0%": {
        opacity: 1,
      },
      "100%": {
        opacity: 0,
      },
    },
  };
});
