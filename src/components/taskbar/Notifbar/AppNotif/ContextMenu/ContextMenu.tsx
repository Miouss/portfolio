import { ContextMenuButton, ContextMenuContainer } from "./style";

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
