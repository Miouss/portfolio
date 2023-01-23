import { StartMenuBox } from "../styled/StartMenu";
import WindowsLogo from "../../../assets/WindowsLogo";
import { useState } from "react";

export default function StartMenu() {
  const [color, setColor] = useState("white");

  return (
    <StartMenuBox
      onMouseEnter={() => setColor("dodgerblue")}
      onMouseLeave={() => setColor("white")}>
      <WindowsLogo color={color} />
    </StartMenuBox>
  );
}
