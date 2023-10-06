import styled from "@mui/system/styled";
import { propsFilter } from "../propsFilter";
import { UndefinedDirection } from "../../types";

const slideAnim = (name: string, tX0: number, tX100: number) => ({
  [`@keyframes ${name}`]: {
    "0%": {
      x: `${tX0}%`,
    },
    "100%": {
      transform: `translateX(${tX100}%)`,
    },
  },
});

interface ImageProps {
  animName: string;
  startTx: number;
}

export const Image = styled(
  "div",
  propsFilter("animName", "startTx")
)(({ animName, startTx }: ImageProps) => ({
  //animation: `${animName} 1s ease-in-out forwards`,
  x: "300%",
  /*   ...slideAnim("left", startTx * 100, 100),
  ...slideAnim("right", startTx * 100, -100), */
  //...slideAnim("swap", -100, 100),
  position: "absolute",
  width: "100%",
  height: "100%",
}));
