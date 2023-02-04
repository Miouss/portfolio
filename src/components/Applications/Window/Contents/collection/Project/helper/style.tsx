import styled from "@mui/system/styled";
import { UndefinedBoolean } from "../../../../../../../types/types";

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

export const BackgroundLayer = styled("div", {
  shouldForwardProp: (prop) => prop !== "visible",
})(({ visible }: { visible: UndefinedBoolean }) => ({
  position: "absolute",
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  "& > *": {
    flex: 1,
  },
  "& > * > img": {
    width: "100%",
    height: "100%",
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
export const Content = styled(
  "article",
  fontSizeResponsive
)(({ fsresp }: ResponsiveFontSize) => ({
  aspectRatio: fsresp >= 12 ? "16/9" : "unset",
  overflow: "hidden",
}));

// Content >
export const ProjectContent = styled("section", {
  shouldForwardProp: (prop) => prop !== "hide",
})(({ hide }: { hide: UndefinedBoolean }) => ({
  display: "flex",
  flexDirection: "column",

  width: "100%",
  height: "100%",

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

// ProjectContent >
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

//  ProjectContent >
export const Subcontent = styled(
  "section",
  fontSizeResponsive
)(({ fsresp }: ResponsiveFontSize) => ({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
}));

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
export const TechItem = styled("i")({});

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

export const PreviewButton = styled("button", {
  shouldForwardProp: (prop) => prop !== "fsresp",
})(({ fsresp }: ResponsiveFontSize) => ({
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

  visibility: fsresp >= 12 ? "visible" : "hidden",

  "&:hover": {
    cursor: "pointer",
  },
  "& > *": {
    color: "white",
    width: "24px",
    height: "24px",
  },
}));

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

// RedirectContainer >
export const RedirectItem = styled(
  "button",
  fontSizeResponsive
)(({ fsresp }: ResponsiveFontSize) => ({
  width: fsresp >= 12 ? "85px" : "100%",
  height: "45px",
  backgroundColor: "rgba(242, 242, 242, 0.6)",
  alignSelf: "center",
  border: "none",
  background: "#187CF1",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "2px",

  "&:hover": {
    animation: "scaling 1.5s ease-in-out infinite forwards",
  },

  "@keyframes scaling": {
    "0%": {
      transform: "scale(1)",
    },
    "50%": {
      transform: "scale(1.1)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },

  "& > *": {
    color: "white",
    width: "24px",
    height: "24px",
  },
}));

// ProjectContent >
export const HidePreviewButton = styled("button")({
  position: "absolute",
  top: "3%",
  right: "3%",
  width: "40px",
  height: "40px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  border: "1px solid #FFFFFF",
  borderRadius: "50%",
  background: "transparent",

  opacity: 0.5,
  "& > *": {
    color: "#FFFFFF",
    width: "24px",
    height: "24px",
  },

  "&:hover": {
    cursor: "pointer",
  },
});

export const Chevrons = styled("div", {
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
    ? "fadeInChevrons 2s ease-in-out forwards"
    : "fadeOutChevrons 1s ease-in-out forwards",

  "@keyframes fadeInChevrons": {
    "0%": {
      opacity: 0,
      transform: "scale(0.1)",
    },
    "100%": {
      opacity: 1,
      transform: "scale(1)",
    },
  },

  "@keyframes fadeOutChevrons": {
    "0%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
      visibility: "hidden",
    },
  },
}));

type OrientationProp = "left" | "right";

const chevronBouncing = (orientation: OrientationProp) => ({
  [`@keyframes chevronBouncing${orientation}`]: {
    "0%": {
      transform: `translateX(${orientation === "left" ? 15 : -15}px)`,
    },
    "50%": {
      transform: `translateX(${orientation === "left" ? 10 : -10}px)`,
    },
    "100%": {
      transform: `translateX(${orientation === "left" ? 15 : -15}px)`,
    },
  },
});

const bouncingAnim = (orientation: OrientationProp) =>
  `chevronBouncing${orientation} 1.5s ease-in infinite both`;

export const ChevronLeft = styled("button")({
  animation: bouncingAnim("left"),
  ...chevronBouncing("left"),
});

export const ChevronRight = styled("button")({
  animation: bouncingAnim("right"),
  ...chevronBouncing("right"),
});

const forwardAnimProp = { shouldForwardProp: (prop) => prop !== "anim" };

interface AnimProp {
  anim: string;
}

const slideRightFromCenter = {
  "@keyframes center-to-right": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(100%)",
    },
  },
};

const slideLeftFromCenter = {
  "@keyframes center-to-left": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-100%)",
    },
  },
};

const slideCenterFromRight = {
  "@keyframes right-to-center": {
    "0%": {
      transform: "translateX(100%)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  },
};

const slideCenterFromLeft = {
  "@keyframes left-to-center": {
    "0%": {
      transform: "translateX(-100%)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  },
};

const swipeRightToLeft = {
  "@keyframes right-to-left": {
    "0%": {
      transform: "translateX(-100%)",
    },
    "100%": {
      transform: "translateX(-100%)",
    },
  },
};

const swipeLeftToRight = {
  "@keyframes left-to-right": {
    "0%": {
      transform: "translateX(100%)",
    },
    "100%": {
      transform: "translateX(100%)",
    },
  },
};

export const ImageOne = styled(
  "div",
  forwardAnimProp
)(({ anim }: AnimProp) => ({
  animation: `${anim} 1s ease-in-out forwards`,
  ...slideRightFromCenter,
  ...slideLeftFromCenter,
  ...slideCenterFromRight,
  ...slideCenterFromLeft,
  ...swipeRightToLeft,
  ...swipeLeftToRight,

  transform: "translateX(0%)",

  position: "absolute",
  width: "100%",
  height: "100%",
}));

export const ImageTwo = styled(
  "div",
  forwardAnimProp
)(({ anim }: AnimProp) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  transform: "translateX(100%)",

  animation: `${anim} 1s ease-in-out forwards`,

  ...slideRightFromCenter,
  ...slideLeftFromCenter,
  ...slideCenterFromRight,
  ...slideCenterFromLeft,
  ...swipeRightToLeft,
  ...swipeLeftToRight,
}));

export const ImageThree = styled(
  "div",
  forwardAnimProp
)(({ anim }: AnimProp) => ({
  position: "absolute",
  width: "100%",
  height: "100%",

  transform: "translateX(-100%)",

  animation: `${anim} 1s ease-in-out forwards`,

  ...slideRightFromCenter,
  ...slideLeftFromCenter,
  ...slideCenterFromRight,
  ...slideCenterFromLeft,
  ...swipeRightToLeft,
  ...swipeLeftToRight,
}));
