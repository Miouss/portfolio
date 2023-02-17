import styled from "@mui/system/styled";

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

export const Image = styled("div", {
  shouldForwardProp: (prop) => prop !== "anim" && prop !== "translationOffset",
})(
  ({
    anim,
    translationOffset,
  }: {
    anim: string;
    translationOffset: number;
  }) => ({
    animation: `${anim} 1s ease-in-out forwards`,
    ...slideRightFromCenter,
    ...slideLeftFromCenter,
    ...slideCenterFromRight,
    ...slideCenterFromLeft,
    ...swipeRightToLeft,
    ...swipeLeftToRight,

    transform: `translateX(${translationOffset}%)`,

    position: "absolute",
    width: "100%",
    height: "100%",
  })
);
