import { useState } from "react";

import { ChillBeatsContainer } from "../../styles";

import { useAudioFile } from "../../hooks";
import { PlayerButtons } from "./PlayerButtons";
import { SoundControl } from "./SoundControl";
import { NowPlaying } from "./NowPlaying";

export default function ChillBeats({ appName }: { appName: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState<number | "muted">(20);

  const [track, setTrack] = useState(0);

  const trackList = [
    "Jhove x Amess - I know, goodbye (Lofi Records)",
    "14.3 Billion Years (OST Outer Wilds)",
    "Cheel - Blue Dream",
    "Kayou - Beyond",
  ];

  const audioFile = useAudioFile(trackList, track, volume);

  return (
    <ChillBeatsContainer>
      <NowPlaying
        track={track}
        trackList={trackList}
        setIsPlaying={setIsPlaying}
      />
      <PlayerButtons
        appName={appName}
        audioFile={audioFile}
        trackList={trackList}
        setTrack={setTrack}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        track={track}
      />
      <SoundControl volume={volume} setVolume={setVolume} />
    </ChillBeatsContainer>
  );
}
