import {
  BigMailIcon,
  MailSenderContainer,
  MinimizeButton,
  SlideButton,
} from "../../styles";

import { MailIcon, MailMinimizeIcon, MailSlideIcon } from "../../assets";
import {
  useEffect,
  useState,
  AnimationEvent,
  KeyboardEvent,
  Dispatch,
} from "react";
import { useAppDispatch, focusApp, minimizeApp } from "../../redux";
import { useFocusEffect, useAppStatus } from "../../hooks";
import { Form } from "./Form";

export enum Animation {
  SLIDE_IN = "slideInMail",
  SLIDE_OUT = "slideOutMail",
}

export default function MailSender({ appName }: { appName: string }) {
  const { SLIDE_IN, SLIDE_OUT } = Animation;

  const dispatch = useAppDispatch();

  const [animation, setAnimation] = useState(SLIDE_IN);
  const [isAnimationEnded, setIsAnimationEnded] = useState(false);

  const triggerFocus = () => dispatch(focusApp(appName));

  useEffect(() => {
    triggerFocus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMinimize = () => {
    setAnimation(SLIDE_OUT);
    setTimeout(() => dispatch(minimizeApp(appName)), 500);
  };

  const handleAnimationStart = (e: AnimationEvent<HTMLDivElement>) => {
    e.animationName === SLIDE_IN && setIsAnimationEnded(false);
  };

  const handleAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === SLIDE_OUT) {
      dispatch(minimizeApp(appName));
      setIsAnimationEnded(true);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) =>
    e.stopPropagation();

  const zIndex = useFocusEffect(appName);

  useMinimizedEffect(appName, setAnimation);

  return (
    <MailSenderContainer
      animation={animation}
      zIndex={zIndex}
      onClick={triggerFocus}
      onAnimationStart={handleAnimationStart}
      onAnimationEnd={handleAnimationEnd}
      onKeyDown={handleKeyDown}
    >
      <MinimizeButton onClick={handleMinimize}>
        <MailMinimizeIcon />
      </MinimizeButton>
      {isAnimationEnded && (
        <SlideButton>
          <MailSlideIcon />
        </SlideButton>
      )}
      <BigMailIcon>
        <MailIcon />
      </BigMailIcon>
      <Form />
    </MailSenderContainer>
  );
}

function useMinimizedEffect(
  appName: string,
  setAnimation: Dispatch<Animation>
) {
  const { isMinimized } = useAppStatus(appName);

  useEffect(() => {
    setAnimation(isMinimized ? Animation.SLIDE_OUT : Animation.SLIDE_IN);
  }, [isMinimized]);
}
