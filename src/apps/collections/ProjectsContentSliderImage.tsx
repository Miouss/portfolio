import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Image } from "../../styles";
import { UndefinedDirection } from "../../types";

interface Props {
  triggerAnimDirection: UndefinedDirection;
  imageUrl: string;
  nthImage: number;
  setIsSlideButtonsDisabled: Dispatch<SetStateAction<boolean>>;
}

export default function SliderImage({
  triggerAnimDirection,
  imageUrl,
  nthImage,
  setIsSlideButtonsDisabled,
}: Props) {
  const [currIndex, setCurrIndex] = useState(nthImage);
  const [animName, setAnimName] = useState("");

  useEffect(() => {
    if (!triggerAnimDirection) return;

    const lastIndex = 2;
    let newAnimName = "",
      newIndex = 0;

    if (triggerAnimDirection === "left") {
      newAnimName = currIndex === lastIndex ? "swap" : "left";
      newIndex = currIndex === lastIndex ? 0 : currIndex + 1;
    }
    if (triggerAnimDirection === "right") {
      newAnimName = currIndex === 0 ? "swap" : "right";
      newIndex = currIndex === 0 ? lastIndex : currIndex - 1;
    }

    setCurrIndex(newIndex);
    setAnimName(newAnimName);
  }, [triggerAnimDirection]);

  return (
    <Image
      animName={animName}
      startTx={currIndex}
      onAnimationStart={() => setIsSlideButtonsDisabled(true)}
      onAnimationEnd={() => setIsSlideButtonsDisabled(false)}
    >
      <img src={imageUrl} alt="image1" />
    </Image>
  );
}
