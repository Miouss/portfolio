import { useEffect, useState } from "react";

export default function useMinimizedEffect(isMinimized: boolean) {
  const [display, setDisplay] = useState<string>("flex");

  useEffect(() => setDisplay(isMinimized ? "none" : "flex"), [isMinimized]);

  return display;
}
