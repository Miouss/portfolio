import styled from "@mui/system/styled";


export const AppNotifButton = styled("button")({
    backgroundColor: "transparent",
    border: "none",

    "& > *": {
        color: "white",
        fontSize: "1.1rem",
    },

    ":hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
    },

});