import styled from "@mui/system/styled";

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
  ":last-of-type": {
    marginBottom: "20px",
  },
});

export const BackgroundLayer = styled("div")({
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
    objectFit: "scale-down",
  },
});

// ProjectContainer >
export const Content = styled("article", {
  shouldForwardProp: (prop) => prop !== "showGallery",
})(({ showGallery }: { showGallery: boolean | undefined }) => ({
  "& > :last-child": {
    animation:
      showGallery !== undefined
        ? showGallery
          ? "slideOut 1s ease-in-out alternate forwards"
          : "slideIn 1s ease-in-out alternate forwards"
        : "none",
  },

  "@keyframes slideOut": {
    "0%": {
      transform: "translateY(0%)",
    },
    "100%": {
      transform: "translateY(-100%)",
      visibility: "hidden",
    },
  },

  "@keyframes slideIn": {
    "0%": {
      transform: "translateY(-100%)",
      visibility: "visible",
    },
    "100%": {
      transform: "translateY(0%)",
    },
  },

  overflow: "hidden",
}));

// Content >
export const ProjectContent = styled("section")({
  display: "flex",
  flexDirection: "column",

  background: "rgba(242, 242, 242, 0.3)",
  backdropFilter: "blur(10px)",
});

// ProjectContent >
export const Title = styled(
  "h2",
  fontSizeResponsive
)(({ fsresp }: ResponsiveFontSize) => ({
  margin: 0,
  padding: fsresp >= 12 ? "20px 0 0px 80px" : "20px",
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
  flexDirection: fsresp >= 12 ? "row" : "column",
  gap: fsresp >= 12 ? "0" : "3rem",
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
  width: fsresp >= 12 ? "70%" : "100%",

  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  fontSize: "10px",
  paddingLeft: fsresp >= 12 ? "48px" : "0px",
}));

// TechItemsContainer >
export const TechItem = styled("i")({});

// TechItem >
export const TechItemIcon = styled("svg")({
  width: "48px",
  height: "48px",
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
export const PreviewButtonContainer = styled(
  "section",
  fontSizeResponsive
)(({ fsresp }: ResponsiveFontSize) => ({
  display: fsresp >= 12 ? "flex" : "none",
  justifyContent: "center",
  alignItems: "flex-end",
}));

// PreviewButtonContainer >
export const PreviewButton = styled("button")({
  backgroundColor: "rgba(242, 242, 242, 0.6)",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  gap: "1rem",
  border: "1px solid black",

  "&:hover": {
    backgroundColor: "rgba(242, 242, 242, 0.8)",
    cursor: "pointer",
  },
});
export const PreviewLabel = styled("h4")({
  margin: 0,
  padding: 0,
});
export const PreviewIcon = styled("i")({
  "& > *": {
    width: "24px",
    height: "24px",
  },
});

// Options >
export const RedirectContainer = styled(
  "section",
  fontSizeResponsive
)(({ fsresp }: ResponsiveFontSize) => ({
  display: "flex",
  flexDirection: fsresp >= 12 ? "column" : "row",
  gap: "1rem",
  justifyContent: fsresp >= 12 ? "flex-end" : "space-evenly",
  paddingBottom: "32px",
}));

// RedirectContainer >
export const RedirectItem = styled(
  "button",
  fontSizeResponsive
)(({ fsresp }: ResponsiveFontSize) => ({
  width: fsresp >= 12 ? "70%" : "40%",
  backgroundColor: "rgba(242, 242, 242, 0.6)",
  alignSelf: "center",
  border: "1px solid black",

  "&:hover": {
    animation: "scale 1.5s ease-in-out infinite forwards",
    background: "rgba(242, 242, 242, 0.8)",
  },

  "@keyframes scale": {
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
}));

// RedirectItem >
export const Link = styled("a")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  textDecoration: "none",
});

Link.defaultProps = {
  target: "_blank",
  rel: "noreferrer",
};

// Link >
export const LinkIcon = styled("i")({
  flex: 1,
  color: "#000000",
  "& > *": {
    width: "24px",
    height: "24px",
  },
});

export const LinkTitle = styled("h4")({
  flex: 3,
  textShadow: "rgb(255, 255, 255) 0px 0px 2px",

  color: "#000000",
});

// ProjectContent >
export const HidePreviewButton = styled("button")({
  position: "absolute",
  bottom: "20%",
  right: "5%",

  border: "none",
  background: "none",

  opacity: 0.5,
  "& > *": {
    width: "64px",
    height: "64px",
  },

  "&:hover": {
    cursor: "pointer",
  },
});

export const Chevrons = styled("div", {
  shouldForwardProp: (prop) => prop !== "showGallery",
})(({ showGallery }: { showGallery: boolean | undefined }) => ({
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
    flex: 0.05,
  },

  visibility: showGallery ? "visible" : "hidden",
  animation: showGallery ? "fadeInChevrons 2s ease-in-out" : "none",

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
}));

type OrientationProp = "left" | "right";

const chevronBouncing = (orientation: OrientationProp) => ({
  [`@keyframes chevronBouncing${orientation}`]: {
    "0%": {
      transform: "translateX(0)",
    },
    "50%": {
      transform: `translateX(${orientation === "left" ? -10 : 10}px)`,
    },
    "100%": {
      transform: "translateX(0)",
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
  "@keyframes slide-right-from-center": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(100%)",
    },
  },
};

const slideLeftFromCenter = {
  "@keyframes slide-left-from-center": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-100%)",
    },
  },
};

const slideCenterFromRight = {
  "@keyframes slide-center-from-right": {
    "0%": {
      transform: "translateX(100%)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  },
};

const slideCenterFromLeft = {
  "@keyframes slide-center-from-left": {
    "0%": {
      transform: "translateX(-100%)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  },
};

const swipeRightToLeft = {
  "@keyframes swipe-right-to-left": {
    "0%": {
      transform: "translateX(-100%)",
    },
    "100%": {
      transform: "translateX(-100%)",
    },
  },
};

const swipeLeftToRight = {
  "@keyframes swipe-left-to-right": {
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
