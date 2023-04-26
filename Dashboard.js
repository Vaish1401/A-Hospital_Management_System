import "bootstrap/dist/css/bootstrap.min.css";
import react , {useState , useEffect} from 'react';
import { Link } from "react-router-dom";
import { ToastContainer , toast} from 'react-toastify';
import axios from "axios";
import AdminNavbar from '../component/AdminNavbar'
import useAuth from '../func/useAuth';

const Dashboard = () => {
  
const { checkLoggedIn,redirectToLogin} = useAuth();
const [data,setData]=useState([]);

const loadData = async () => {
const response = await axios.get("http://localhost:6969/api/getPatient");
setData(response.data);
console.log(response.data);
};

useEffect(()=>{
  
  if (!checkLoggedIn()) {
    redirectToLogin();
  }loadData();
},[]);

const deleteUser = id =>{
  if(window.confirm("Are you Sure You Want To Delete User?")){
    axios.delete(`http://localhost:6969/api/remove/${id}`);
    toast.success("User Deleted");
    setTimeout(()=>loadData(),500);
  }
}

  return (
    <div><AdminNavbar/>
    <div style={{marginTop:'150px'}}>
      <div className="text-center">
        <u><h2>Patients Info</h2></u>
      </div>
      <table className= "table table-striped" style={{ width: '60%', margin: 'auto' }}> 
      <thead>
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Name</th>
          <th scope="col">Gender</th>
          <th scope="col">Address</th>
          <th scope="col">Email</th>
          <th scope="col">Contact</th>
          <th scope="col">Action</th>

        </tr>
      </thead>
        <tbody>
          {data.map((item, index) => {
            return (
            <tr key={item.id}>
              <th scope="row"> {index+1} </th>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.address}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
              <td>
                <Link to={`/updatePatient/${item.id}`}>
                  <button className="btn btn-success" style={{margin:'5px'}}>Edit</button>
                </Link>
                <button  className="btn btn-danger" onClick={()=>deleteUser(item.id)} style={{margin:'5px'}}>Delete</button>
              </td>
             </tr>
            )
          })}
        </tbody>
      </table>
    </div>
    </div>
)};
export default Dashboard;