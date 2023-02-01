import { Dispatch, SetStateAction, useEffect } from "react";

export default function useCloseOnClickAwayEffect(
  state: boolean,
  setState: Dispatch<SetStateAction<boolean>>
) {
  useEffect(() => {
    if (!state) return;

    const closeMenu = () => {
      setState(false);
    };

    document.addEventListener("click", closeMenu);
    document.addEventListener("contextmenu", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
      document.removeEventListener("contextmenu", closeMenu);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
}
