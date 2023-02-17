import styled from "@mui/system/styled";

export const ContextMenuContainer = styled("div")({
    position: "absolute",
    transform: "translateY(-100%)",
    width: "120px",
    top: "0",
   
    display: "flex",
    flexDirection: "column",

    background: "#2B2B2B",

    "& > *": {
        padding: "0.5rem",
    },
});

export const ContextMenuButton = styled("button")({
    border: "none",
    background: "transparent",
    color: "white",
    "&:hover": {
        background: "#414141",
    },
});