import { ChangeEvent, Dispatch } from "react";
import { Volume } from "./SoundControl";

import { VolumeSlider as VolumeSliderContainer } from "../../styles";

interface VolumeSliderProps {
  currentVolume: number;
  setVolume: Dispatch<Volume>;
}

export function VolumeSlider({ currentVolume, setVolume }: VolumeSliderProps) {
  const changeVolume = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setVolume(parseInt(e.target.value));
  };

  return (
    <VolumeSliderContainer
      colorBreak={currentVolume}
      type="range"
      value={currentVolume}
      min={0}
      max={100}
      step="1"
      onChange={changeVolume}
    />
  );
}
