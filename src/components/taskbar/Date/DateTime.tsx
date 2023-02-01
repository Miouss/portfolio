import useFullDate from "../../../hooks/useFullDate";
import { FullDateBox, DateBox, TimeBox } from "./style";

function DateTime() {
  const fullDate = useFullDate();

  return (
    <FullDateBox>
      <TimeBox>{fullDate.time}</TimeBox>
      <DateBox>{fullDate.date}</DateBox>
    </FullDateBox>
  );
}

export default DateTime;
