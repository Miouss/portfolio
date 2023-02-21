import styled from "@mui/system/styled";
import { WindowsDesktopBackground } from "../../assets";


export const DesktopGridContainer = styled("div")({
  position: "relative",
  height: "calc(100vh - 45px)",
  width: "100vw",
  display: "grid",
  gridTemplateColumns: "repeat(10, 1fr)",
  gridTemplateRows: "repeat(5, 1fr)",
  marginRight: "1rem",

  backgroundImage: `url(${WindowsDesktopBackground})`,
  backgroundPosition: "76% 50%",
  backgroundRepeat: "norepeat",
  backgroundSize: "cover",

  zIndex: -1,
});