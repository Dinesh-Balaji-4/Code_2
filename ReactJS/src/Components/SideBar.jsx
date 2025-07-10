import { createContext, useContext, useMemo } from "react";
import {
  ChevronFirst,
  ChevronLast,
  GpuIcon,
  UserCircle2Icon,
  MoreVertical,
} from "lucide-react";
import "./SideBar.css";
import PropTypes from "prop-types";
import { toast, ToastContainer } from "react-toastify";

const SideBarContext = createContext();

function SideBar({ expand, setExpand, children }) {
  const user = { name: "DB", email: "db@tcs.com" };
  const contextValue = useMemo(() => ({ expand }), [expand]);

  return (
    <aside className={`sidebar ${expand ? "expanded" : "collapsed"}`}>
      <nav className="sidebar-nav">
        <div className="sidebar-header">
          <GpuIcon className="gpu-icon" />
          {expand && <h2 className="sidebar-title">{"<Code_2/>"}</h2>}
          <button onClick={() => setExpand(!expand)} className="sidebar-toggle">
            {expand ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SideBarContext.Provider value={contextValue}>
          <ul className="sidebar-items">{children}</ul>
        </SideBarContext.Provider>

        <div className="sidebar-footer">
          <UserCircle2Icon />
          {expand && (
            <div className="user-details">
              <h4 className="user-name">{user.name}</h4>
              <span className="user-email">{user.email}</span>
            </div>
          )}
          {expand && (
            <button onClick={() => toast.info("Details clicked!")}>
              <MoreVertical size={20} />
            </button>
          )}
        </div>
      </nav>
      <ToastContainer />
    </aside>
  );
}

export function SideBarItem({ icon, text, active, onClick }) {
  const { expand } = useContext(SideBarContext);

  return (
    <li className={`sidebar-item ${active ? "active" : ""}`}>
      <button
        className="sidebar-item-btn"
        onClick={onClick}
        title={!expand ? text : ""}
        aria-current={active ? "page" : undefined}
        type="button"
      >
        {icon}
        {expand ? (
          <span>{text}</span>
        ) : (
          <span className="item-tooltip">{text}</span>
        )}
      </button>
    </li>
  );
}

export function SideBarFooter({ icon, text, onClick }) {
  const { expand } = useContext(SideBarContext);

  return (
    <li className="sidebar-footer-item">
      <button
        onClick={onClick}
        title={!expand ? text : ""}
        className="sidebar-footer-btn"
        type="button"
      >
        {icon}
        {expand ? (
          <span>{text}</span>
        ) : (
          <span className="item-tooltip">{text}</span>
        )}
      </button>
    </li>
  );
}
SideBar.propTypes = {
  children: PropTypes.node,
  expand: PropTypes.bool.isRequired,
  setExpand: PropTypes.func.isRequired,
};

SideBarItem.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};
SideBarFooter.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default SideBar;
