import CvPreviewAppContent from "./CvPreviewAppContent";

import WindowApp from "./WindowApp";

import "../styles/CvPreviewApp.css";

function CvPreviewApp() {
  return (
    <WindowApp
      appName="Aperçu CV"
      contentComponent={<CvPreviewAppContent />}
    />
  );
}

export default CvPreviewApp;
