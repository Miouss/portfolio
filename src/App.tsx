import Desktop from "./components/Desktop";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faWindows } from "@fortawesome/free-brands-svg-icons";

import {
  faTerminal,
  faXmark,
  faWindowMinimize,
  faMaximize,
  faCode
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";

function App() {
  library.add(
    faWindows,
    faTerminal,
    faXmark,
    faWindowMinimize,
    faMaximize,
    faCode
  );

  return <Desktop />;
}

export default App;
