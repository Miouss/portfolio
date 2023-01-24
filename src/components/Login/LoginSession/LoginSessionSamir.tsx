import ProfilPicture from "../../../assets/profil.png";
import LoginSessionBuilder from "./helper/LoginSessionBuilder";

export default function LoginSessionSamir(){
    const name = "Samir";
    const profilPicture = ProfilPicture;
    return (
        <LoginSessionBuilder sessionName={name} profilPicture={profilPicture} />
    );
}