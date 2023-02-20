import { useUpdatedDate } from "../../hooks";
import { DateBox, Date, Time } from "../../styles";

function DateTime() {
  const fullDate = useUpdatedDate();

  return (
    <DateBox>
      <Time>{fullDate.time}</Time>
      <Date>{fullDate.date}</Date>
    </DateBox>
  );
}

export default DateTime;
