export default function clearAll(
  refContainer: React.RefObject<HTMLTextAreaElement | HTMLDivElement>
) {
  if (refContainer.current) {
    if (refContainer.current.tagName === "DIV") {
      refContainer.current.textContent = "";
      refContainer.current.innerHTML = "";
    }
    if (refContainer.current.tagName === "TEXTAREA") {
      (refContainer.current as HTMLTextAreaElement).value = "";
    }
  }
}
