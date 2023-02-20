import { useUpdatedDate } from "../../hooks";
import { FullDateContainer, FullDateBox, FullTime, FullDate } from "../../styles";

export default function FullDateDisplay() {
  const date = useUpdatedDate();

  return (
    <FullDateContainer>
      <FullDateBox>
        <FullTime>{date.time}</FullTime>
        <FullDate>{date.details}</FullDate>
      </FullDateBox>
    </FullDateContainer>
  );
}
