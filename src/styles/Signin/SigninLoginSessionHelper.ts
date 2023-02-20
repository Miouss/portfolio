import styled from "@mui/system/styled";
import { Stack } from "@mui/material";

export const LoginSessionContainer = styled(Stack)(
    ({ selected }: { selected: boolean }) => ({
      width: "100%",
      height: "fit-content",
      backgroundColor: selected ? "rgba(255, 255, 255, 0.5)" : "transparent",
      gap: "20px",
      "&:hover": {
        backgroundColor: !selected && "rgba(255, 255, 255, 0.3)",
      },
    })
  );
  
  LoginSessionContainer.defaultProps = {
    direction: "row",
  };
  
  export const LoginSessionBadge = styled(Stack, {
    shouldForwardProp: (prop) => prop !== "sessionName",
  })(({ sessionName }: { sessionName: "Samir" | "Miouss" }) => ({
    borderRadius: "50%",
    width: "70px",
    height: "70px",
    background: "transparent",
    "& > *": {
      height: "100%",
      width: "100%",
      borderRadius: "50%",
      objectFit: "cover",
      objectPosition:  sessionName === "Samir" && "50% 25%",
    },
  }));
  
  
  export const LoginSessionTitle = styled(Stack)({
    color: "white",
    fontSize: "1.2rem",
    paddingTop: "20px",
    paddingRight: "70px",
  });
  