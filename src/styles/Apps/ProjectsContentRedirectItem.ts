import styled from "@mui/system/styled";
import { fontSizeResponsive } from "../propsFilter";

export const Item = styled(
  "button",
  fontSizeResponsive
)(({ fsresp }: { fsresp: number }) => ({
  width: fsresp >= 12 ? "85px" : "100%",
  height: "45px",
  backgroundColor: "rgba(242, 242, 242, 0.6)",
  alignSelf: "center",
  border: "none",
  background: "#187CF1",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "2px",

  "&:hover": {
    animation: "scaling 1.5s ease-in-out infinite forwards",
  },

  "@keyframes scaling": {
    "0%": {
      transform: "scale(1)",
    },
    "50%": {
      transform: "scale(1.1)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },

  "& > *": {
    color: "white",
    width: "24px",
    height: "24px",
  },
}));
