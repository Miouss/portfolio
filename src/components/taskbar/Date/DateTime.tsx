import { useEffect, useState } from "react";
import { DateTimeBox } from "../StartMenu/styled/DateTime";
import { Box } from "@mui/material";
import delay from "../../../utils/delay";

function DateTime() {
  const [date, setDate] = useState<Date>(new Date());

  const updatedDate = {
    time: `${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`,
    date: `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`,
  };

  useEffect(() => {
    async function updateDate() {
      await delay(1000);

      setDate(new Date());
    }

    updateDate();
  }, [date]);

  return (
    <DateTimeBox>
      <Box>{updatedDate.time}</Box>
      <Box>{updatedDate.date}</Box>
    </DateTimeBox>
  );
}

export default DateTime;
