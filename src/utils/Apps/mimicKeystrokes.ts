import { delay } from "..";

export default async function mimicKeystrokes(
  txt: string,
  currentRef: HTMLElement,
  textRefKey: "value" | "textContent"
): Promise<void> {
  let stopKeyPressed = false;
  let rerunKeyPressed = false;

  const handleKeydown = (e: KeyboardEvent) => {
    e.preventDefault();
    if (e.key === "Escape") stopKeyPressed = true;
    if (e.key === "Rerun") rerunKeyPressed = true;
  };

  document.addEventListener("keydown", handleKeydown);

  await delay(15);

  if (!stopKeyPressed && !rerunKeyPressed) {
    if (txt[0] === "£") {
      const lastIndexFound = txt.indexOf("£", 2);
      const blockText = txt.slice(1, lastIndexFound);
      if (lastIndexFound) {
        txt = txt.slice(lastIndexFound);
      } else {
        txt = "";
      }

      (currentRef as any)[textRefKey] += blockText;
    } else {
      (currentRef as any)[textRefKey] += txt[0];
    }
  }

  document.removeEventListener("keydown", handleKeydown);

  if (stopKeyPressed) throw new Error("stop");
  if (rerunKeyPressed) throw new Error("rerun");

  if (txt.length > 1)
    return await mimicKeystrokes(txt.slice(1), currentRef, textRefKey);
}
