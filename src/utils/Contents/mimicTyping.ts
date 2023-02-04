import delay from "../delay";

export default async function mimicTyping(
  ref: React.MutableRefObject<HTMLDivElement | null>,
  txt: string
) {
  await delay(15);
  if (!ref.current) return;

  if (txt[0] === "£") {
    const lastIndexFound = txt.indexOf("£", 2);
    const blockText = txt.slice(1, lastIndexFound);
    if (lastIndexFound) {
      txt = txt.slice(lastIndexFound);
    } else {
      txt = "";
    }
    await delay(100);
    ref.current!.textContent += blockText;
  } else {
    ref.current!.textContent += txt[0];
  }

  if (txt.length > 1) return mimicTyping(ref, txt.slice(1));
}
