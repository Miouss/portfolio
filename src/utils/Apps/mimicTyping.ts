import { mimicKeystrokes } from "..";

export default async function mimicTyping(
  ref: React.MutableRefObject<HTMLTextAreaElement | HTMLDivElement | null>,
  txt: string | string[]
) {
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

      if (line[line.length - 1] !== "\n") container.style.marginBottom = "5px";
      titleContainer.style.minWidth = "fit-content";

      container.appendChild(titleContainer);
      container.appendChild(textContainer);

      ref.current && ref.current!.appendChild(container);

      await mimicKeystrokes(`- ${title} :`, titleContainer, "textContent");
      await mimicKeystrokes(text, textContainer, "textContent");
      ref.current && ref.current.appendChild(document.createElement("br"));
    } else {
      const newLineContainer = document.createElement("span");
      ref.current && ref.current!.appendChild(newLineContainer);
      await mimicKeystrokes(line + "\n", newLineContainer, "textContent");
    }
  }
}
