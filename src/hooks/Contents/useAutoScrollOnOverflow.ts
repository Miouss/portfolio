import { useEffect } from "react";

export default function useAutoScrollOnOverflow(
  containerRef: React.RefObject<HTMLTextAreaElement | HTMLDivElement>,
  previousTextLength: number
) {
  useEffect(() => {
    if (containerRef.current) {
      console.log("scrolling");
      containerRef.current.scrollIntoView({
        block: "end",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [previousTextLength]);
}
