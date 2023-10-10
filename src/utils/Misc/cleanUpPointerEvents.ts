export function cleanUpPointerEvents() {
  document.onpointermove = () => false;
  document.onpointerup = () => false;
}
