import InteractiveTextArea from "./InteractiveTextArea";
import WindowApp from "./WindowApp";

import "../styles/TerminalApp.css";

type Props = {
  setCloseApp: (param: string | null) => void;
  componentKey: string;
  iconName: string;
  appName: string;
  setActiveApp: (param: string) => void;
};

function TerminalApp({ setCloseApp, componentKey, iconName, appName, setActiveApp }: Props) {
  return (
    <WindowApp
      windowTitle="Terminal"
      setCloseApp={setCloseApp}
      contentComponent={<InteractiveTextArea windowId={`window-app-${componentKey}`} />}
      componentKey={componentKey}
      setActiveApp={setActiveApp}
    />
  );
}

export default TerminalApp;
