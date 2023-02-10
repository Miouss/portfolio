import delay from "../delay";

export default async function mimicTyping(
  ref: React.MutableRefObject<HTMLTextAreaElement | HTMLDivElement | null>,
  txt: string | string[],
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

  if (!ref.current)
    return document.removeEventListener("keydown", handleKeydown);

  // if the character is a £, then we want to make pop the block of text until the next £ instead of mimicking keystrokes
  if (!stopKeyPressed && !rerunKeyPressed) {
    if (typeof txt === "object") {
      const newLinesContainers = txt.map((line) => {
        if (line[0] === "$") {
          const title = line.slice(1, line.lastIndexOf("$"));
          const text =  line.slice(line.lastIndexOf("$") + 1);
          const container = document.createElement("div");
          const titleContainer = document.createElement("div");
          const textContainer = document.createElement("div");

          container.style.display = "flex";
          container.style.gap = "5px";
          container.style.marginLeft = "10px";
          console.log(line.charAt(-1));
          if(line[line.length - 1] !== '\n') container.style.marginBottom = "5px";
          titleContainer.style.minWidth = "fit-content";

          titleContainer.textContent = `- ${title} :`;
          textContainer.textContent = text;

          container.appendChild(titleContainer);
          container.appendChild(textContainer);

          return ref.current!.appendChild(container);
        }
        const newLineContainer = document.createElement("div");
        const textNode = document.createTextNode(line + "\n");
        newLineContainer.appendChild(textNode);

        return newLineContainer;
      });
      newLinesContainers.forEach((newLineContainer) => {
        ref.current!.appendChild(newLineContainer);
      });
      return;
    }
    if (txt[0] === "£") {
      const lastIndexFound = txt.indexOf("£", 2);
      const blockText = txt.slice(1, lastIndexFound);
      if (lastIndexFound) {
        txt = txt.slice(lastIndexFound);
      } else {
        txt = "";
      }
      await delay(100);
      if (stopKeyPressed || rerunKeyPressed)
        return document.removeEventListener("keydown", handleKeydown);
      ref.current![textRefKey] += blockText;
    } else {
      ref.current![textRefKey] += txt[0];
    }
  }

  document.removeEventListener("keydown", handleKeydown);

  if (stopKeyPressed) throw new Error("stop");
  if (rerunKeyPressed) throw new Error("rerun");

  //if (txt.length > 1) return await mimicTyping(ref, txt.slice(1), textRefKey);
}
