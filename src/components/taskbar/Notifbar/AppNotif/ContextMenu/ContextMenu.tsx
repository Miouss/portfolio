import { UndefinedBoolean } from "../../../../../types/types";
import { ContextMenuButton, ContextMenuContainer } from "./style";

interface Props {
  visible: UndefinedBoolean;
  handleCloseApp: () => void;
}

export default function ContextMenu({ visible, handleCloseApp }: Props) {
  if (!visible) return null;

  return (
    <ContextMenuContainer>
      <ContextMenuButton onClick={handleCloseApp}>Quit application</ContextMenuButton>
    </ContextMenuContainer>
  );
}
