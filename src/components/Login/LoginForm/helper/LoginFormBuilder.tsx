import { LoginFormBadge } from "./style";

interface Props {
    profilPicture:string;
    sessionName: string;
    children: JSX.Element;
}

export default function LoginFormBuilder({profilPicture, sessionName, children} : Props) {
  return (
    <>
      <LoginFormBadge>
        <img src={`${profilPicture}`} alt={`Profil badge of ${sessionName}`} />
      </LoginFormBadge>
      {children}
    </>
  );
}
