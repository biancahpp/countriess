import { useState } from "react";
import { FiSun, FiMoon } from 'react-icons/fi';

export default function Header() {

  const [ mode, setMode ] = useState(false);
  const [ modeIcon, setModeIcon ] = useState<any>('moon');

  function changeMode() {

    if (!mode) {
      document.documentElement.style.setProperty('--font-color', 'var(--font-dark)');
      document.documentElement.style.setProperty('--background', 'var(--background-dark)');
      document.documentElement.style.setProperty('--component-color', 'var(--component-dark)');
      
      setMode(true);
      setModeIcon('sun');
    } else {
      document.documentElement.style.setProperty('--font-color', 'var(--font-light)');
      document.documentElement.style.setProperty('--background', 'var(--background-light)');
      document.documentElement.style.setProperty('--component-color', 'var(--component-light)');
    
      setMode(false);
      setModeIcon('moon');
    }
  }


  return (
    <div className="Header">
      <h1>Where in the world?</h1>
      <a onClick={() => changeMode()}>{modeIcon === 'moon' ? <FiMoon /> : <FiSun />} {!mode ? <span>Dark Mode</span> : <span>Light Mode</span>}</a>
    </div>
  )
}
