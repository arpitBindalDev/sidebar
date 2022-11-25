import React, { useState } from "react";
import "./Sidebar.scss";
import { VscAccount } from "react-icons/vsc";
import { TiMessages } from "react-icons/ti";
import { MdSupervisorAccount } from "react-icons/md";
import { GoChevronRight } from "react-icons/go";
import { CgGames } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import { AiTwotoneStar } from "react-icons/ai";

const topNav = [
  {
    id: 1,
    icon: <MdSupervisorAccount />,
    name: "My Account",
    subNav: [],
  },
  {
    id: 2,
    icon: <CgGames />,
    name: "Games",
    subNav: ["popular", "new"],
  },
];

function Sidebar({ isSidebarOpen, setSideBarOpen }) {
  const [isLevelTwoOpen, setLevelTwoOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(false);
  return (
    <div className="Sidebar">
      <div className={isSidebarOpen ? "levelOne openLevelOne" : "levelOne"}>
        <div
          className="closeIcon"
          onClick={() => {
            setSideBarOpen(false);
            setLevelTwoOpen(false);
            setActiveTab(false);
          }}
        >
          <GrClose />
        </div>
        <div className="topContainer">
          <div className="titleContainer">
            <span className="icon">
              <VscAccount />
            </span>
            <p>Welcome Guest</p>
          </div>
          <div className="signUpContainer">
            <div className="borderButton">Sign Up</div>
          </div>
          <div className="chatBoxContainer">
            <div className="ChatBox">
              Chat To Us
              <span className="icon">
                <TiMessages />
              </span>
            </div>
          </div>
          <hr />
        </div>

        <div className="navContainer">
          <div className="topNav">
            {topNav.map((item, index) => (
              <div
                className={
                  item.id === activeTab && item.subNav?.length > 0
                    ? "navButton active"
                    : "navButton"
                }
                key={index}
                onClick={() => {
                  item.subNav?.length > 0
                    ? setLevelTwoOpen(true)
                    : setLevelTwoOpen(false);
                  setActiveTab(item.id);
                }}
              >
                <div className="textContainer">
                  <div className="icon">
                    <MdSupervisorAccount />
                  </div>
                  <div className="text"> My Account</div>
                </div>
                {item.subNav?.length > 0 && (
                  <div className="arrow">
                    <GoChevronRight />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="bottomNav"></div>
        </div>
      </div>

      <div
        className={
          isSidebarOpen && isLevelTwoOpen ? "levelTwo openLevelTwo" : "levelTwo"
        }
      >
        <div
          className="closeIcon"
          onClick={() => {
            setLevelTwoOpen(false);
            setActiveTab(false);
          }}
        >
          <GrClose />
        </div>

        <div className="TopButton">
          <div className="allGames"></div>
        </div>

        <div className="navContainer">
          <div className="navButton">
            <div className="internalContainer">
              <div className="icon">
                <AiTwotoneStar />
              </div>
              <div className="text">Popular</div>
            </div>
          </div>
          <div className="navButton">
            <div className="internalContainer">
              <div className="icon">
                <AiTwotoneStar />
              </div>
              <div className="text">Popular</div>
            </div>
          </div>
          <div className="navButton">
            <div className="internalContainer">
              <div className="icon">
                <AiTwotoneStar />
              </div>
              <div className="text">Popular</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
