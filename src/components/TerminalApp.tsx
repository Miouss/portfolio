import WindowBar from "./WindowBar";
import InteractiveTextArea from "./InteractiveTextArea";

import "../styles/TerminalApp.css"

type Props = {
    setCloseApp : (param: boolean) => void
  }
  

function TerminalApp({setCloseApp} : Props){
    return(
        <div className="terminal-app">
            <WindowBar windowTitle="Terminal" setCloseApp={setCloseApp} />
            <InteractiveTextArea />
        </div>
    )
}

export default TerminalApp;