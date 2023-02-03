export default function simpleKeyHandler(
  event: KeyboardEvent,
  ref: React.MutableRefObject<HTMLDivElement | null>
) {
  event.preventDefault();

  if (event.key.length !== 1) {
    switch (event.key) {
      case "Enter":
        ref.current!.textContent! += "\n";
        return;
      case "Backspace":
        ref.current!.textContent! = ref.current!.textContent!.slice(0, -1);
        return;
    }
  } else {
    switch (event.key) {
      default:
        ref.current!.textContent! += event.key;
    }
  }
}
