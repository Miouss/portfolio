import { styled } from "@mui/system";
import { Stack } from "@mui/material";

// create Appbar styled components

export const AppbarContainer = styled(Stack)({
  width: "100%",
  alignItems: "center",
});

AppbarContainer.defaultProps = {
  direction: "row",
};

// create AppTaskContainer styled components

export const AppTaskContainer = styled(Stack)(
  ({ isFocused }: { isFocused: boolean }) => ({
    height: "100%",
    width: "54px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: isFocused ? "rgba(150, 150, 150, 0.4)" : "transparent",
    "&:hover": {
      backgroundColor: isFocused ? "rgba(150, 150, 150, 0.4)" : "rgba(150, 150, 150, 0.2)",
    },
    "> :last-child" : {
      width: isFocused ? "100%" : "75%",
    },
    "&:hover > :last-child": {
      width: "100%",
  },
  })
);

export const AppUnderline = styled("div", {
  name: "AppUnderline",
  slot: "AppUnderline",
})({
  height: "3px",
  backgroundColor: "rgb(51,153,255)",
  transition: "width 0.2s ease-in-out",
});

export const AppIconBox = styled(Stack)({
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.5rem",
});