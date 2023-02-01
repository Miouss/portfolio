import ProfilPicture from "../../../../../assets/avatars/samir.png";
import LoginSessionBuilder from "../helper/LoginSessionBuilder";

export default function SessionSamir(){
    const name = "Samir";
    const profilPicture = ProfilPicture;
    return (
        <LoginSessionBuilder sessionName={name} profilPicture={profilPicture} />
    );
}