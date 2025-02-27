"use client";

import { useState } from "react";
import component from "./../../../public/assets/images/component.svg";
import member from "./../../../public/assets/images/member.svg";
import IconBtn from "./IconBtn";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("members");

  const handleToggle = () => {
    // setActiveTab(activeTab === "components" ? "members" : "components");
    if(activeTab === "components") {
      setActiveTab("members");
    }
  };

  return (
    <div className="center">
      {/* Tab Switcher */}
      <div className="tab-switcher center" onClick={handleToggle}>
        {/* Background Slider for Active Tab */}
        <div className={`slider ${activeTab}`} />

        {/* Tabs */}
        <div className="tab">
          <IconBtn icon={component} txt="Components" />
        </div>
        <div className="tab">
          <IconBtn icon={member} txt="Members" />
        </div>
      </div>

      {/* Styled JSX */}
      <style jsx>{`
        /* Toggle Switcher */
        .tab-switcher {
          position: relative;
          display: flex;
          align-items: center;
          width: 650px;
          height: 48px;
          gap: 10px;
          padding: 14px 24px;
          border-radius: 100px;
          background: #f3f5f2;
          cursor: pointer;
        }

        /* Individual Tabs */
        .tab {
          width: 328px;
          height: 48px;
          border-radius: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          position: relative;
          z-index: 2; /* Ensure icons are above the slider */
        }

        /* Background Slider (Only Moves Under Active Tab) */
        .slider {
          position: absolute;
          top: 0;
          left: 0;
          width: 328px;
          height: 100%;
          background: #FFF; /* Active tab background */
          border-radius: 100px;
          transition: transform 0.3s ease-in-out;
          z-index: 1; /* Behind the icons */
        }

        .slider.members {
          transform: translateX(330px); /* Moves right for Members */
        }

        .slider.components {
          transform: translateX(0); /* Stays at left for Components */
        }
      `}</style>
    </div>
  );
}
