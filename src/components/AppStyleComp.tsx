import styled from "@mui/system/styled";

export const LoginContainer = styled("div", {
    shouldForwardProp: (prop) => prop !== "isLogged",
})(({ isLogged }: { isLogged: boolean }) => ({
    position: "absolute",
    width: "100%",
    height: "100%",

    animation: !isLogged ? "fadeInLogin 0.5s ease-in-out forwards" : "fadeOutLogin 0.5s ease-in-out forwards",

    "@keyframes fadeInLogin": {
        "0%": {
            opacity: "0",
        },
        "100%": {
            opacity: "1",
            visibility: "visible",
        },
    },

    "@keyframes fadeOutLogin": {
        "0%": {
            opacity: "1",
        },
        "100%": {
            opacity: "0",
            visibility: "hidden",
        },
    },
    
}));