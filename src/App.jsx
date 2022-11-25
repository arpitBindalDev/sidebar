import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  const [isSidebarOpen, setSideBarOpen] = useState(false);

  return (
    <div className="App">
      <div className="header">
        <span className="button">
          <GiHamburgerMenu
            onClick={() => {
              isSidebarOpen ? setSideBarOpen(false) : setSideBarOpen(true);
            }}
          />
        </span>
      </div>
      <div className="sideBarContainer">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setSideBarOpen={setSideBarOpen}
        />
      </div>
    </div>
  );
}

export default App;
