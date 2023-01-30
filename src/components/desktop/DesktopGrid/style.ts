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
})(({ cursor, click }: { cursor?: "default" | "progress", click?: boolean}) => ({
  position: "relative",
  boxSizing: "border-box",
  cursor: cursor ?? "default",
  justifyContent: "center",
  alignItems: "center",
  border: click ? "solid lightblue 1px" : "none",
}));

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
  paddingBottom: "1rem",
});

export const GridAppLabel = styled("div")({
  color: "white",
  textShadow: "rgb(0, 0, 0) 0px 0px 3px",
});

export const GridAppBadge = styled("div")({
  position: "absolute",
  left: "30%",
  backgroundColor: "white",
  display: "flex",
});
