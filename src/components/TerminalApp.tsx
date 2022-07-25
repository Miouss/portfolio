import WindowBar from "./WindowBar";
import InteractiveTextArea from "./InteractiveTextArea";

import "../styles/TerminalApp.css"

function TerminalApp(){
    return(
        <div className="terminal-app">
            <WindowBar windowTitle="Terminal" />
            <InteractiveTextArea />
        </div>
    )
}

export default TerminalApp;