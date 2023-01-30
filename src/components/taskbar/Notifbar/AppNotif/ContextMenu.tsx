import { ContextMenuButton, ContextMenuContainer } from "./AppNotifStyled";

interface Props {
  isOpen: boolean;
  handleCloseApp: () => void;
}

export default function ContextMenu({ isOpen, handleCloseApp }: Props) {
  if (!isOpen) return null;

  return (
    <ContextMenuContainer>
      <ContextMenuButton onClick={handleCloseApp}>Quit application</ContextMenuButton>
    </ContextMenuContainer>
  );
}
