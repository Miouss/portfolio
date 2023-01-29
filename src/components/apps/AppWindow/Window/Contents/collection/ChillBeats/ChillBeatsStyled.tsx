import styled from "@mui/system/styled";

export const ChillBeatsContainer = styled("div")({
    position: "absolute",
    height: "30px",
    right: 0,
    display: "flex",
    zIndex: 4,
});

export const PlayerButtons = styled("div")({
    flex: 1,
    display: "flex",

    "& > button": {
        border: "none",
    }, 
});
export const Play = styled("button")({});
export const Stop = styled("button")({});
export const SkipForward = styled("button")({});
export const SkipBack = styled("button")({});
export const Repeat = styled("button")({});

export const SoundControl = styled("div")({
    flex: 1,
    display: "flex",
});
export const SoundButton = styled("button")({});
export const VolumeSlider = styled("div")({});