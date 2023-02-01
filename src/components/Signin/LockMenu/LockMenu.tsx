import useFullDate from "../../../hooks/useFullDate";
import {
  LockMenuContainer,
  FullDateBox,
  TimeBox,
  DateBox,
  IconContainer,
  FullDateContainer,
  IconButton,
} from "./style";

import { LangIcon } from "../../../assets/icons/icons";

export default function LockMenu() {
  const fullDate = useFullDate();

  return (
    <LockMenuContainer>
      <FullDateContainer>
        <FullDateBox>
          <TimeBox>{fullDate.time}</TimeBox>
          <DateBox>{fullDate.details}</DateBox>
        </FullDateBox>
      </FullDateContainer>
      <IconContainer>
        <IconButton>
          <LangIcon />
        </IconButton>
      </IconContainer>
    </LockMenuContainer>
  );
}
