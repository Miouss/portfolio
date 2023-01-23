import styled from "@mui/system/styled";
import LoginBackground from "../../../assets/login-background.png";
import { Stack } from "@mui/material";

export const LoginContainer = styled(Stack)({
    alignItems: "center",
    height: "100%",
    width: "100%",
    position:"relative",
});

export const BackgroundLayer = styled("div")({
    position: "absolute",
    width: "100%",  
    height: "100%",  
    backgroundImage: `url(${LoginBackground})`,
    "& > *":{
        width: "100%",
        height: "auto",
    },
    zIndex: -1,
});

export const LoginBox = styled(Stack)({
    width: "100%",
    height: "100%",
    backdropFilter: "blur(3px)",
    alignItems: "center",
});