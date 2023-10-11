import {
  VolumeMuteIcon,
  VolumeZeroIcon,
  VolumeLowIcon,
  VolumeMediumIcon,
  VolumeHighIcon,
} from "../../assets";

import { Volume } from "./SoundControl";

import { SoundButton as SoundButtonContainer } from "../../styles";

interface SoundButtonProps {
  volume: Volume;
  muteAudio: () => void;
}

export function SoundButton({ volume, muteAudio }: SoundButtonProps) {
  const volumeIcon = () => {
    if (volume === "muted") return <VolumeMuteIcon />;
    if (volume === 0) return <VolumeZeroIcon />;
    if (volume <= 25) return <VolumeLowIcon />;
    if (volume <= 75) return <VolumeMediumIcon />;
    return <VolumeHighIcon />;
  };

  return (
    <SoundButtonContainer onClick={muteAudio}>
      {volumeIcon()}
    </SoundButtonContainer>
  );
}
