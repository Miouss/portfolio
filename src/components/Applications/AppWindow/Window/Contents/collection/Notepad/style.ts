import styled from "@mui/system/styled";

import { DynamicFontSize } from "./types";

export const NotepadContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  overflow: "hidden !important",
});

// NotepadContainer >
export const Toolbar = styled("section")({
  display: "flex",
  background: "#FFFFFF",
  borderBottom: "1px solid #F2F2F2",
  "& > *": {
    position: "relative",
    padding: "2px 8px",
    border: "none",
    background: "none",
  },
});

//Toolbar >
export const ToolbarButton = styled("button", {
  shouldForwardProp: (prop) => prop !== "active",
})(({ active }: { active: boolean }) => ({
  background: active ? "#CCE8FF" : "inherit",
  "&:hover": {
    background: !active && "#E5F3FF",
  },
}));

// XxxxxButton >
export const DropDownMenu = styled("div", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ open }: { open: boolean }) => ({
  position: "absolute",
  top: "100%",
  left: 0,
  width: "170px",
  padding: "3px 0px",

  display: open ? "flex" : "none",
  flexDirection: "column",

  background: "#F0F0F0",
  border: "1px solid #CCCCCC",
  boxShadow: "2px 2px 2px #ABABAB",
}));

export const DropDownMenuButton = styled("button")({
  textAlign: "left",
  border: "none",
  background: "inherit",
  padding: "3px",
  paddingLeft: "40px",
  "&:hover": {
    background: "#90C8F6",
  },
});
// NotepadContainer >
export const TextInputArea = styled("div", {
  shouldForwardProp: (prop) => prop !== "dynamicFontSize",
})(({ dynamicFontSize }: { dynamicFontSize: DynamicFontSize }) => ({
  flex: 1,
  overflow: "scroll !important",
  cursor: "text",
  whiteSpace: "pre-line",
  fontSize: dynamicFontSize,
  paddingLeft: "5px",

  "&::after": {
    content: '""',
    borderRight: "1px solid #000000",
    animation: "blink 1s step-end 1s infinite",
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
