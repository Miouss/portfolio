import ProfilPicture from "../../../../../assets/avatars/miouss.png";
import LoginSessionBuilder from "../helper/LoginSessionBuilder";

export default function SessionSamir(){
    const name = "Miouss";
    const profilPicture = ProfilPicture;
    return (
        <LoginSessionBuilder sessionName={name} profilPicture={profilPicture} />
    );
}