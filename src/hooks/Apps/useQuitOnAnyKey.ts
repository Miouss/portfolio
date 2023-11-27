import { useEffect } from "react";
import { useAppDispatch, closeApp } from "../../redux";

export function useQuitOnAnyKey(
  ref: React.MutableRefObject<HTMLElement | null>,
  mode?: "welcome" | "notepad"
) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (mode !== "welcome") return;

    const eventCallback = () => dispatch(closeApp("Welcome"));
    let windowApp = ref.current?.offsetParent!;

    windowApp.addEventListener("keydown", eventCallback);

    return () => {
      windowApp.removeEventListener("keydown", eventCallback);
    };
  }, []);
}
