import { Samir } from "../../../../../assets";
import LoginSessionHelper from "../helper/LoginSessionHelper";

export default function SessionSamir() {
  const name = "Samir";
  const profilPicture = Samir;
  return (
    <LoginSessionHelper sessionName={name} profilPicture={profilPicture} />
  );
}
