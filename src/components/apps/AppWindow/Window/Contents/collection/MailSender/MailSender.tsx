import {
  BigMailIcon,
  Email,
  Form,
  MailSenderContainer,
  Message,
  MinimizeButton,
  Name,
  Subject,
  Submit,
} from "./MailSenderStyled";

import {
  MailIcon,
  SendMailIcon,
  MailMinimizeIcon,
} from "../../../../../../../assets/icons/icons";
import { useEffect, useRef, useState } from "react";
import {
  useAppDispatch,
  focusApp,
  minimizeApp,
  RootState,
} from "../../../../../../../redux";
import useFocusEffect from "../../../../../hooks/useFocusEffect";
import useMinimizedEffect from "../../../../../hooks/useMinimizedEffect";
import { useSelector } from "react-redux";

export default function MailSender({ appName }: { appName: string }) {
  const { isMinimized } = useSelector((store: RootState) => {
    const app = store.apps.find((app) => app.name === appName);
    return app!.status;
  });

  const dispatch = useAppDispatch();

  const [animation, setAnimation] = useState("slideInMail 0.5s forwards");

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
    setAnimation(isMinimized ? "slideOutMail 0.5s forwards" : "slideInMail 0.5s forwards");
  }, [isMinimized]);

  return (
    <MailSenderContainer
      animation={animation}
      zIndex={zIndex}
      onClick={() => dispatch(focusApp(appName))}
    >
      <MinimizeButton onClick={handleMinimize}>
        <MailMinimizeIcon />
      </MinimizeButton>
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