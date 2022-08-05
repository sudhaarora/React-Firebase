import "./datatable.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs, doc, deleteDoc, query, where  } from "firebase/firestore";

const Datatable = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const usersRef = collection(db, "users"); 
  
  useEffect(()=>{
    const fetchData = async()=> {
      let list = [];
      try{
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        list.push({id: doc.id, ...doc.data()});
      });
      setData(list);
    }catch(err){
      console.log(err)
    }
    }
    fetchData()
  },[])

  const handleSearch = async(e) => {
    e.preventDefault();
    let find = [];
    const q = query(collection(db, "users"), where("username", "==", search));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      find.push({id: doc.id, ...doc.data()});
    });
    setData(find);
  }

  const handleDelete = async(id) => {
    try{
      await deleteDoc(doc(db, "users", id));
    }catch(err){
      console.log(err)
    }
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <form onSubmit={handleSearch}>
        <div className="search">
        <input type="text" className="search" placeholder="Search by Name here.." onChange={(e)=>setSearch(e.target.value)} value={search} />
          <SearchOutlinedIcon />
        </div>
        </form>
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
