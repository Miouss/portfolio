import styled from "@mui/system/styled";

import { Stack } from "@mui/material";

export const LoginFormContainer = styled(Stack)({
  marginTop: "150px",
  width: "100%",
  maxWidth: "300px",
  "& > *": {
    textAlign: "center",
    width: "100%",
  },
});