import { useEffect, useState } from "react";
import delay from "../utils/delay";
import useLangContext from "./useLangContext";

export default function useFullDate() {
  const [date, setDate] = useState<Date>(new Date());
  const { lang } = useLangContext();
  const localeDate = lang === "eng" ? "en-US" : "fr-FR";
  const weekDay = new Intl.DateTimeFormat(localeDate, {
    weekday: "long",
  }).format(date);
  const month = new Intl.DateTimeFormat(localeDate, { month: "long" }).format(
    date
  );
  const day = date.toLocaleString(localeDate, { day: "numeric" });

  const updatedFullDate = {
    time: `${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`,
    date: `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`,
    details: `${weekDay}, ${day} ${month}`,
  };

  useEffect(() => {
    async function updateFullDate() {
      await delay(1000);

      setDate(new Date());
    }

    updateFullDate();
  }, [date]);

  return updatedFullDate;
}
