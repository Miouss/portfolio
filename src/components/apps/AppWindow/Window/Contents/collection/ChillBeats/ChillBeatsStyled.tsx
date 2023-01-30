import styled from "@mui/system/styled";

export const ChillBeatsContainer = styled("div")({
  position: "relative",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "1rem",
  maxWidth: "calc(100% - 2rem)",

  zIndex: 4,

  "& > *": {
    flex: 1,
  },
});

export const NowPlayingContainer = styled("div")({
  display: "flex",
});
export const NowPlayingIconContainer = styled("i")({
  flex: 0.2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "& > *": {
    width: "auto",
    height: "100%",
    color: "white",
  },
});
export const NowPlayingTrackContainer = styled("div")({
  flex: 1,
  overflow: "hidden !important",
});

export const NowPlayingTrack = styled("h5", {
  shouldForwardProp: (prop) => prop !== "translatePx",
})(({ translatePx }: { translatePx: number }) => {
  console.log(translatePx);

  return {
    color: "white",
    margin: 0,
    padding: 0,
    whiteSpace: "nowrap",
    textAlign: "center",
    animation: translatePx
      ? `autoscroll${translatePx!} 4s ease-in-out infinite alternate`
      : "none",

    [`@keyframes autoscroll${translatePx!}`]:
     {
      "0%": {
        transform: "translateX(0%)",
      },
      "100%": {
        transform: `translateX(${translatePx!}px)`,
      },
    },
  };
});

export const PlayerButtons = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  gap: "1rem",
  "& > button": {
    border: "none",
    backgroundColor: "transparent",
    color: "white",
    fontSize: "1.3rem",
    flex: 1,
    paddingTop: "0.3rem",
    "&:hover": {
      background: "#334055",
    },
    "&:active": {
      background: "#3D495D",
    },
  },
});
export const Play = styled("button")({});
export const Stop = styled("button")({});
export const SkipForward = styled("button")({});
export const SkipBack = styled("button")({});
export const Repeat = styled("button")({});

export const SoundControl = styled("div")({
  display: "flex",
});
export const SoundButton = styled("button")({
  border: "none",
  backgroundColor: "transparent",
  color: "#D2D5D6",
  "& > *": {
    width: "1.7rem",
    height: "1.7rem",
  },
  "&:hover": {
    color: "#E8E9EA",
  },
  "&:active": {
    color: "#FFFFFF",
  },
});

const rangeTrackStyle = {
  width: "100%",
  height: "100%",
  background: "#798086",
};

const rangeProgressStyle = {
  width: "100%",
  height: "100%",
  background: "#429CE3",
};

const rangeThumbStyle = {
  width: "7px",
  height: "26px",
  border: "none",
  background: "#0078D7",
};

export const VolumeSlider = styled("input", {
  shouldForwardProp: (prop) => prop !== "colorBreak",
})(({ colorBreak }: { colorBreak: number }) => ({ // Colorbreak is for handling color difference in volume slider in Chrome/Safari
  flex: 1,
  height: "8px",
  alignSelf: "center",
  "&:hover&::-moz-range-thumb": {
    background: "#FFFFFF",
  },
  "&:hover&::-webkit-slider-thumb": {
    background: "#FFFFFF",
  },
  "&::-moz-range-thumb": {
    ...rangeThumbStyle,
  },
  "&::-moz-range-progress": {
    ...rangeProgressStyle,
  },
  "&::-moz-range-track": {
    ...rangeTrackStyle,
  },
  "&::-webkit-slider-thumb": {
    WebkitAppearance: "none !important",
    borderRadius: "2rem",
    transform: "translateY(-33%)",
    ...rangeThumbStyle,
  },
  "&::-webkit-slider-runnable-track": {
    background: `linear-gradient(
      to right,
      #429CE3 0%,
      #429CE3 ${colorBreak}%,
      #798086 ${colorBreak}%,
      #798086 100%
    )`,
    width: "100%",
    height: "100%",
  },
}));
