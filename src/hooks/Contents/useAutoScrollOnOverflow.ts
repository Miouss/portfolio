import { useEffect } from "react";

export default function useAutoScrollOnOverflow(
  containerRef: React.RefObject<HTMLTextAreaElement>,
  previousTextLength: number
) {
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        block: "end",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [previousTextLength]);
}
