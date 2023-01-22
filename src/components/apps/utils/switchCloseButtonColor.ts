import {Dispatch, SetStateAction} from "react";

export default function switchCloseButtonColor(eventType: string, setBgColor: Dispatch<SetStateAction<string>>, setCloseButtonColor: Dispatch<SetStateAction<string>>) {
  if (eventType === "mouseover") {
    setBgColor("red");
    setCloseButtonColor("white");
  } else {
    setBgColor("initial");
    setCloseButtonColor("initial");
  }
}
