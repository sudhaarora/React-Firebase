import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const navitage = useNavigate();
  const { t } = useTranslation();
  const handleLogout = () => {
    window.localStorage.clear();
    navitage("/login");
  }
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">{t("admin")}</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">{t("main")}</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>{t("dashboard")}</span>
          </li>
          </Link>
          <p className="title">{t("dashboard_list")}</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>{t("users")}</span>
            </li>
          </Link>
          <p className="title">{t("user")}</p>
          <li>
            <ExitToAppIcon className="icon" />
            <span onClick={handleLogout}>{t("logout")}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
