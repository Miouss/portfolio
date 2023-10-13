import { useRef } from "react";
import { useLangContext } from "../../hooks";
import { DropDownMenuButton } from "../../styles";
import { DespawnAnimation } from "../../components/Applications/WindowMovableBarButtonGroup";

export function FileButton() {
  const { lang } = useLangContext();
  const ref = useRef<HTMLButtonElement | null>(null);

  const exit = () => {
    //@ts-ignore
    const windowRef = ref.current!.offsetParent!.offsetParent!.offsetParent!;

    windowRef.style.animation = DespawnAnimation;
  };

  return (
    <DropDownMenuButton ref={ref} onClick={exit}>
      {lang.apps.aboutMe.toolbar.file.action}
    </DropDownMenuButton>
  );
}
