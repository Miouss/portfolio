import { useState } from "react";

import {
  ChillBeatsContainer,
  SkipForward,
  Play,
  PlayerButtons,
  SkipBack,
  SoundButton,
  SoundControl,
  Stop,
  VolumeSlider,
} from "./ChillBeatsStyled";
import {
  PlayIcon,
  StopIcon,
  SkipForwardIcon,
  SkipBackIcon,
  VolumeMuteIcon,
  VolumeZeroIcon,
  VolumeLowIcon,
  VolumeMediumIcon,
  VolumeHighIcon,
} from "../../../../../../../assets/icons/icons";

export default function ChillBeats({ appName }: { appName: string }) {
  const [volume, setVolume] = useState<number | "muted">(50);
  const [volumeBeforeMute, setVolumeBeforeMute] = useState(50);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseInt(e.target.value));
  };

  const volumeIcon = () => {
    if (volume === "muted") return <VolumeMuteIcon />;
    if (volume === 0) return <VolumeZeroIcon />;
    if (volume <= 25) return <VolumeLowIcon />;

    if (volume <= 75) return <VolumeMediumIcon />;

    return <VolumeHighIcon />;
  };

  const handleMute = () => {
    if (volume === "muted") {
      setVolume(volumeBeforeMute);
      return;
    }

    setVolumeBeforeMute(volume as number);
    setVolume("muted");
  };
  
  return (
    <ChillBeatsContainer>
      <PlayerButtons>
        <Stop>
          <StopIcon />
        </Stop>
        <SkipBack>
          <SkipBackIcon />
        </SkipBack>
        <Play>
          <PlayIcon />
        </Play>
        <SkipForward>
          <SkipForwardIcon />
        </SkipForward>
      </PlayerButtons>
      <SoundControl>
        <SoundButton onClick={() => handleMute()}>{volumeIcon()}</SoundButton>
        <VolumeSlider
          type="range"
          min={0}
          max={100}
          step="1"
          onChange={(e) => handleVolumeChange(e)}
        />
      </SoundControl>
    </ChillBeatsContainer>
  );
}
