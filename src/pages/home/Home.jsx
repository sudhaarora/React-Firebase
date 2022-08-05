import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="dashboardContainer">
          <h3>{t("dashboard_page")}</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
