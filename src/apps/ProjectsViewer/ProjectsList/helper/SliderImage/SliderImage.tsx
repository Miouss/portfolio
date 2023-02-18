import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Image } from "../../../../../styles";
import { changeSliderImage } from "./changeSliderImage";
import { UndefinedDirection } from "../types";

interface Props {
  triggerAnimDirection: UndefinedDirection;
  translationOffset: number;
  imageUrl: string;
  nthImage: number;
  setDisableButtons: Dispatch<SetStateAction<boolean>>;
}

export default function SliderImage({
  triggerAnimDirection,
  translationOffset,
  imageUrl,
  nthImage,
  setDisableButtons,
}: Props) {
  const [slideAnimKey, setSlideAnimKey] = useState(nthImage);
  const [anim, setAnim] = useState("");

  const slideAnims = {
    right: ["center-to-left", "right-to-center", "left-to-right"],
    left: ["center-to-right", "right-to-left", "left-to-center"],
  };

  useEffect(() => {
    if (triggerAnimDirection) {
      changeSliderImage(
        triggerAnimDirection,
        slideAnims[triggerAnimDirection],
        slideAnimKey,
        setAnim,
        setSlideAnimKey
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerAnimDirection]);

  return (
    <Image
      anim={anim}
      translationOffset={translationOffset}
      onAnimationStart={() => setDisableButtons(true)}
      onAnimationEnd={() => setDisableButtons(false)}
    >
      <img src={imageUrl} alt="image1" />
    </Image>
  );
}
