import { useEffect } from "react";

export default function useAutoScrollOnOverflow(
  containerRef: React.RefObject<HTMLTextAreaElement | HTMLDivElement>,
  commandHistory: string[],
  currentDir: string[]
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollHeight, clientHeight } = container;

    const isOverflowing = scrollHeight > clientHeight;
    if (isOverflowing) container.scrollTop = scrollHeight - clientHeight;
  }, [commandHistory, currentDir]);
}
