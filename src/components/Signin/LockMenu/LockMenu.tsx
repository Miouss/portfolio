import { LockMenuContainer } from "./style";

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
