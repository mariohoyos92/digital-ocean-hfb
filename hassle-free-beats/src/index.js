import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { HashRouter } from "react-router-dom";

import "./index.css";
import App from "./components/App/App.jsx";
import registerServiceWorker from "./registerServiceWorker";

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "#96031a",
    primary2Color: "#616161",
    primary3Color: "rgba(0, 0, 0, 0.87)",
    accent1Color: "#616161",
    pickerHeaderColor: "#ffffff",
    alternateTextColor: "rgba(255, 255, 255, 0.87)",
    clockCircleColor: "rgba(0, 0, 0, 0.26)"
  }
});

ReactDOM.render(
  <div className="container">
    <HashRouter>
      <MuiThemeProvider muiTheme={muiTheme}>
        <App />
      </MuiThemeProvider>
    </HashRouter>
  </div>,
  document.getElementById("root")
);
registerServiceWorker();
