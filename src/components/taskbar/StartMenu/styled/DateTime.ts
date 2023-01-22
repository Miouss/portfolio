import { styled } from "@mui/styles";
import { Stack } from "@mui/material";

export const DateTimeBox = styled(Stack)({
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: "0.3rem",
    padding: "1rem",
    fontSize: "0.8rem",
    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
});