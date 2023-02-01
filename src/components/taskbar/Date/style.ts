import { styled } from "@mui/styles";

export const FullDateBox = styled("section")({
    display: "flex",
    flexDirection: "column",
    cursor: "default",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: "0.3rem",
    padding: "1rem",
    fontSize: "0.8rem",
    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
});

export const DateBox = styled("div")({
});

export const TimeBox = styled("div")({
});