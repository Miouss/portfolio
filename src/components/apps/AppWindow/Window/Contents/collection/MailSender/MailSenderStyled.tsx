import styled from "@mui/system/styled";

export const MailSenderContainer = styled("div", {
    shouldForwardProp: (prop) => prop !== "animation" && prop !== "zIndex",
})(({ zIndex, animation }: { zIndex: string, animation?: string }) => ({
  position: "absolute",
  width: "30%",
  height: "calc(100% - 45px)",
  right: "0",
  zIndex: zIndex,
  backgroundColor: "#232327",
  animation: animation,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  "@keyframes slideInMail": {
    "0%": {
      transform: "translateX(100%)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  },

  "@keyframes slideOutMail": {
    "0%": {
        transform: "translateX(0)",
    },
    "100%": {
        transform: "translateX(100%)",
    },
    },
}));

export const BigMailIcon = styled("i")({
  flex: 1,
  width: "30%",
  height: "30%",

  "& > *": {
    width: "100%",
    height: "100%",
    color: "white",
  },
});

export const Form = styled("form")({
  flex: 3,
    width: "100%",
    height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  paddingBottom: "1rem",

    "& > *": {
        width: "80% !important",
        backgroundColor: "rgb(0, 0, 0, 0.4)",
        border: "none",
        outline: "none",
        color: "white",
        padding: "0.5rem",
        borderRadius: "0.5rem",
    },
});

export const Name = styled("input")({
});

export const Email = styled("input")({
});

export const Subject = styled("input")({
});

export const Message = styled("textarea")({
    flex: 1,

    resize: "none",
});

export const Submit = styled("button")({
    "&:hover": {
        cursor: "pointer",
        backgroundColor: "rgb(255, 255, 255, 0.05)",
    },
});

export const MinimizeButton = styled("button")({
    position: "absolute",
    left: "0",
    border: "none",
    backgroundColor: "transparent",

    "&:hover": {
        cursor: "pointer",
    },

    "& > *": {
        color: "white",
        height: "20px",
        width: "20px",
    },
});
