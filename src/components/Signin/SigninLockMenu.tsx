import { LockMenuContainer } from "../../styles";

import FullDateDisplay from "./SigninLockMenuFullDateDisplay";
import SwitchLangButton from "./SigninLockMenuSwitchLangButton";

export default function LockMenu() {
  return (
    <LockMenuContainer>
      <FullDateDisplay />
      <SwitchLangButton />
    </LockMenuContainer>
  );
}
