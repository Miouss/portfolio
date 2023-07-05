import styled from "@mui/system/styled";
import { propsFilter } from "../propsFilter";

export const TerminalAppContainer = styled("div")({
  background: "black !important",
  color: "white !important",
  display: "flex",
  overflow: "hidden",
});

export const TerminalAppContent = styled(
  "div",
  propsFilter("blink", "notepad")
)(({ blink, notepad }: { blink: boolean; notepad?: "notepad" }) => ({
  flex: 1,
  color: "white !important",
  background: "black !important",
  boxSizing: "border-box",
  padding: notepad ? "10px 0 0 10px" : 0,
  fontFamily: "Consolas, Monaco, Monospace !important",
  fontSize: "1rem",
  resize: "none",
  border: "none",
  cursor: "default",
  whiteSpace: "pre-line",

  "&::selection": {
    background: "white",
    color: "black",
  },

  "&::after": {
    content: '"_"',
    animation: "blink 1s step-end infinite",
    "@keyframes blink": {
      "0%": {
        visibility: "visible",
      },
      "50%": {
        visibility: "hidden",
      },
      "100%": {
        visibility: "visible",
      },
    },
  },
}));
