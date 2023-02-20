import { Dispatch, SetStateAction, useEffect } from "react";

export default function useCloseOnClickAway(
  state: boolean | undefined,
  setState: Dispatch<SetStateAction<boolean | undefined>>
) {
  useEffect(() => {
    if (!state) return;

    const close = () => {
      setState(false);
    };

    document.addEventListener("click", close, { once: true });

    return () => {
      document.removeEventListener("click", close);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
}
