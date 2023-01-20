import delay from "../../../utils/delay";
import { AppStyle } from "../AppGrid";

export default async function simulateAppLoading(
  setAppStyle: React.Dispatch<React.SetStateAction<AppStyle>>
) {
  setAppStyle((appStyle) => ({ ...appStyle, cursor: "progress" }));
  await delay(300);
  setAppStyle((appStyle) => ({ ...appStyle, cursor: "default" }));
}
