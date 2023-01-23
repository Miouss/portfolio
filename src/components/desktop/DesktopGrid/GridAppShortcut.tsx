import { ShortcutDesktopIcon, getShortcutLink } from "../../apps/AppWindow/Window/Contents/list";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import {
  GridAppBadge,
  GridAppContainer,
  GridAppIcon,
  GridAppLabel,
} from "../styled/GridApp";

interface Props {
  shortcutName: string;
}

export default function ShortcutApp({ shortcutName }: Props) {
  const urlRedirect = getShortcutLink(shortcutName);

  return (
    <GridAppContainer
      onDoubleClick={() => window.open(urlRedirect!)}
    >
      <GridAppIcon style={{ fontSize: "4rem" }}>
        <ShortcutDesktopIcon name={shortcutName} />
      </GridAppIcon>
      <GridAppBadge className="desktop-app-shortcut">
        <ShortcutIcon fontSize="small" />
      </GridAppBadge>
      <GridAppLabel>{shortcutName}</GridAppLabel>
    </GridAppContainer>
  );
}
