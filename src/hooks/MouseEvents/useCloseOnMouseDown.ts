import { Dispatch, SetStateAction, useEffect } from "react";

export default function useCloseOnMouseDown(
  state: boolean | undefined,
  setState: Dispatch<SetStateAction<boolean | undefined>>
) {
  useEffect(() => {
    if (!state) return;

    const close = (e) => {
      e.stopImmediatePropagation();
      console.log("hook close on mousedown event");
      setState(false);
    };


    document.addEventListener("mousedown", close, {once : true});

    return () => document.removeEventListener("mousedown", close);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
}