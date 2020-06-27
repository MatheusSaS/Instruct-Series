import React from "react";
//import logo from './logo.svg';
import "./css/props.css";
import "./css/App.css";

//Screen
import Header from "./screens/header";
import Sidebar from "./screens/sidebar";
import HomePage from "./screens/home";
import Rightbar from "./screens/rightbar";
import CoursePage from "./screens/course";
import DisciverPage from "./screens/discover";
import ArtigoPage from "./screens/artigo";

import { Route, NavLink, HashRouter } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = React.useState(getInitialMode);
  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);
  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const saveMode = JSON.parse(localStorage.getItem("dark"));
    const usePrefersDark = getPrefColorScheme();
    //if mode was sabed -> dark/light
    if (isReturningUser) return saveMode;
    //if preferrend color scheme is dark -> dark
    else if (usePrefersDark) return true;
    // otherwise -> light
    else return false;
  }
  function getPrefColorScheme() {
    if (!window.matchMedia) return;
    return window.matchMedia("(prefers-color-scheme : dark)").matches;
  }
  //<Rightbar />;

  return (
    <div className={darkMode ? "dark-mode App flex " : "ligth-Mode App flex "}>
      <HashRouter>
        <Sidebar />
        <div className="app-content">
          <Route exact path="/" component={HomePage} />
          <Route path="/course/:courseid" component={CoursePage} />
          <Route path="/artigo/:artigoid" component={ArtigoPage} />
          <Route path="/discover" component={DisciverPage} />
        </div>
        <Route exact path="/" component={Rightbar} />
        <div className="toggle-container">
          <label class="switch">
            <input
              type="checkbox"
              id="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode((prevMode) => !prevMode)}
            />
            <span class="slider round"></span>
          </label>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
