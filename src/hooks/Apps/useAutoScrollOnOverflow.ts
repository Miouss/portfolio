import { useEffect } from "react";

export default function useAutoScrollOnOverflow(
  containerRef: React.RefObject<HTMLTextAreaElement | HTMLDivElement>,
  commandHistory: string[],
  currentDir: string[]
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isOverflowing = container.scrollHeight > container.clientHeight;
    if (isOverflowing)
      container.scrollTop = container.scrollHeight - container.clientHeight;
  }, [commandHistory, currentDir]);
}
