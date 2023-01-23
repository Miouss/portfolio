import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { AppIcon } from "../../apps/collection/Collection";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import {
  GridAppBadge,
  GridAppContainer,
  GridAppIcon,
  GridAppLabel,
} from "../styled/GridApp";

interface Props {
  shortcutName: string;
  gridArea: string;
}

export default function ShortcutApp({ shortcutName, gridArea }: Props) {
  const urlRedirect = useSelector(({ shortcuts }: RootState) => {
    const shortcut = shortcuts.find(
      (shortcut) => shortcut.name === shortcutName
    );
    if (shortcut) return shortcut.link;
  });


  return (
    <GridAppContainer
      style={{ gridArea }}
      onClick={() => window.open(urlRedirect!)}
    >
      <GridAppIcon style={{ fontSize: "4rem" }}>
        <AppIcon appName={shortcutName} />
      </GridAppIcon>
      <GridAppBadge className="desktop-app-shortcut">
        <ShortcutIcon fontSize="small" />
      </GridAppBadge>
      <GridAppLabel>{shortcutName}</GridAppLabel>
    </GridAppContainer>
  );
}
