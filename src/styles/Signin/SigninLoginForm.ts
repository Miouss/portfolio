import styled from "@mui/system/styled";

import { Stack } from "@mui/material";

export const LoginFormContainer = styled(Stack)({
  marginTop: "8%",
  width: "100%",
  maxWidth: "300px",
  "& > *": {
    textAlign: "center",
  },
});