import {
  pointerEnterStyle,
  pointerLeaveStyle,
  pointerDownStyle,
} from "../../custom/styles/appStyle";

import { AppStyle } from "../AppGrid";

export default function handlePointerEvent(
  event: React.PointerEvent | React.MouseEvent,
  setAppStyle: React.Dispatch<React.SetStateAction<AppStyle>>
) {
  if (event.type === "pointerenter") {
    setAppStyle(pointerEnterStyle);
  } else if (event.type === "pointerleave") {
    setAppStyle(pointerLeaveStyle);
  } else {
    setAppStyle(pointerDownStyle);
  }
}
