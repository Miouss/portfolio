import PDFViewerAppContent from "./PDFViewerAppContent";

import WindowApp from "./WindowApp";

import "../styles/PDFViewerApp.css";

function PDFViewerApp() {
  return (
    <WindowApp
      appName="PDFViewer"
      contentComponent={<PDFViewerAppContent appName="PDFViewer" />}
    />
  );
}

export default PDFViewerApp;
