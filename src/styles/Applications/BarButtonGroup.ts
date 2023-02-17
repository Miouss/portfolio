import styled from "@mui/system/styled";

export const BarButtonGroupContainer = styled("div")({
  display: "flex",
    "& > *": {
        border: "none !important",
        cursor: "default !important",
        padding: "0.35rem 1rem !important",
        background: "transparent",
        "& > *": {
          width: "1.3rem !important",
          height: "1.3rem !important",
        },
    },
});

export const Button = styled("button")({
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.1) !important",
    },
});
export const CloseButtonContainer = styled("button")({
  "&:hover": {
    "& > *": {
        color: "white !important",
    },
    backgroundColor: "red !important",
  },
});
