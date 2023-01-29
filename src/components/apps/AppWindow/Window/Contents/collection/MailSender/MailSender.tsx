import {
  BigMailIcon,
  Email,
  Form,
  MailSenderContainer,
  Message,
  MinimizeButton,
  Name,
  RefocusButton,
  Subject,
  Submit,
} from "./MailSenderStyled";

import {
  MailIcon,
  SendMailIcon,
  MailMinimizeIcon,
  MailRefocusIcon,
} from "../../../../../../../assets/icons/icons";
import { useEffect, useState } from "react";
import {
  useAppDispatch,
  focusApp,
  minimizeApp,
  RootState,
} from "../../../../../../../redux";
import useFocusEffect from "../../../../../hooks/useFocusEffect";
import { useSelector } from "react-redux";

export default function MailSender({ appName }: { appName: string }) {
  const { isMinimized } = useSelector((store: RootState) => {
    const app = store.apps.find((app) => app.name === appName);
    return app!.status;
  });

  const dispatch = useAppDispatch();

  const [animation, setAnimation] = useState("slideInMail 0.5s forwards");
  const [animationEnded, setAnimationEnded] = useState(false);

  useEffect(() => {
    dispatch(focusApp(appName));
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleMinimize = () => {
    setAnimation("slideOutMail 0.5s forwards");
    setTimeout(() => dispatch(minimizeApp(appName)), 500);
  };

  const zIndex = useFocusEffect(appName);

  useEffect(() => {
    setAnimation(
      isMinimized ? "slideOutMail 0.5s forwards" : "slideInMail 0.5s forwards"
    );
  }, [isMinimized]);

  return (
    <MailSenderContainer
      animation={animation}
      zIndex={zIndex}
      onClick={() => dispatch(focusApp(appName))}
      onAnimationStart={(e) => {
        if (e.animationName === "slideInMail") {
          setAnimationEnded(false);
        }
      }}
      onAnimationEnd={(e) => {
        if (e.animationName === "slideOutMail") {
          setAnimationEnded(true);
          return;
        }
      }}
    >
      <MinimizeButton onClick={handleMinimize}>
        <MailMinimizeIcon />
      </MinimizeButton>
      {animationEnded && (
        <RefocusButton>
          <MailRefocusIcon />
        </RefocusButton>
      )}
      <BigMailIcon>
        <MailIcon />
      </BigMailIcon>
      <Form onSubmit={handleSubmit}>
        <Name required type="text" placeholder="Name" />
        <Email required type="email" placeholder="Email" />
        <Subject required type="text" placeholder="Subject" />
        <Message required placeholder="Message" />
        <Submit type="submit">
          <SendMailIcon />
        </Submit>
      </Form>
    </MailSenderContainer>
  );
}
