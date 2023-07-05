import styled from "@mui/system/styled";
import { MailSentProps } from "../../types";
import { propsFilter } from "../propsFilter";

export const MailSenderContainer = styled(
  "div",
  propsFilter("animation", "zIndex")
)(({ zIndex, animation }: { zIndex: string; animation?: string }) => ({
  position: "absolute",
  width: "30%",
  height: "calc(100% - 45px)",
  right: "0",
  zIndex: zIndex,
  backgroundColor: "#232327",
  animation: animation,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  "@keyframes slideInMail": {
    "0%": {
      transform: "translateX(100%)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  },

  "@keyframes slideOutMail": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(100%)",
    },
  },
}));

export const BigMailIcon = styled("i")({
  flex: 1,
  width: "30%",
  height: "30%",

  "& > *": {
    width: "100%",
    height: "100%",
    color: "white",
  },
});

export const Form = styled("form")({
  flex: 3,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  paddingBottom: "1rem",

  "& > *": {
    width: "80% !important",
    backgroundColor: "rgb(0, 0, 0, 0.4)",
    border: "none",
    outline: "none",
    color: "white",
    padding: "0.5rem",
    borderRadius: "0.5rem",
  },
});

export const Name = styled("input")({});

export const Email = styled("input")({});

export const Subject = styled("input")({});

export const Message = styled("textarea")({
  flex: 1,

  resize: "none",
});

export const Submit = styled(
  "button",
  propsFilter("sendingState")
)(({ sendingState }: { sendingState: MailSentProps }) => {
  let bgColor;

  switch (sendingState) {
    case "sending":
      bgColor = "rgb(255, 255, 255, 0.1)";
      break;
    case true:
      bgColor = "rgb(0, 255, 0, 0.1)";
      break;
    case false:
      bgColor = "rgb(255, 0, 0, 0.1)";
      break;
    default:
      bgColor = "rgb(0, 0, 0, 0.4)";
  }

  return {
    background: bgColor,
    ...(sendingState === undefined && {
      "&:hover": {
        cursor: "pointer",
        backgroundColor: "rgb(255, 255, 255, 0.05)",
      },
    }),
  };
});

export const MinimizeButton = styled("button")({
  position: "absolute",
  left: "0",
  border: "none",
  backgroundColor: "transparent",

  "&:hover": {
    cursor: "pointer",
  },

  "& > *": {
    color: "white",
    height: "20px",
    width: "20px",
  },
});

export const RefocusButton = styled("button")({
  position: "absolute",
  left: "0",
  transform: "translateX(-23px)",
  backgroundColor: "#232327",
  borderRadius: "40%",
  border: "none",
  height: "100%",
  width: "100%",

  maxHeight: "30px",
  maxWidth: "30px",
  cursor: "pointer",

  animation: "refocusButton 2s ease-in-out infinite",

  "@keyframes refocusButton": {
    "0%": {
      transform: "translateX(-18px)",
    },
    "50%": {
      transform: "translateX(-23px)",
    },
    "100%": {
      transform: "translateX(-18px)",
    },
  },

  "& > *": {
    color: "white",
    height: "100%",
    width: "100%",
  },
});
