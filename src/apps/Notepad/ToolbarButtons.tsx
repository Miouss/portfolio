import { useLangContext } from "../../hooks";
import { ToolbarButton as ToolbarButtonContainer } from "../../styles";
import { ToolbarTabs } from "./Toolbar";

interface ToolbarButtonsProps {
  currTabHovered: ToolbarTabs | undefined;
  changeDropDownMenuParent: (e: any, content: ToolbarTabs) => void;
  switchDropDownMenuParent: (e: any, content: ToolbarTabs) => void;
}

export function ToolbarButtons(props: ToolbarButtonsProps) {
  const Tabs = Object.values(ToolbarTabs);

  return (
    <>
      {Tabs.map((TAB) => (
        <ToolbarButton key={TAB} TAB={TAB} {...props} />
      ))}
    </>
  );
}

interface ToolbarButtonProps extends ToolbarButtonsProps {
  TAB: ToolbarTabs;
}

function ToolbarButton({
  currTabHovered,
  TAB,
  changeDropDownMenuParent,
  switchDropDownMenuParent,
}: ToolbarButtonProps) {
  const { lang } = useLangContext();

  return (
    <ToolbarButtonContainer
      active={currTabHovered === TAB}
      onClick={(e) => changeDropDownMenuParent(e, TAB)}
      onMouseEnter={(e) => switchDropDownMenuParent(e, TAB)}
    >
      {(lang.apps.aboutMe.toolbar as any)[TAB.toLowerCase()].name}
    </ToolbarButtonContainer>
  );
}
