import { useEffect } from "react";

export default function useAutoScrollOnOverflow(
  containerRef: React.RefObject<HTMLTextAreaElement | HTMLDivElement>,
  commandHistory: string[]
) {
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        block: "end",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commandHistory]);
}
