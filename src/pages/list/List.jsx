import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Datatable from "../../components/datatable/Datatable"
import Navbar from "../../components/navbar/Navbar"

const List = () => {

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">

      <Navbar />
      <div className="section">
      <Datatable/>
        </div>
        
      </div>
    </div>
  )
}

export default List