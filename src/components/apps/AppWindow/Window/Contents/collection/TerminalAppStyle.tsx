import { Box } from "@mui/material";
import styled from "@mui/system/styled";

export const TerminalAppContainer = styled(Box)({
  backgroundColor: "black !important",
  color: "white !important",
});

export const TerminalAppContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== "blink",
})(({ blink }: { blink: boolean }) => ({
  color: "white !important",
  boxSizing: "border-box",
  whiteSpace: "pre-line",
  paddingTop: "10px",
  cursor: "text",
  overflowWrap: "break-word",
  width: "100%",
  fontFamily: "Consolas !important",
  fontSize: "1rem",
  "&::after": {
    content: blink ? '"_"' : '""',
    animation: "blink 1s step-end infinite",
    "@keyframes blink": {
      "0%": {
        opacity: 1,
      },
      "50%": {
        opacity: 0,
      },
      "100%": {
        opacity: 1,
      },
    },
  },
}));
