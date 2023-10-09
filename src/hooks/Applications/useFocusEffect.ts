import { useAppStatus } from "..";

export default function useFocusEffect(appName: string) {
  const { isFocused } = useAppStatus(appName);
  const zIndexValue = isFocused ? "2" : "1";

  return zIndexValue;
}
