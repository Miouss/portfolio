import delay from "../delay";

export default async function mimicTyping(
  ref: React.MutableRefObject<HTMLTextAreaElement | HTMLDivElement | null>,
  txt: string | string[],
  textRefKey?: "value" | "textContent"
) {
  if (typeof txt === "object") {
    for (let i = 0; i < txt.length; i++) {
      const line = txt[i];

      if (line[0] === "$") {
        const title = line.slice(1, line.lastIndexOf("$"));
        const text = line.slice(line.lastIndexOf("$") + 1);
        const container = document.createElement("span");
        const titleContainer = document.createElement("span");
        const textContainer = document.createElement("span");

        container.style.display = "inline-flex";
        container.style.gap = "5px";
        container.style.marginLeft = "10px";

        if (line[line.length - 1] !== "\n")
          container.style.marginBottom = "5px";
        titleContainer.style.minWidth = "fit-content";

        container.appendChild(titleContainer);
        container.appendChild(textContainer);

        ref.current!.appendChild(container);

        await mimicKeystrokes(`- ${title} :`, titleContainer, "textContent");
        await mimicKeystrokes(text, textContainer, "textContent");
        ref.current!.appendChild(document.createElement("br"));
      } else {
        const newLineContainer = document.createElement("span");
        ref.current!.appendChild(newLineContainer);
        await mimicKeystrokes(line + "\n", newLineContainer, "textContent");
      }
    }
  } else {
    await mimicKeystrokes(txt, ref.current!, textRefKey!);
  }

  //if (txt.length > 1) return await mimicTyping(ref, txt.slice(1), textRefKey);
}

async function mimicKeystrokes(
  txt: string,
  currentRef: HTMLElement,
  textRefKey: "value" | "textContent"
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

  if (!stopKeyPressed && !rerunKeyPressed) {
    if (txt[0] === "£") {
      const lastIndexFound = txt.indexOf("£", 2);
      const blockText = txt.slice(1, lastIndexFound);
      if (lastIndexFound) {
        txt = txt.slice(lastIndexFound);
      } else {
        txt = "";
      }

      currentRef[textRefKey] += blockText;
    } else {
      currentRef[textRefKey] += txt[0];
    }
  }

  document.removeEventListener("keydown", handleKeydown);

  if (stopKeyPressed) throw new Error("stop");
  if (rerunKeyPressed) throw new Error("rerun");

  if (txt.length > 1)
    return await mimicKeystrokes(txt.slice(1), currentRef, textRefKey);
}
