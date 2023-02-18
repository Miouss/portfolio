import styled from "@mui/system/styled";
import { UndefinedBoolean } from "../../types";

const fontSizeResponsive = {
  shouldForwardProp: (prop) => prop !== "fsresp",
};

interface ResponsiveFontSize {
  fsresp: number;
}

export const ProjectContainer = styled("article")({
  position: "relative",
  alignSelf: "center",
  width: "70%",
  display: "flex",
  flexDirection: "column",
});

export const ProjectBackground = styled("div", {
  shouldForwardProp: (prop) => prop !== "visible",
})(({ visible }: { visible: UndefinedBoolean }) => ({
  position: "absolute",
  height: "100%",
  width: "100%",
  overflow: "hidden",
  "& > *": {
    height: "fit-content",
  },
  "& > * > img": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },

  visibility: visible === undefined ? "hidden" : "visible",

  animation: visible
    ? "fadeInGallery 1s ease-in-out forwards"
    : "fadeOutGallery 1s ease-in-out forwards",

  "@keyframes fadeInGallery": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },

  "@keyframes fadeOutGallery": {
    "0%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
      visibility: "hidden",
    },
  },
}));

// ProjectContainer >
export const Content = styled("article", {
  shouldForwardProp: (prop) => prop !== "aspectratio",
})(({ aspectratio }: { aspectratio: "16/9" | "unset" }) => ({
  aspectRatio: aspectratio,
  overflow: "hidden",
}));

// Content >
export const Project = styled("section", {
  shouldForwardProp: (prop) => prop !== "hide",
})(({ hide }: { hide: UndefinedBoolean }) => ({
  display: "flex",
  flexDirection: "column",

  width: "100%",
  height: "fit-content",

  animation:
    hide === undefined
      ? "none"
      : hide
      ? "slideOutProject 1s ease-in-out forwards"
      : "slideInProject 1s ease-in-out forwards",

  "@keyframes slideOutProject": {
    "0%": {
      transform: "translateY(0%)",
    },
    "100%": {
      transform: "translateY(-100%)",
      visibility: "hidden",
    },
  },

  "@keyframes slideInProject": {
    "0%": {
      transform: "translateY(-100%)",
      visibility: "visible",
    },
    "100%": {
      transform: "translateY(0%)",
    },
  },
}));

// Project >
export const Title = styled(
  "h2",
  fontSizeResponsive
)(({ fsresp }: ResponsiveFontSize) => ({
  margin: 0,
  padding: fsresp >= 12 ? "20px 0 20px 80px" : "20px",
  textAlign: fsresp >= 12 ? "left" : "center",
  fontFamily: "'Lato'",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: fsresp >= 12 ? "48px" : "36px",
  lineHeight: "77px",
}));

//  Project >
export const Subcontent = styled("section")({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
});

// Subcontent >
export const Details = styled("section")({
  flex: 2,

  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  padding: "32px 48px 0px 48px",

  background: "rgba(242, 242, 242, 0.6)",
  backdropFilter: "blur(15px)",
});

//  Details >
export const Description = styled(
  "p",
  fontSizeResponsive
)(({ fsresp }: ResponsiveFontSize) => ({
  fontFamily: "'Lato'",
  fontStyle: "normal",
  fontWeight: "400",
  whiteSpace: "pre-line",
  textShadow: "rgb(255, 255, 255) 0px 0px 4px",
  fontSize: fsresp >= 12 ? "18px" : "16px",
  lineHeight: "22px",
}));

export const TechContainer = styled("section")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  paddingBottom: "32px",
});

//  TechContainer >
export const TechTitle = styled(
  "h3",
  fontSizeResponsive
)(({ fsresp }: ResponsiveFontSize) => ({
  paddingLeft: fsresp >= 12 ? "24px" : "0px",
  textShadow: "rgb(255, 255, 255) 0px 0px 4px",
}));

export const TechItemsContainer = styled(
  "section",
  fontSizeResponsive
)(({ fsresp }: ResponsiveFontSize) => ({
  width: fsresp >= 12 ? "40%" : "100%",

  display: "flex",
  flexWrap: "wrap",
  justifyContent: fsresp >= 12 ? "space-around" : "space-evenly",
  fontSize: "10px",
  paddingLeft: fsresp >= 12 ? "48px" : "0px",
}));

// TechItemsContainer >
export const TechItem = styled("i")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

// TechItem >
export const TechItemIcon = styled("svg")({
  width: "36px",
  height: "36px",
});

export const TechItemName = styled("h4")({
  textAlign: "center",
  fontSize: "12px",
});

// Subcontent >
export const Options = styled("section")({
  flex: 1,

  display: "flex",
  flexDirection: "column",
  gap: "8rem",

  "& > *": {
    flex: 1,
  },
});

// Options >

export const PreviewButton = styled("button")({
  position: "absolute",
  top: "3%",
  right: "3%",
  width: "40px",
  height: "40px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  border: "none",
  borderRadius: "50%",
  background: "#187CF1",

  //visibility: fsresp >= 12 ? "visible" : "hidden",

  "&:hover": {
    cursor: "pointer",
  },
  "& > *": {
    color: "white",
    width: "24px",
    height: "24px",
  },
});

// Options >
export const RedirectContainer = styled(
  "section",
  fontSizeResponsive
)(({ fsresp }: ResponsiveFontSize) => ({
  position: fsresp >= 12 ? "absolute" : "unset",
  bottom: fsresp >= 12 ? "20px" : "unset",
  right: fsresp >= 12 ? "20px" : "unset",
  width: fsresp >= 12 ? "unset" : "80%",
  display: "flex",
  gap: fsresp >= 12 ? "24px" : "10%",
  alignSelf: "center",
  paddingBottom: "32px",
  paddingRight: fsresp >= 12 ? "10%" : "0px",
}));

// Project >
export const HidePreviewButton = styled("button")({
  position: "absolute",
  top: "3%",
  right: "3%",
  width: "40px",
  height: "40px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  borderRadius: "50%",
  background: "transparent",

  "& > *": {
    color: "rgb(211, 211, 211, 0.8)",
    width: "24px",
    height: "24px",
  },

  "&:hover": {
    cursor: "pointer",
  },
});

export const SliderControls = styled("div", {
  shouldForwardProp: (prop) => prop !== "visible",
})(({ visible }: { visible: UndefinedBoolean }) => ({
  position: "absolute",
  height: "100%",
  width: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "& > *": {
    border: "none",
    background: "none",
    "&:hover": {
      cursor: "pointer",
      animationPlayState: "paused",
      color: "rgba(255, 255, 255, 0.8)",
    },
    color: "rgba(255, 255, 255, 0.5)",
    zIndex: 1,
  },

  visibility: visible === undefined ? "hidden" : "visible",
  animation: visible
    ? "fadeInSliderControls 2s ease-in-out forwards"
    : "fadeOutSliderControls 1s ease-in-out forwards",

  "@keyframes fadeInSliderControls": {
    "0%": {
      opacity: 0,
      transform: "scale(0.1)",
    },
    "100%": {
      opacity: 1,
      transform: "scale(1)",
    },
  },

  "@keyframes fadeOutSliderControls": {
    "0%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
      visibility: "hidden",
    },
  },
}));
