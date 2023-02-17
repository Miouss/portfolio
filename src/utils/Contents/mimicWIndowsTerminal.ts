import { getFormattedText } from "../";

export default function mimicWindowsTerminal(
  ref: React.MutableRefObject<HTMLElement | null>,
  txt: string[],
  withLineBreak: boolean = true,
  welcomeMessage: boolean = false
) {
  if (welcomeMessage) {
    const blockTextContainer = document.createElement("span");
    blockTextContainer.textContent = getFormattedText(txt);
    ref.current!.appendChild(blockTextContainer);

    const commandContainer = document.createElement("span");
    ref.current!.appendChild(commandContainer);

    return;
  }
  const blockTextContainer = document.createElement("span");
  const currentDir = `${txt[0]}${txt.slice(1).join("\\")}`;
  const lineBreak = withLineBreak ? "\n\n" : "";
  blockTextContainer.textContent = `${lineBreak}${currentDir}>`;
  ref.current!.appendChild(blockTextContainer);

  const commandContainer = document.createElement("span");
  ref.current!.appendChild(commandContainer);
}
