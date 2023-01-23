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
  shouldForwardProp: (prop) => prop !== "cursor",
})(({ cursor, clickEventHappened }: { cursor?: "default" | "progress", clickEventHappened?: boolean}) => ({
  position: "relative",
  boxSizing: "border-box",
  cursor: cursor ?? "default",
  justifyContent: "center",
  alignItems: "center",
  border: clickEventHappened ? "solid lightblue 1px" : "none",
}));

export const BackgroundColorLayer = styled("div")(
  ({ clickEventHappened }: { clickEventHappened: boolean }) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "white",

    ...(clickEventHappened ? pointerDownStyle : pointerNotDownStyle),
  })
);

export const GridAppIcon = styled("div")({
  paddingBottom: "1rem",
});

export const GridAppLabel = styled("div")({
  color: "white",
  textShadow: "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000",
});

export const GridAppBadge = styled("div")({
  position: "absolute",
  left: "30%",
  backgroundColor: "white",
  display: "flex",
});
