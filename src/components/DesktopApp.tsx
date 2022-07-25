import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/DesktopApp.css";

type Props = {
  iconName: any;
  appName: string;
  setDisplayApp: (param: boolean) => void
};

function DesktopApp({ iconName, appName, setDisplayApp }: Props) {
  const iconClass = `desktop-app-${iconName}`;

  return (<>
    <div className={iconClass} onClick={() => setDisplayApp(true)}>
      <span>
        <FontAwesomeIcon icon={iconName} color="white" />
      </span>
      <div>{appName}</div>
    </div>
    </>
  );
}

export default DesktopApp;
