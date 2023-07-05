import styled from "@mui/system/styled";
import { propsFilter } from "../propsFilter";

type OrientationProp = "left" | "right";

const chevronBouncing = (orientation: OrientationProp) => ({
  [`@keyframes chevronBouncing${orientation}`]: {
    "0%": {
      transform: `translateX(${orientation === "left" ? 15 : -15}px)`,
    },
    "50%": {
      transform: `translateX(${orientation === "left" ? 10 : -10}px)`,
    },
    "100%": {
      transform: `translateX(${orientation === "left" ? 15 : -15}px)`,
    },
  },
});

const bouncingAnim = (orientation: OrientationProp) =>
  `chevronBouncing${orientation} 1.5s ease-in infinite both`;

export const Chevron = styled(
  "button",
  propsFilter("direction")
)(({ direction }: { direction: OrientationProp }) => ({
  animation: bouncingAnim(direction),
  ...chevronBouncing(direction),
}));
