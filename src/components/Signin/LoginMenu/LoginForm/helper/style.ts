import styled from "@mui/system/styled";

import { Stack } from "@mui/material";

export const LoginFormBadge = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "sessionName",
})(({ sessionName }: { sessionName: "Samir Ghabi" | "Miouss" }) => ({
  backgroundColor: "white",
  borderRadius: "50%",
  maxWidth: "170px",
  maxHeight: "170px",
  alignSelf: "center",
  justifyContent: "center",
  alignItems: "center",
  background: "transparent",
  "& > *": {
    height: "100%",
    width: "100%",
    borderRadius: "50%",
    objectFit: sessionName === "Samir Ghabi" && "cover",
    objectPosition:  sessionName === "Samir Ghabi" && "50% 25%",
  },
}));
