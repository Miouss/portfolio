import styled from "@mui/system/styled";
import { Animation } from "../../components/Applications/Window";

interface Props {
  animation: Animation;
  zIndex: "1" | "2";
  cursor: string;
}
export const WindowContainer = styled("div")(
  ({ animation, zIndex, cursor }: Props) => {
    let fullAnim: string = animation + " ";

    const { SPAWN, FADE_IN, FADE_OUT } = Animation;

    switch (animation) {
      case SPAWN:
        fullAnim += `0.1s linear`;
        break;
      case FADE_IN:
        fullAnim += `0.2s linear`;
        break;
      case FADE_OUT:
        fullAnim += `0.2s linear forwards`;
        break;

      // despawnWindow animation is called directly in BarButtonGroup.tsx in MovableBar component
    }

    return {
      position: "absolute",
      width: "55%",
      height: "60%",
      top: "20%",
      left: "22.5%",
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

      zIndex,
      cursor,

      animation: fullAnim,

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
  }
);
