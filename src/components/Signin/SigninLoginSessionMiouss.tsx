import { Miouss } from "../../assets";
import LoginSessionHelper from "./SigninLoginSessionHelper";

export default function SessionSamir() {
  const name = "Miouss";
  const profilPicture = Miouss;
  return (
    <LoginSessionHelper sessionName={name} profilPicture={profilPicture} />
  );
}
