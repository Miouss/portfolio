import { useEffect, useState } from "react";

export default function useMinimizedEffect(isMinimized: boolean) {
  const [display, setDisplay] = useState<string>("flex");

  useEffect(() => {
    if (isMinimized) {
      setDisplay("none");
    } else {
      setDisplay("flex");
    }
  }, [isMinimized]);

  return display;
}
