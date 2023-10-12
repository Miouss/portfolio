import styled from "@mui/system/styled";
import { propsFilter } from "../propsFilter";
import { IsMailSent } from "../../apps/MailSender/Form";

import { Animation } from "../../apps/MailSender/MailSender";

export const MailSenderContainer = styled(
  "div",
  propsFilter("animation", "zIndex")
)(({ zIndex, animation }: { zIndex: string; animation?: Animation }) => ({
  position: "absolute",
  width: "30%",
  height: "calc(100% - 45px)",
  right: "0",
  zIndex: zIndex,
  backgroundColor: "#232327",
  animation: `${animation} 0.5s forwards`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  [`@keyframes ${Animation.SLIDE_IN}`]: {
    "0%": {
      transform: "translateX(100%)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  },

  [`@keyframes ${Animation.SLIDE_OUT}`]: {
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

export const Submit = styled("button")(
  ({ isMailSent }: { isMailSent: IsMailSent }) => {
    const { YES, NO, SENDING, FAILED } = IsMailSent;

    const rgb = (r: number) => (g: number) => (b: number) => ({
      onHover: `rgba(${r}, ${g}, ${b}, 0.05)`,
      default: `rgba(${r}, ${g}, ${b}, 0.1)`,
    });

    const getBgColor = () => ({
      [YES]: rgb(0)(255)(0),
      [NO]: rgb(255)(255)(255),
      [SENDING]: rgb(255)(255)(255),
      [FAILED]: rgb(255)(0)(0),
    });

    const bgColor = getBgColor()?.[isMailSent];

    return {
      background: bgColor.default,
      cursor: "pointer",
      "&:hover": {
        background: bgColor.onHover,
      },
    };
  }
);

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

export const SlideButton = styled("button")({
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

  animation: "sildeButton 2s ease-in-out infinite",
  "&:hover": {
    animationPlayState: "paused",
  },

  "@keyframes sildeButton": {
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
