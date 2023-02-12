export default function mimicWindowsTerminal(
  ref: React.MutableRefObject<HTMLElement | null>,
  txt: string | string[],
  withLineBreak: boolean = true
) {
  if (typeof txt === "string") {
    const blockTextContainer = document.createElement("span");
    blockTextContainer.textContent = txt;
    ref.current!.appendChild(blockTextContainer);

    const commandContainer = document.createElement("span");
    ref.current!.appendChild(commandContainer);

    return;
  }

  const blockTextContainer = document.createElement("span");
  const lineBreak = withLineBreak ? "\n\n" : "";
  blockTextContainer.textContent = lineBreak + txt.join("\\") + ">";
  ref.current!.appendChild(blockTextContainer);

  const commandContainer = document.createElement("span");
  ref.current!.appendChild(commandContainer);
}
