import { Dispatch, useEffect, useState } from "react";
import { SoundButton } from "./SoundControlSoundButton";
import { VolumeSlider } from "./SoundControlVolumeSlider";

import { SoundControl as SoundControlContainer } from "../../styles";

export type Volume = number | "muted";

interface SoundControlProps {
  volume: Volume;
  setVolume: Dispatch<Volume>;
}

export function SoundControl({ volume, setVolume }: SoundControlProps) {
  const [volumeBeforeMute, setVolumeBeforeMute] = useState<number>();

  const vol = volume === "muted" ? volumeBeforeMute! : volume;

  const muteAudio = () => {
    if (volume === "muted") {
      setVolume(volumeBeforeMute as number);
      return;
    }

    setVolumeBeforeMute(volume as number);
    setVolume("muted");
  };

  useEffect(() => {
    if (volume === "muted") setVolumeBeforeMute(vol);
    else if (volume === 0) setVolumeBeforeMute(20);
  }, [volume]);

  return (
    <SoundControlContainer>
      <SoundButton volume={volume} muteAudio={muteAudio} />
      <VolumeSlider currentVolume={vol} setVolume={setVolume} />
    </SoundControlContainer>
  );
}
