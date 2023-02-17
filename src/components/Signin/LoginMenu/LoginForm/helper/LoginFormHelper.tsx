import { LoginFormBadge } from "../../../../../styles";

interface Props {
    profilPicture:string;
    sessionName: "Samir Ghabi" | "Miouss";
    children: JSX.Element;
}

export default function LoginFormHelper({profilPicture, sessionName, children} : Props) {
  return (
    <>
      <LoginFormBadge sessionName={sessionName}>
        <img src={`${profilPicture}`} alt={`Profil badge of ${sessionName}`} />
      </LoginFormBadge>
      {children}
    </>
  );
}
