import styled from "@mui/system/styled";

export const NotifbarContainer = styled("div")({
    position: "relative",
    display: "flex",
});

export const NotifWindow = styled("div", {
    shouldForwardProp: (prop) => prop !== "visible",
})(({ visible }: { visible: boolean }) => ({
    position: "absolute",
    top: 0,
    height: "fit-content",
    width: "297px",
    transform: "translate(-59%, -100%)",
    visibility: visible ? "visible" : "hidden",
    
    display: "flex",
    border: "1px solid #3C3F43",
    borderBottom: "none",
    borderRight: "none",
    background: "#222A2F",
    zIndex: 2,
}));