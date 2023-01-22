import { useEffect, useState } from "react";
<<<<<<<< HEAD:src/hooks/useFocusEffect.tsx
import { RootState } from "../redux";
========
import { RootState } from "../../redux";
>>>>>>>> 3dc54207ff97cc63f972d86421994f825440a827:src/components/hooks/useFocusEffect.tsx
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
