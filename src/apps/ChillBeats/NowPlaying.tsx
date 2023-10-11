import {
  NowPlayingContainer,
  IconBox,
  TrackTitle,
  TrackTitleBox,
} from "../../styles";
import { NowPlayingIcon } from "../../assets";
import { Dispatch, useEffect, useRef, useState } from "react";

interface Props {
  track: number;
  trackList: string[];
  setIsPlaying: Dispatch<boolean>;
}

export function NowPlaying({ track, trackList, setIsPlaying }: Props) {
  const trackTitleRef = useRef<HTMLHeadingElement>(null);
  const [scrollWidth, setScrollWidth] = useState<number>(0);

  useEffect(() => {
    if (!trackTitleRef.current) return;

    const { scrollWidth, offsetWidth } = trackTitleRef.current;

    setIsPlaying(true);
    setScrollWidth(-scrollWidth + offsetWidth);
  }, [track]);

  return (
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
  );
}
