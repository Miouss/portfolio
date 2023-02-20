import { Dispatch, SetStateAction } from "react";

export const playAudio = (
  e: React.MouseEvent<HTMLButtonElement>,
  audioFile: HTMLAudioElement,
  setIsPlaying: Dispatch<SetStateAction<boolean>>
) => {
  e.stopPropagation();
  if (audioFile.paused) {
    audioFile.play();
    setIsPlaying(true);
  } else {
    audioFile.pause();
    setIsPlaying(false);
  }
};

export const changeVolume = (
  e: React.ChangeEvent<HTMLInputElement>,
  setVolume: Dispatch<SetStateAction<number | "muted">>
) => {
  e.stopPropagation();
  setVolume(parseInt(e.target.value));
};

export const muteAudio = (
  volume: number | "muted",
  volumeBeforeMute: number | undefined,
  setVolume: Dispatch<SetStateAction<number | "muted">>,
  setVolumeBeforeMute: Dispatch<SetStateAction<number | undefined>>
) => {
  if (volume === "muted") {
    setVolume(volumeBeforeMute as number);
    return;
  }

  setVolumeBeforeMute(volume as number);
  setVolume("muted");
};

export const skipBack = (
  track: number,
  setTrack: Dispatch<SetStateAction<number>>,
  trackList: string[]
) => {
  if (track === 0) setTrack(trackList.length - 1);
  else setTrack(track - 1);
};

export const skipForward = (track: number, setTrack: Dispatch<SetStateAction<number>>, trackList: string[]) => {
  if (track === trackList.length - 1) setTrack(0);
  else setTrack(track + 1);
};
