import { render } from "react-dom";
import { MainProvider } from "./context/MainContext";
import { SmallTextProvider } from "./context/SmallTextContext";
import App from "./App";
import "./styles.css";

render(
  <MainProvider>
        <SmallTextProvider>
            <App />
        </SmallTextProvider>
  </MainProvider> ,
  document.getElementById("root")
);


