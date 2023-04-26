import {React,useEffect,useState} from 'react'
import AdminNavbar from '../component/AdminNavbar'
import useAuth from '../func/useAuth';
import axios from 'axios';
import { toast } from 'react-toastify';

let index=0;

function AdminAppointment() {
const { checkLoggedIn,redirectToLogin} = useAuth();
const [data,setData]=useState([]);

const loadData = async () => {
const response = await axios.get("http://localhost:6969/api/getAppointment");
setData(response.data);
console.log(response.data);
};

useEffect(() => {
  if (!checkLoggedIn()) {
    redirectToLogin();
  }
  loadData();
}, []);

const deleteUser = id =>{
  if(window.confirm("Are you Sure You Want To Delete User?")){
    axios.delete(`http://localhost:6969/api/removeAppointment/${id}`);
    toast.success("User Deleted");
    setTimeout(()=>loadData(),500);
  }
}

return (
  <div>
  <AdminNavbar/>
  <div>
    <div className="text-center" >
      <u>
        <h1 style={{ padding:'100px', width: '100%', margin: 'auto' }}>Appointments</h1>
      </u>
    </div>
    <table
      className="table table-striped" 
      style={{ padding:'400px', width: '100%', margin: 'auto' }}
    >
      <thead >
        <tr>
          <th style={{ fontSize: '25px' }}scope="col">S.no</th>
          <th style={{ fontSize: '25px' }}scope="col">Doctor ID</th>
          <th style={{ fontSize: '25px' }}scope="col">Name</th>
          <th style={{ fontSize: '25px' }}scope="col">Age</th>
          <th style={{ fontSize: '25px' }}scope="col">Gender</th>
          <th style={{ fontSize: '25px' }}scope="col">Disease</th>
          <th style={{ fontSize: '25px' }}scope="col">Contact</th>
          <th style={{ fontSize: '25px' }} scope="col">Date</th>
          <th style={{ fontSize: '25px' }} scope="col">Time</th>
          <th style={{ fontSize: '25px' }} scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return ( 
            <tr key={item.id}>
              <th scope="row"> {index+1} </th>
              <td style={{ fontSize: '20px'}}>{item.doctorid}</td>
              <td style={{ fontSize: '20px'}}>{item.name}</td>
              <td style={{ fontSize: '20px'}}>{item.age}</td>
              <td style={{ fontSize: '20px'}}>{item.gender}</td>
              <td style={{ fontSize: '20px'}}>{item.disease}</td>
              <td style={{ fontSize: '20px'}}>{item.contact}</td>
              <td style={{ fontSize: '20px'}}>{item.date}</td>
              <td style={{ fontSize: '20px'}}>{item.time}</td>
              <td style={{ fontSize: '20px'}}>{item.status}</td>
              <td>
                  <button
                    className="btn btn-danger" onClick={() => deleteUser(item.id)} style={{ margin: '5px' }}>DELETE
                  </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
</div>
);
}

export default AdminAppointment;