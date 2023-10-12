import styled from "@mui/system/styled";

import { DynamicFontSize } from "../../types";
import { propsFilter } from "../propsFilter";
import { FontSize } from "../../apps/Notepad/Notepad";

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
export const ToolbarButton = styled(
  "button",
  propsFilter("active")
)(({ active }: { active: boolean }) => ({
  background: active ? "#CCE8FF" : "inherit",
  "&:hover": {
    background: !active && "#E5F3FF",
  },
}));

// XxxxxButton >
export const DropDownMenu = styled(
  "div",
  propsFilter("open")
)(({ open }: { open: boolean }) => ({
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
export const TextInputArea = styled(
  "textarea",
  propsFilter("fontSize")
)(({ fontSize }: { fontSize: FontSize }) => ({
  flex: 1,
  overflow: "scroll !important",
  fontFamily: "inherit",
  fontSize,
  paddingLeft: "5px",
  resize: "none",
}));
