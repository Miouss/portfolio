import ProfilPicture from "../../../assets/miouss.png";
import LoginSessionBuilder from "./helper/LoginSessionBuilder";

export default function LoginSessionSamir(){
    const name = "Miouss";
    const profilPicture = ProfilPicture;
    return (
        <LoginSessionBuilder sessionName={name} profilPicture={profilPicture} />
    );
}