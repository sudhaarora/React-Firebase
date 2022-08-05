import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const [lat, setLat]= useState(0);
  const [long, setLong] = useState(0);
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
   setLat(position.coords.latitude);
   setLong(position.coords.longitude);
    })
  },[])
  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({...data, [id]:value})
  }
  
const handleAdd = async(e) => {
  e.preventDefault();
  try{
    const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
     await setDoc(doc(db, "users", res.user.uid), {
    ...data,
    Address: {
      _lat: lat,
      _log: long,
    },
    timeStamp: serverTimestamp()
  });
  navigate(-1)
}catch(err){
  console.log(err);
}
}
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleAdd}>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={handleInput} />
                </div>
              ))}
              <button type="submit" >Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
