import styled from "@mui/system/styled";
import { Stack } from "@mui/material";

const pointerNotDownStyle = {
  opacity: "0",
  "&:hover": {
    opacity: "0.1",
  },
};

const pointerDownStyle = {
  opacity: "0.1",

  "&:hover": {
    opacity: "0",
  },
};

export const GridAppContainer = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "cursor" && prop !== "click",
})(
  ({
    cursor,
    click,
  }: {
    cursor?: "default" | "progress";
    click?: boolean;
  }) => ({
    position: "relative",

    cursor: cursor ?? "default",
    justifyContent: "center",
    alignItems: "center",
    border: click ? "solid lightblue 1px" : "solid transparent 1px",
    minWidth: "121.85px",
  })
);

export const BackgroundColorLayer = styled("div")(
  ({ click }: { click: boolean }) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "white",

    ...(click ? pointerDownStyle : pointerNotDownStyle),
  })
);

export const GridAppIcon = styled("div")({
  position: "relative",
  paddingBottom: "1rem",
  "& > *": {
    width: "48px",
    height: "48px",
    objectFit: "contain",
  },
  pointerEvents: "none",
});

export const GridAppLabel = styled("div")({
  width: "100%",
  textAlign: "center",
  color: "white",
  textShadow: "rgb(0, 0, 0) 0px 0px 3px",
});
