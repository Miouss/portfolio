import styled from "@mui/system/styled";

export const ChillBeatsContainer = styled("div")({
  position: "relative",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "1rem",

  zIndex: 4,

  "& > *": {
    flex: 1,
  },
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
      cursor: "pointer",
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
  color: "white",
  "& > *": {
    width: "1.7rem",
    height: "1.7rem",
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
  "&:hover": {
    background: "white",
  },
};

export const VolumeSlider = styled("input")({
  flex: 1,
  height: "8px",
  alignSelf: "center",
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
    transform: "translateY(-30%)",
    ...rangeThumbStyle,
  },
  "&::-webkit-slider-progress": {
    ...rangeProgressStyle,
  },
  "&::-webkit-slider-runnable-track": {
    WebkitAppearance: "none !important",
    ...rangeTrackStyle,
  },
});
