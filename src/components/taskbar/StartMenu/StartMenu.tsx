import { StartMenuBox } from "./styled/StartMenu";
import { WindowsIcon } from "../../../assets/icons/iconsList";
import { useState } from "react";

export default function StartMenu() {
  const [color, setColor] = useState("white");

  return (
    <StartMenuBox
      onMouseEnter={() => setColor("dodgerblue")}
      onMouseLeave={() => setColor("white")}>
      <WindowsIcon color={color} />
    </StartMenuBox>
  );
}
