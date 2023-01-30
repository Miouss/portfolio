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
