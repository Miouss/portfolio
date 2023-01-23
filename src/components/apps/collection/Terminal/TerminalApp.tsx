import TerminalAppContent from "./TerminalAppContent";

import WindowApp from "../../AppWindow";

import "../../../../styles/TerminalApp.css";

function TerminalApp() {
  return (
    <WindowApp
      appName="terminal"
      contentComponent={<TerminalAppContent appName="terminal" />}
    />
  );
}

export default TerminalApp;
