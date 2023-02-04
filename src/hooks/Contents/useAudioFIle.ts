import { useEffect, useMemo } from "react";

export default function useAudioFile(
  trackList: string[],
  track: number,
  volume: number | "muted"
) {
  const audioFile = useMemo(
    () => new Audio(require(`../../assets/playlist/${trackList[track]}.mp3`)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    return () => {
      audioFile.pause();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (volume === "muted") audioFile.volume = 0;
    else audioFile.volume = volume / 100;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [volume]);

  useEffect(() => {
    audioFile.src = require(`../../assets/playlist/${trackList[track]}.mp3`);
    audioFile.play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track]);

  return audioFile;
}
