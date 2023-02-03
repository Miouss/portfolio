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
} from "./style";

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

import {
  LoadingIcon,
  DoneIcon,
  ErrorIcon,
} from "../../../../../../../assets/icons/icons";

import { MailSentProps, BodyMessageProps } from "./types";

export default function MailSender({ appName }: { appName: string }) {
  const [mailSent, setMailSent] = useState<MailSentProps>(undefined);
  const [bodyMessage, setBodyMessage] = useState<BodyMessageProps | undefined>(
    undefined
  );

  const { isMinimized } = useSelector((store: RootState) => {
    const app = store.apps.find((app) => app.name === appName);
    return app!.status;
  });

  const dispatch = useAppDispatch();

  const [animation, setAnimation] = useState("slideInMail 0.5s forwards");
  const [animationEnded, setAnimationEnded] = useState(false);

  useEffect(() => {
    dispatch(focusApp(appName));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (mailSent === "sending") return;
    if (mailSent === true || mailSent === false) return;

    setMailSent("sending");
    setBodyMessage({
      // @ts-ignore
      name: e.currentTarget.name.value,
      email: e.currentTarget.email.value,
      subject: e.currentTarget.subject.value,
      message: e.currentTarget.message.value,
    });
  };

  const handleSubmitIcon = () => {
    if (mailSent === undefined) return <SendMailIcon />;
    if (mailSent === "sending") return <LoadingIcon />;
    if (mailSent) return <DoneIcon />;
    return <ErrorIcon />;
  };

  useEffect(() => {
    if (mailSent === undefined) return;

    const sendMail = async () => {
      try {
        const response = await fetch(
          "https://mail-sender-yncz7sisiq-ew.a.run.app",
          {
            method: "POST",
            body: JSON.stringify(bodyMessage),
          }
        );

        response.ok ? setMailSent(true) : setMailSent(false);
      } catch (err) {
        setMailSent(false);
      }
    };

    if (mailSent === "sending") {
      sendMail();
      return;
    }

    setTimeout(() => {
      setMailSent(undefined);
    }, 600000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mailSent]);

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
        <Name required type="text" placeholder="Name" name="name" />
        <Email required type="email" placeholder="Email" name="email" />
        <Subject required type="text" placeholder="Subject" name="subject" />
        <Message required placeholder="Message" name="message" />

        <Submit type="submit" sendingState={mailSent}>
          {handleSubmitIcon()}
        </Submit>
      </Form>
    </MailSenderContainer>
  );
}
