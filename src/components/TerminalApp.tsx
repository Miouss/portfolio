import TerminalAppContent from "./TerminalAppContent";
import WindowApp from "./WindowApp";


import "../styles/TerminalApp.css";

type Props = {
  setCloseApp: (param: string | null) => void;
  componentKey: string;
  iconName: string;
  appName: string;
  setActiveApp: (param: string) => void;
  appIcon: React.ReactElement
};

function TerminalApp({ setCloseApp, componentKey, iconName, appName, setActiveApp, appIcon }: Props) {
  return (
    <WindowApp
      windowTitle="Terminal"
      setCloseApp={setCloseApp}
      contentComponent={<TerminalAppContent windowId={`window-app-${componentKey}`} />}
      componentKey={componentKey}
      setActiveApp={setActiveApp}
      appIcon={appIcon}
    />
  );
}

export default TerminalApp;
