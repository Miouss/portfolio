import styled from "@mui/system/styled";

export const LoginIconContainer = styled("section")({
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",

    paddingRight: "2rem",
    gap: "0.5rem",
});

export const IconButton = styled("button")({
    border: "none",
    background: "none",
    padding: "0.5rem",

    "& > *": {
        width: "1.8rem",
        height: "1.8rem",
        color: "white",
    },

    ":hover": {
        background: "rgba(255, 255, 255, 0.1)",
    },
});