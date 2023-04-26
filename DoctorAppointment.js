import "bootstrap/dist/css/bootstrap.min.css";
import react , {useState , useEffect} from 'react';
import { Link } from "react-router-dom";
import { ToastContainer , toast} from 'react-toastify';
import axios from "axios";
import useAuth from '../func/useAuth';
import DoctorNavbar from "../component/DoctorNavbar";

const id=sessionStorage.getItem('id');
function DoctorAppointment() {
    
  
    const { checkLoggedIn,redirectToLogin} = useAuth();
    const [data,setData]=useState([]);

    const loadData = async () => {
    console.log("--",id,"--");
    const response = await axios.get(`http://localhost:6969/api/getAppointment/${id}`);
    setData(response.data);
    console.log(response.data[0]);
    };
    
    useEffect(()=>{
      if (!checkLoggedIn()) {
        redirectToLogin();
      }
      loadData();
    },[]);

    const acceptAppointment = async(id) =>{
        await axios.put(`http://localhost:6969/api/acceptAppointment/${id}`);
        loadData();
    }

    const declineAppointment = async(id) =>{
        await axios.put(`http://localhost:6969/api/declineAppointment/${id}`);
        loadData();
    }

    const doneAppointment = async(id) =>{
        await axios.put(`http://localhost:6969/api/doneAppointment/${id}`);
        loadData();
    }
    


    
      return (
      <div>
      <DoctorNavbar /> 
      <div style={{ marginTop: '150px' }}>
        <div className="text-center">
          <u>
            <h1 style={{ padding:'100px', width: '100%', margin: 'auto'}}>Appointment</h1>
          </u>
        </div>
        <table
          className="table table-striped"
          style={{ padding:'400px', width: '90%', margin: 'auto'}}
        >
          <thead>
            <tr>
              <th style={{ fontSize: '25px' }}scope="col">Name</th>
              <th style={{ fontSize: '25px' }}scope="col">Gender</th>
              <th style={{ fontSize: '25px' }}scope="col">Age</th>
              <th style={{ fontSize: '25px' }}scope="col">Disease</th>
              <th style={{ fontSize: '25px' }}scope="col">Contact</th>
              <th style={{ fontSize: '25px' }}scope="col">Date</th>
              <th style={{ fontSize: '25px' }}scope="col">Time</th>
              <th style={{ fontSize: '25px' }}scope="col">Status</th>
              <th style={{ fontSize: '25px' }}scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  {/* <th scope="row"> {index+1} </th> */}
                  <td style={{ fontSize: '20px'}}>{item.name}</td>
                  <td style={{ fontSize: '20px'}}>{item.gender}</td>
                  <td style={{ fontSize: '20px' }}>{item.age}</td>
                  <td style={{ fontSize: '20px' }}>{item.disease}</td>
                  <td style={{ fontSize: '20px'}}>{item.contact}</td>
                  <td style={{ fontSize: '20px'}}>{item.date}</td>
                  <td style={{ fontSize: '20px'}}>{item.time}</td>
                  <td style={{ fontSize: '20px'}}>{item.status}</td>
                  <td>
                    <Link to={`/updateAppointment/${item.id}`}>
                      <button
                        className="btn btn-primary"
                        style={{ margin: '5px' }}
                      >Update
                      </button>
                    </Link>
                    <button
                        className="btn btn-success"
                        style={{ margin: '5px' }}
                        onClick={() => acceptAppointment(item.id)}
                      >Accept
                      </button>
                      <button
                        className="btn btn-danger"
                        style={{ margin: '5px' }}
                        onClick={() => declineAppointment(item.id)}
                      >Decline
                      </button>
                      <button
                        className="btn btn-info"
                        style={{ margin: '5px' }}
                        onClick={() => doneAppointment(item.id)}
                      >Done
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
    export default DoctorAppointment;