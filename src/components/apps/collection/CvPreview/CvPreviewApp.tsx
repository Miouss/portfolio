import CvPreviewAppContent from "./CvPreviewAppContent";

import WindowApp from "../../AppWindow";

function CvPreviewApp() {
  return (
    <WindowApp
      appName="Aperçu CV"
      contentComponent={<CvPreviewAppContent />}
    />
  );
}

export default CvPreviewApp;
