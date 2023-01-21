import CvPreviewAppContent from "./CvPreviewAppContent";

import WindowApp from "../WindowApp";

function CvPreviewApp() {
  return (
    <WindowApp
      appName="Aperçu CV"
      contentComponent={<CvPreviewAppContent />}
    />
  );
}

export default CvPreviewApp;
