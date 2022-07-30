import TerminalAppContent from "./TerminalAppContent";

import WindowApp from "./WindowApp";

import "../styles/PDFViewerApp.css";

function PDFViewerApp() {
  return (
    <WindowApp
      appName="PDFViewer"
      contentComponent={<TerminalAppContent appName="PDFViewer" />}
    />
  );
}

export default PDFViewerApp;
