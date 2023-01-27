import GitHub from "@mui/icons-material/GitHub";
import { LoginIconContainer, IconButton } from "./LoginIconStyle";

export default function LoginIcon() {
  return (
    <LoginIconContainer>
      <IconButton>
        <GitHub style={{color: "white"}} />
      </IconButton>
      <IconButton>
        <GitHub style={{color: "white"}} />
      </IconButton>
    </LoginIconContainer>
  );
}
