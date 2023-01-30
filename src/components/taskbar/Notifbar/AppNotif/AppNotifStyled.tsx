import styled from "@mui/system/styled";


export const AppNotifButton = styled("div")({
    positon: "relative",
    width: "20px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    padding: "0 0.5rem",
    "& > *": {
        width: "100%",
        height: "auto",
        color: "white",
    },

    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
    },

});

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