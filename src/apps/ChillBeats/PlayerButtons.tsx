import { Dispatch } from "react";

import {
  SkipForward,
  Play,
  PlayerButtons as PlayerButtonsContainer,
  SkipBack,
  Stop,
} from "../../styles";
import {
  PlayIcon,
  PauseIcon,
  StopIcon,
  SkipForwardIcon,
  SkipBackIcon,
} from "../../assets";

import { useAppDispatch, closeApp } from "../../redux";

interface PlayerButtonsProps {
  appName: string;
  audioFile: HTMLAudioElement;
  trackList: string[];
  setTrack: Dispatch<number>;
  isPlaying: boolean;
  setIsPlaying: Dispatch<boolean>;
  track: number;
}

export function PlayerButtons({
  appName,
  audioFile,
  trackList,
  setTrack,
  isPlaying,
  setIsPlaying,
  track,
}: PlayerButtonsProps) {
  const dispatch = useAppDispatch();

  const handleCloseApp = () => {
    dispatch(closeApp(appName));
  };

  const playAudio = () => {
    audioFile.play();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    audioFile.pause();
    setIsPlaying(false);
  };

  const handlePlayButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (audioFile.paused) playAudio();
    else pauseAudio();
  };

  const skipBack = () => {
    if (!track) setTrack(trackList.length - 1);
    else setTrack(track - 1);
  };

  const skipForward = () => {
    if (track === trackList.length - 1) setTrack(0);
    else setTrack(track + 1);
  };

  audioFile.addEventListener("ended", () => {
    skipForward();
  });

  return (
    <PlayerButtonsContainer>
      <Stop onClick={handleCloseApp}>
        <StopIcon />
      </Stop>
      <SkipBack onClick={skipBack}>
        <SkipBackIcon />
      </SkipBack>
      <Play onClick={handlePlayButtonClick}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </Play>
      <SkipForward onClick={skipForward}>
        <SkipForwardIcon />
      </SkipForward>
    </PlayerButtonsContainer>
  );
}
