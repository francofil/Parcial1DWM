import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import "./App.css";
import MySwitch from "./components/MySwitch";
import { ThemeContext } from "./contexts";

function App() {
  const [themeSettings, setThemeSettings] = useState({
    mode: "light",
    switchMode: () => {
      setThemeSettings((prevState) => ({
        ...prevState,
        mode: prevState.mode === "light" ? "dark" : "light",
      }));
    },
  });
  return (
    <ThemeContext.Provider value={themeSettings}>
      <div className={"App-" + themeSettings.mode}>
        <Button />
        <MySwitch />
      </div>
    </ThemeContext.Provider>
  );
}

export default App
