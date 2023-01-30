import styled from "@mui/system/styled";


export const AppNotifButton = styled("button")({
    backgroundColor: "transparent",
    border: "none",
    width: "26px",
    height: "100%",
    "& > *": {
        width: "100%",
        height: "auto",
        color: "white",
    },

    ":hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
    },

});