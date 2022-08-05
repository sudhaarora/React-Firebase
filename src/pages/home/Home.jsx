import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <h3>Dashboard page</h3>
      </div>
    </div>
  );
};

export default Home;
