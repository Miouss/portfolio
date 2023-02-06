export default function clearAll(
  refContainer: React.RefObject<HTMLTextAreaElement>,
) {
  if (refContainer.current)
    refContainer.current.value = "";
}
