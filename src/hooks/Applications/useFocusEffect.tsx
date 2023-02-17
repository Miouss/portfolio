import { useEffect, useState } from "react";
import { useAppStatus } from "../";

export default function useFocusEffect(appName: string) {
  const [zIndexValue, setZIndexValue] = useState<"1" | "2">("1");

  const { isFocused } = useAppStatus(appName);

  useEffect(() => {
    isFocused ? setZIndexValue("2") : setZIndexValue("1");
  }, [isFocused]);

  return zIndexValue;
}
