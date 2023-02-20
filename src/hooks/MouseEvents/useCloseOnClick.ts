import { Dispatch, SetStateAction, useEffect } from "react";

export default function useCloseOnClick(
  refContainer: React.RefObject<HTMLDivElement>,
  state: boolean | undefined,
  setState: Dispatch<SetStateAction<boolean | undefined>>
) {
  useEffect(() => {
    if (!state || !refContainer.current) return;

    const close = () => {
      setState(false);
    };

    const refCurrent = refContainer.current;

    refCurrent.addEventListener("click", close, { once: true });

    return () => refCurrent.removeEventListener("click", close);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
}
