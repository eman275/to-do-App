import { render } from "react-dom";
import { MainProvider } from "./providers/MainProvider";
import { SmallTextProvider } from "./providers/SmallTextContext";
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


