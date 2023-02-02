import { useEffect, useMemo, useRef, useState } from "react";

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
  NowPlayingTrack,
  NowPlayingIconContainer,
  NowPlayingTrackContainer,
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
} from "../../../../../../../assets/icons/icons";

import { useAppDispatch, closeApp } from "../../../../../../../redux";

export default function ChillBeats({ appName }: { appName: string }) {
  const trackTitleRef = useRef<HTMLHeadingElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState<number | "muted">(20);
  const [volumeBeforeMute, setVolumeBeforeMute] = useState<number | undefined>(
    undefined
  );
  const [track, setTrack] = useState(0);
  const [scrollWidth, setScrollWidth] = useState<number>(0);

  const dispatch = useAppDispatch();

  const handleAudioPlay = (e) => {
    e.stopPropagation();
    if (audioFile.paused) {
      audioFile.play();
      setIsPlaying(true);
    } else {
      audioFile.pause();
      setIsPlaying(false);
    }
  };
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setVolume(parseInt(e.target.value));
  };

  const trackList = [
    "Jhove x Amess - I know, goodbye (Lofi Records)",
    "14.3 Billion Years (OST Outer Wilds)",
    "Cheel - Blue Dream",
    "Kayou - Beyond",
  ];

  const audioFile = useMemo(
    () =>
      new Audio(
        require(`../../../../../../../assets/playlist/${trackList[track]}.mp3`)
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const volumeIcon = () => {
    if (volume === "muted") return <VolumeMuteIcon />;
    if (volume === 0) return <VolumeZeroIcon />;
    if (volume <= 25) return <VolumeLowIcon />;

    if (volume <= 75) return <VolumeMediumIcon />;

    return <VolumeHighIcon />;
  };

  const handleMute = () => {
    if (volume === "muted") {
      setVolume(volumeBeforeMute as number);
      return;
    }

    setVolumeBeforeMute(volume as number);
    setVolume("muted");
  };

  const handleSkipForward = () => {
    if (track === trackList.length - 1) setTrack(0);
    else setTrack(track + 1);
  };

  const handleSkipBack = () => {
    if (track === 0) setTrack(trackList.length - 1);
    else setTrack(track - 1);
  };

  const handleCloseApp = () => {
    dispatch(closeApp(appName));
  };

  audioFile.addEventListener("ended", () => {
    handleSkipForward();
  });

  useEffect(() => {
    if (volume === "muted") audioFile.volume = 0;
    else audioFile.volume = volume / 100;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [volume]);

  useEffect(() => {
    audioFile.src = require(`../../../../../../../assets/playlist/${trackList[track]}.mp3`);
    audioFile.play();
    setIsPlaying(true);
    setScrollWidth(- trackTitleRef?.current?.scrollWidth! + trackTitleRef?.current?.offsetWidth!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track]);

  useEffect(() => {
    return () => {
      audioFile.pause();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ChillBeatsContainer>
      <NowPlayingContainer>
        <NowPlayingIconContainer>
          <NowPlayingIcon />
        </NowPlayingIconContainer>
        <NowPlayingTrackContainer>
          <NowPlayingTrack ref={trackTitleRef} translatePx={scrollWidth}>{trackList[track]}</NowPlayingTrack>
        </NowPlayingTrackContainer>
      </NowPlayingContainer>
      <PlayerButtons>
        <Stop onClick={handleCloseApp}>
          <StopIcon />
        </Stop>
        <SkipBack onClick={handleSkipBack}>
          <SkipBackIcon />
        </SkipBack>
        <Play onClick={handleAudioPlay}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </Play>
        <SkipForward onClick={handleSkipForward}>
          <SkipForwardIcon />
        </SkipForward>
      </PlayerButtons>
      <SoundControl>
        <SoundButton onClick={() => handleMute()}>{volumeIcon()}</SoundButton>
        <VolumeSlider
          colorBreak={volume === "muted" ? volumeBeforeMute! : volume}
          type="range"
          value={volume === "muted" ? volumeBeforeMute! : volume}
          min={0}
          max={100}
          step="1"
          onChange={(e) => handleVolumeChange(e)}
        />
      </SoundControl>
    </ChillBeatsContainer>
  );
}
