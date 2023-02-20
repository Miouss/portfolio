import { UndefinedBoolean } from "../../types";
import {
  ContextMenuButton,
  ContextMenuContainer,
} from "../../styles";

interface Props {
  visible: UndefinedBoolean;
  handleCloseApp: () => void;
}

export default function ContextMenu({ visible, handleCloseApp }: Props) {
  if (!visible) return null;

  return (
    <ContextMenuContainer>
      <ContextMenuButton onClick={handleCloseApp}>
        Quit application
      </ContextMenuButton>
    </ContextMenuContainer>
  );
}
