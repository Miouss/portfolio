import styled from "@mui/system/styled";

import { Stack } from "@mui/material";
import { propsFilter } from "../propsFilter";

export const LoginFormBadge = styled(
  Stack,
  propsFilter("sessionName")
)(({ sessionName }: { sessionName: "Samir Ghabi" | "Miouss" }) => ({
  backgroundColor: "white",
  borderRadius: "50%",
  width: "170px",
  height: "170px",
  alignSelf: "center",
  justifyContent: "center",
  alignItems: "center",
  background: "transparent",
  "& > *": {
    height: "100%",
    width: "100%",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: sessionName === "Samir Ghabi" && "50% 25%",
  },
}));
