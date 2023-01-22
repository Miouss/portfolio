import { useEffect, useState } from "react";
import { RootState } from "../redux";
import { useSelector } from "react-redux";

export default function useFocusEffect(appName: string) {
  const [zIndexValue, setZIndexValue] = useState<string>("1");

  const isFocused = useSelector((state: RootState) => {
    const app = state.apps.find((app) => app.name === appName);
    return app!.status.isFocused;
  });

  useEffect(() => {
    isFocused ? setZIndexValue("2") : setZIndexValue("1");
  }, [isFocused]);

  return zIndexValue;
}
