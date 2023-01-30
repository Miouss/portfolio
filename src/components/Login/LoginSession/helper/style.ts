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
  
  export const LoginSessionBadge = styled(Stack)({
    backgroundColor: "transparent",
    borderRadius: "50%",
    height: "75px",
    width: "75px",
    "& > *": {
      borderRadius: "50%",
      height: "inherit",
      width: "inherit",
    },
  });
  
  export const LoginSessionTitle = styled(Stack)({
    color: "white",
    width: "70%",
    fontSize: "1.2rem",
    paddingTop: "20px",
    paddingRight: "70px",
  });
  