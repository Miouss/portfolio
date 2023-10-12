import { Dispatch, FormEvent, useEffect, useState } from "react";
import { SendMailIcon, LoadingIcon, DoneIcon, ErrorIcon } from "../../assets";
import {
  Email,
  Form as FormContainer,
  Message,
  Name,
  Subject,
  Submit,
} from "../../styles";

export enum IsMailSent {
  YES = 1,
  NO = 0,
  FAILED = "failed",
  SENDING = "sending",
}

interface BodyMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Form() {
  const { YES, NO, SENDING } = IsMailSent;

  const [isMailSent, setIsMailSent] = useState<IsMailSent>(NO);
  const [bodyMessage, setBodyMessage] = useState<BodyMessage>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isMailSent == (SENDING || YES || NO)) return;

    setIsMailSent(SENDING);

    const { name, email, subject, message } = e.currentTarget;

    setBodyMessage({
      name,
      email,
      subject,
      message,
    });
  };

  const handleSubmitIcon = () => {
    if (isMailSent == NO) return <SendMailIcon />;
    if (isMailSent == SENDING) return <LoadingIcon />;
    if (isMailSent == YES) return <DoneIcon />;
    return <ErrorIcon />;
  };

  useSubmitHandler(isMailSent, setIsMailSent, bodyMessage);

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Name required type="text" placeholder="Name" name="name" />
      <Email required type="email" placeholder="Email" name="email" />
      <Subject required type="text" placeholder="Subject" name="subject" />
      <Message required placeholder="Message" name="message" />

      <Submit type="submit" isMailSent={isMailSent}>
        {handleSubmitIcon()}
      </Submit>
    </FormContainer>
  );
}

function useSubmitHandler(
  isMailSent: IsMailSent,
  setIsMailSent: Dispatch<IsMailSent>,
  bodyMessage: BodyMessage | undefined
) {
  const { YES, NO, SENDING, FAILED } = IsMailSent;

  useEffect(() => {
    if (isMailSent === NO) return;

    const sendMail = async () => {
      try {
        const response = await fetch(
          "https://mail-sender-yncz7sisiq-ew.a.run.app",
          {
            method: "POST",
            body: JSON.stringify(bodyMessage),
          }
        );

        if (response.ok) setIsMailSent(YES);
        else setIsMailSent(FAILED);
      } catch (err) {
        setIsMailSent(FAILED);
      }
    };

    if (isMailSent === SENDING) {
      sendMail();
      return;
    }

    setTimeout(() => {
      setIsMailSent(NO);
    }, 600000);
  }, [isMailSent]);
}
