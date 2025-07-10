import React, { useState } from "react";
import SideBar, { SideBarItem, SideBarFooter } from "../SideBar";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboardIcon,
  CpuIcon,
  PackageIcon,
  RouteIcon,
  CodeIcon,
  Code2Icon,
  BotMessageSquare,
  ChartPie,
  Goal,
  MailIcon,
} from "lucide-react";
// import "./Practice.css";

function Practice() {
  const [activeItem, setActiveItem] = useState("Practice");
  const [expand, setExpand] = useState(true);
  const navigate = useNavigate();
  const handleEvent = (value) => {
    setActiveItem(value);
    console.log(value);
    navigate(`/${value.toLowerCase()}`);
  };
  return (
    <div className="dashboard-container">
      <SideBar expand={expand} setExpand={setExpand}>
        <SideBarItem
          icon={<LayoutDashboardIcon />}
          text="Dashboard"
          active={activeItem === "Dashboard"}
          onClick={(e) => handleEvent("Dashboard")}
        />
        <SideBarItem
          icon={<CpuIcon />}
          text="Practice"
          active={activeItem === "Practice"}
          onClick={(e) => handleEvent("Practice")}
        />
        <SideBarItem
          icon={<PackageIcon />}
          text="Contents"
          active={activeItem === "Contents"}
          onClick={(e) => handleEvent("Contents")}
        />
        <SideBarItem
          icon={<RouteIcon />}
          text="RoadMap"
          active={activeItem === "RoadMap"}
          onClick={(e) => handleEvent("RoadMap")}
        />
        <SideBarItem
          icon={<CodeIcon />}
          text="Assignments"
          active={activeItem === "Assignments"}
          onClick={() => handleEvent("Assignments")}
        />
        <SideBarItem
          icon={<Code2Icon />}
          text="Assessments"
          active={activeItem === "Assessments"}
          onClick={() => handleEvent("Assessments")}
        />
        <SideBarItem
          icon={<Goal />}
          text="Reports"
          active={activeItem === "Reports"}
          onClick={() => handleEvent("Reports")}
        />
        <div className="chat-buttons">
          <SideBarFooter
            icon={<BotMessageSquare size={34} color="#ffffff" />}
            text="Chat-Bot"
          />
          <SideBarFooter icon={<MailIcon />} text="Chat-Fac" />
        </div>
      </SideBar>
    </div>
  );
}

export default Practice;
