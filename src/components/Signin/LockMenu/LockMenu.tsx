import { LockMenuContainer } from "../../../styles";

import FullDateDisplay from "./FullDateDisplay/FullDateDisplay";
import SwitchLangButton from "./SwitchLangButton/SwitchLangButton";

export default function LockMenu() {
  return (
    <LockMenuContainer>
      <FullDateDisplay />
      <SwitchLangButton />
    </LockMenuContainer>
  );
}
