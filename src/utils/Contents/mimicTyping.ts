import delay from "../delay";

export default async function mimicTyping(
  ref: React.MutableRefObject<HTMLTextAreaElement | null>,
  txt: string
) {
  let stopKeyPressed = false;
  let rerunKeyPressed = false;

  const handleKeydown = (e) => {
    e.preventDefault();
    if (e.key === "Escape") stopKeyPressed = true;
    if (e.key === "Rerun") rerunKeyPressed = true;
  };

  document.addEventListener("keydown", handleKeydown);

  await delay(15);
  if (!ref.current) return;

  // if the character is a £, then we want to make pop the block of text until the next £ instead of mimicking keystrokes
  if (!stopKeyPressed && !rerunKeyPressed) {
    if (txt[0] === "£") {
      const lastIndexFound = txt.indexOf("£", 2);
      const blockText = txt.slice(1, lastIndexFound);
      if (lastIndexFound) {
        txt = txt.slice(lastIndexFound);
      } else {
        txt = "";
      }
      await delay(100);
      if (stopKeyPressed || rerunKeyPressed) return;
      ref.current!.value += blockText;
    } else {
      ref.current!.value += txt[0];
    }
  }

  document.removeEventListener("keydown", handleKeydown);

  if (stopKeyPressed) throw new Error("stop");
  if (rerunKeyPressed) throw new Error("rerun");

  if (txt.length > 1) return await mimicTyping(ref, txt.slice(1));
}
