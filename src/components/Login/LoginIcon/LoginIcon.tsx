import { LoginIconContainer, IconButton } from "./LoginIconStyle";
import { LangIcon, PowerIcon, WifiIcon } from "../../../assets/icons/icons";

export default function LoginIcon() {
  return (
    <LoginIconContainer>
      <IconButton>
        <LangIcon />
      </IconButton>
      <IconButton>
        <WifiIcon />
      </IconButton>
      <IconButton>
        <PowerIcon />
      </IconButton>
    </LoginIconContainer>
  );
}
