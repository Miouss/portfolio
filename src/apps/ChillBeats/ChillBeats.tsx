import { useEffect, useRef, useState } from "react";

import {
  playAudio,
  skipForward,
  skipBack,
  changeVolume,
  muteAudio,
} from "./playerControls";

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
  NowPlayingContainer,
  IconBox,
  TrackTitle,
  TrackTitleBox,
} from "./style";
import {
  NowPlayingIcon,
  PlayIcon,
  PauseIcon,
  StopIcon,
  SkipForwardIcon,
  SkipBackIcon,
  VolumeMuteIcon,
  VolumeZeroIcon,
  VolumeLowIcon,
  VolumeMediumIcon,
  VolumeHighIcon,
} from "../../assets";

import { useAppDispatch, closeApp } from "../../redux";
import { useAudioFile } from "../../hooks";

export default function ChillBeats({ appName }: { appName: string }) {
  const trackTitleRef = useRef<HTMLHeadingElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState<number | "muted">(20);
  const [volumeBeforeMute, setVolumeBeforeMute] =
    useState<number | undefined>(undefined);
  const [track, setTrack] = useState(0);
  const [scrollWidth, setScrollWidth] = useState<number>(0);

  const dispatch = useAppDispatch();

  const trackList = [
    "Jhove x Amess - I know, goodbye (Lofi Records)",
    "14.3 Billion Years (OST Outer Wilds)",
    "Cheel - Blue Dream",
    "Kayou - Beyond",
  ];

  const audioFile = useAudioFile(trackList, track, volume);

  useEffect(() => {
    setIsPlaying(true);
    setScrollWidth(
      -trackTitleRef?.current?.scrollWidth! +
        trackTitleRef?.current?.offsetWidth!
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track]);

  const volumeIcon = () => {
    if (volume === "muted") return <VolumeMuteIcon />;
    if (volume === 0) return <VolumeZeroIcon />;
    if (volume <= 25) return <VolumeLowIcon />;
    if (volume <= 75) return <VolumeMediumIcon />;
    return <VolumeHighIcon />;
  };

  const handleCloseApp = () => {
    dispatch(closeApp(appName));
  };

  audioFile.addEventListener("ended", () => {
    skipForward(track, setTrack, trackList);
  });

  return (
    <ChillBeatsContainer>
      <NowPlayingContainer>
        <IconBox>
          <NowPlayingIcon />
        </IconBox>
        <TrackTitleBox>
          <TrackTitle ref={trackTitleRef} translatePx={scrollWidth}>
            {trackList[track]}
          </TrackTitle>
        </TrackTitleBox>
      </NowPlayingContainer>
      <PlayerButtons>
        <Stop onClick={handleCloseApp}>
          <StopIcon />
        </Stop>
        <SkipBack onClick={() => skipBack(track, setTrack, trackList)}>
          <SkipBackIcon />
        </SkipBack>
        <Play onClick={(e) => playAudio(e, audioFile, setIsPlaying)}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </Play>
        <SkipForward onClick={(e) => skipForward(track, setTrack, trackList)}>
          <SkipForwardIcon />
        </SkipForward>
      </PlayerButtons>
      <SoundControl>
        <SoundButton
          onClick={() =>
            muteAudio(volume, volumeBeforeMute, setVolume, setVolumeBeforeMute)
          }
        >
          {volumeIcon()}
        </SoundButton>
        <VolumeSlider
          colorBreak={volume === "muted" ? volumeBeforeMute! : volume}
          type="range"
          value={volume === "muted" ? volumeBeforeMute! : volume}
          min={0}
          max={100}
          step="1"
          onChange={(e) => changeVolume(e, setVolume)}
        />
      </SoundControl>
    </ChillBeatsContainer>
  );
}
