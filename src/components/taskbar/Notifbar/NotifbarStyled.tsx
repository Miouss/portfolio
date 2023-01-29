import styled from "@mui/system/styled";

export const NotifbarContainer = styled("div")({
    position: "relative",
    display: "flex",
});

export const NotifWindow = styled("div")({
    position: "absolute",
    top: 0,
    height: "100px",
    width: "285px",
    transform: "translate(-50%, -100%)",
    

    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 4,
});