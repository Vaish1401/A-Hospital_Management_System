import "bootstrap/dist/css/bootstrap.min.css";
import react , {useState , useEffect} from 'react';
import { Link } from "react-router-dom";
import { ToastContainer , toast} from 'react-toastify';
import axios from "axios";
import AdminNavbar from '../component/AdminNavbar'
import useAuth from '../func/useAuth';


function ManageDoctor() {
  
    const { checkLoggedIn,redirectToLogin} = useAuth();
    const [data,setData]=useState([]);

    const loadData = async () => {
    const response = await axios.get("http://localhost:6969/api/getDoctors");
    setData(response.data);
    console.log(response.data);
    };
    
    useEffect(()=>{
      if (!checkLoggedIn()) {
        redirectToLogin();
      }
      loadData();
    },[]);
    
    const deleteUser = id =>{
      if(window.confirm("Are you Sure You Want To Delete User?")){
        axios.delete(`http://localhost:6969/api/removeDoctor/${id}`);
        toast.success("User Deleted");
        setTimeout(()=>loadData(),500);
      }
    }
    
      return (
<div>
      <AdminNavbar />
      <div style={{ marginTop: '150px' }}>
        <div className="text-center">
          <u>
            <h1 style={{ padding:'100px', width: '100%', margin: 'auto' }}>Doctors Info</h1>
          </u>
        </div>
        <table
          className="table table-striped"
          style={{ padding:'400px', width: '70%', margin: 'auto' }}
        >
          <thead>
            <tr>
              <th style={{ fontSize: '25px' }}scope="col">Profile</th>
              <th style={{ fontSize: '25px' }}scope="col">Name</th>
              <th style={{ fontSize: '25px' }}scope="col">Gender</th>
              <th style={{ fontSize: '25px' }}scope="col">Specialisation</th>
              <th style={{ fontSize: '25px' }}scope="col">Email</th>
              <th style={{ fontSize: '25px' }}scope="col">Contact</th>
              <th style={{ fontSize: '25px' }} scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  {/* <th scope="row"> {index+1} </th> */}
                  <td>
                    <img
                      src={require(`../content/${item.profile}`)}
                      alt="profile"
                      style={{ width: '250px', height: '250px' }}
                    ></img>
                  </td>
                  <td style={{ fontSize: '20px' }}>{item.name}</td>
                  <td style={{ fontSize: '20px' }}>{item.gender}</td>
                  <td style={{ fontSize: '20px' }}>{item.specialisation}</td>
                  <td style={{ fontSize: '20px' }}>{item.email}</td>
                  <td style={{ fontSize: '20px' }}>{item.contact}</td>
                  <td>
                    <Link to={`/updateDoctor/${item.id}`}>
                      <button
                        className="btn btn-success"
                        style={{ margin: '5px' }}
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteUser(item.id)}
                      style={{ margin: '5px' }}
                    >
                      Delete
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
};
    export default ManageDoctor;