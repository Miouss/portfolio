import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";


interface Props {
    componentRelated: React.ReactElement;
    activeApp: string | null;
}

function DesktopTaskBarApp({ componentRelated, activeApp }: Props) {
    let [bgColor, setBgColor] = useState<string>("");
    let [lineWidth, setLineWidth] = useState<string>("");

  const handleClick = (windowsContainer: HTMLElement) => {
    if (document.activeElement !== windowsContainer) {
      windowsContainer.focus();
    }
  };

  useEffect(() => {
    if(activeApp === componentRelated.key){
        setBgColor("rgba(100, 100, 100, 0.6)");
        setLineWidth("45px");
    }else{
        setBgColor("black");
        setLineWidth("35px");   
    }
  }, [activeApp]);

  return (
    <div
      onClick={() =>
        handleClick(
          document.getElementById(
            `window-app-${componentRelated.props.componentKey}`
          ) as HTMLElement
        )
      }
      onMouseDown={(event) => event.preventDefault()}
    >
      <div style={{backgroundColor : bgColor}}>
        <FontAwesomeIcon icon={componentRelated.props.iconName} />
      </div>
      <div style={{width : lineWidth}} />
    </div>
  );
}

export default DesktopTaskBarApp;
