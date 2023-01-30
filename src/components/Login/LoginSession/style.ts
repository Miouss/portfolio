import styled from "@mui/system/styled";
import { Stack } from "@mui/material";

export const LoginSessionGlobalContainer = styled(Stack)({
  height: "100%",
  alignSelf: "flex-start",
  alignItems: "flex-end",
  margin: "15px",
  gap: "20px",
  cursor: "default !important",
});

LoginSessionGlobalContainer.defaultProps = {
  direction: "column-reverse",
};
