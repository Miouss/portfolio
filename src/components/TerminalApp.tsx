import InteractiveTextArea from "./InteractiveTextArea";
import WindowApp from "./WindowApp";

import "../styles/TerminalApp.css";

type Props = {
  setCloseApp: (param: string | null) => void;
  componentKey: string;
  iconName: string;
  appName: string;
};

function TerminalApp({ setCloseApp, componentKey, iconName, appName }: Props) {
  return (
    <WindowApp
      windowTitle="Terminal"
      setCloseApp={setCloseApp}
      contentComponent={<InteractiveTextArea />}
      componentKey={componentKey}
    />
  );
}

export default TerminalApp;
