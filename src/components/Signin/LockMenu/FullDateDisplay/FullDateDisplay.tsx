import useFullDate from "../../../../hooks/useFullDate";
import { FullDateContainer, FullDateBox, Time, Date } from "./style";

export default function FullDateDisplay() {
  const fullDate = useFullDate();

  return (
    <FullDateContainer>
      <FullDateBox>
        <Time>{fullDate.time}</Time>
        <Date>{fullDate.details}</Date>
      </FullDateBox>
    </FullDateContainer>
  );
}
