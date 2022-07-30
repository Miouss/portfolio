import { useEffect, useState } from "react";
import { delay } from "../assets/usefulFunction";


function DateTime() {
  let [date, setDate] = useState<Date>(new Date());

  let updatedDate = {
    time: `${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`,
    date: `${date.getDate().toString().padStart(2, "0")}/${date
      .getMonth()
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`,
  };

  useEffect(() => {
    async function updateDate(){
      await delay(1000);

      setDate(new Date());
    }

    updateDate();
  }, [date]);

  return ( 
    <>
      <div>{updatedDate.time}</div>
      <div>{updatedDate.date}</div>
    </>
  );
}

export default DateTime;