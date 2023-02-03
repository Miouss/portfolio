export type MailSentProps = boolean | undefined | "sending";

export interface BodyMessageProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}
