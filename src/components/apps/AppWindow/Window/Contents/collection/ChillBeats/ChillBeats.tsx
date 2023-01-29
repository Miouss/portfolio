import { ChillBeatsContainer, SkipForward, Play, PlayerButtons, SkipBack, SoundButton, SoundControl, Stop, VolumeSlider } from "./ChillBeatsStyled";
import {
    PlayIcon,
    StopIcon,
    SkipForwardIcon,
    SkipBackIcon,
    VolumeOffIcon,
    VolumeZeroIcon,
    VolumeLowIcon,
    VolumeHighIcon,
    
} from "../../../../../../../assets/icons/icons";
export default function ChillBeats({ appName }: { appName: string }) {
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
        <SoundButton>
            <VolumeHighIcon />
        </SoundButton>
        <VolumeSlider>

        </VolumeSlider>
      </SoundControl>
    </ChillBeatsContainer>
  );
}
