import { Dispatch, SetStateAction } from "react";

export const changeSliderImage = (
  slideDirection: "left" | "right",
  anims: string[],
  animKey: number,
  setAnim: Dispatch<SetStateAction<string>>,
  setImageAnimKey: Dispatch<SetStateAction<number>>
) => {
  setAnim(anims[animKey]);
  if (slideDirection === "left") {
    if (animKey === 2) return setImageAnimKey(0);
    return setImageAnimKey(animKey + 1);
  }

  if (animKey === 0) return setImageAnimKey(2);
  return setImageAnimKey(animKey - 1);
};
