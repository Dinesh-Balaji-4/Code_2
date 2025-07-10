import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar, { SideBarFooter, SideBarItem } from "../SideBar";
import {
  LayoutDashboardIcon,
  CpuIcon,
  PackageIcon,
  RouteIcon,
  CodeIcon,
  Code2Icon,
  BotMessageSquare,
  Goal,
  MailIcon,
} from "lucide-react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import "./Dashboard.css";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const tasks = {
  total: 20,
  completed: 13,
  progress: 4,
  pending: 3,
  upcoming: {
    title: "Docker Assessment",
    deadline: "July 7th",
  },
};

const TaskPieChart = () => {
  const data = {
    labels: ["Completed", "In Progress", "Pending"],
    datasets: [
      {
        data: [tasks.completed, tasks.progress, tasks.pending],
        backgroundColor: ["#b99eff", "#dcceff", "#fedfff"],
        borderColor: ["#fff", "#fff", "#fff"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    width: 200,
    height: 150,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Task Distribution",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.raw || 0;
            return `${label}: ${value} tasks`;
          },
        },
      },
    },
  };

  return (
    <div className="task-chart-container">
      <Doughnut data={data} options={options} />
    </div>
  );
};

const WeeklyBarChart = () => {
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Assignments Completed",
        data: [2, 3, 4, 3],
        backgroundColor: "rgba(139, 93, 255, 0.6)",
      },
      {
        label: "Assessments Completed",
        data: [1, 2, 2, 3],
        backgroundColor: "rgba(139, 93, 255, 0.3)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Weekly Progress Report",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Count",
        },
      },
    },
  };

  return (
    <div className="task-chart-container pie">
      <Bar data={data} options={options} />
    </div>
  );
};

function Dashboard() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const user = { username: "DB" };
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
      <main className={`dashboard-content ${expand ? "" : "collapsed"}`}>
        <div className="welcome-card">
          <h1 className="welcome-title">Welcome, {user.username} !!</h1>
          <p className="welcome-subtitle">Begin your DevSecOps journey here!</p>
        </div>

        <div className="dashboard-cards">
          <div className="card">
            <h3 className="card-title">Progress Summary</h3>
            <p>Total Tasks: {tasks.total}</p>
            <p>Completed: {tasks.completed}</p>
            <p>In Progress: {tasks.progress}</p>
            <p>Pending: {tasks.pending}</p>
          </div>

          <div className="card">
            <h3 className="card-title">Learning Tips</h3>
            <p>
              "Automation is to DevSecOps what oxygen is to life – essential."
            </p>
          </div>

          <div className="card">
            <h3 className="card-title">Upcoming Deadline</h3>
            <p>
              {tasks.upcoming.title} : Due on {tasks.upcoming.deadline}
            </p>
          </div>
        </div>
        <div className="dashboard-cards">
          <div className="card">
            <h2 className="card-title">Your Learning Progress</h2>
            <TaskPieChart />
          </div>
          <div className="card">
            <h2 className="card-title">
              Your Assignment / Assessment Progress
            </h2>
            <WeeklyBarChart />
          </div>
        </div>
        <footer className="dashboard-footer">
          <p>&copy; {new Date().getFullYear()} DevSecOps Learning Platform</p>
        </footer>
      </main>
    </div>
  );
}

export default Dashboard;
