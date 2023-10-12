import { useEffect, useState } from "react";
import { delay } from "../../utils";
import { useLangContext } from "..";

export default function useUpdatedDate() {
  const [date, setDate] = useState<Date>(new Date());
  const { langState } = useLangContext();
  const localeDate = langState === "eng" ? "en-US" : "fr-FR";

  const [month, weekDay] = new Intl.DateTimeFormat(localeDate, {
    weekday: "long",
    month: "long",
  })
    .format(date)
    .split(" ");

  const day = date.toLocaleString(localeDate, { day: "numeric" });

  const maxTwoDigits = (num: number) => num.toString().padStart(2, "0");

  const dateTime = {
    h: maxTwoDigits(date.getHours()),
    m: maxTwoDigits(date.getMinutes()),
  };

  const dateCalendar = {
    d: maxTwoDigits(date.getDate()),
    m: maxTwoDigits(date.getMonth() + 1),
    y: date.getFullYear(),
  };

  const updatedFullDate = {
    time: `${dateTime.h}:${dateTime.m}`,
    date: `${dateCalendar.d}/${dateCalendar.m}/${dateCalendar.y}`,
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
