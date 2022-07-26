import InteractiveTextArea from "./InteractiveTextArea";
import WindowApp from "./WindowApp";

import "../styles/TerminalApp.css"

type Props = {
    setCloseApp : (param: boolean) => void;
  }
  

function TerminalApp({setCloseApp} : Props){
    return(
        <WindowApp windowTitle="Terminal" setCloseApp={setCloseApp} contentComponent={<InteractiveTextArea />} />
    )
}

export default TerminalApp;