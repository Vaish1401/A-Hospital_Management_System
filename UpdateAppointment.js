import React,{useState,useEffect} from 'react'
import {useNavigate,useParams,Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { toast } from 'react-toastify';
import AdminNavbar from '../component/AdminNavbar'
import useAuth from '../func/useAuth';
import DoctorNavbar from '../component/DoctorNavbar';

function UpdateAppointment() {
    
const { checkLoggedIn,redirectToLogin} = useAuth();

  const initialState = {
    date: '',
    time: ''
  };
    const [state, setState] = useState(initialState);
    const { date,time } = state;
    
    const Navigate = useNavigate();
  
    const { id } = useParams();
  
    useEffect(()=>{
        if (!checkLoggedIn()) {
        redirectToLogin();
      }
      axios.get(`http://localhost:6969/api/getUpdateAppointment/${id}`)
      .then((resp)=>setState({ ...resp.data[0]}));
    },[id]);
  
    const handleInputChange = (e) => {
      const target = e.target;
      const name = target.name;
      const value = target.value;
      setState({...state,[name]:value});
  };
  
  
  const handleSave = (e) => {
    e.preventDefault();
          axios.put(`http://localhost:6969/api/getUpdateAppointment/${id}`,{
            date,
            time
        }).then(() => {
          setState({date:"",time:""})
        }).catch((err)=>console.log(err));
        toast.success("UPDATED!!");
        Navigate("/doctorAppointment");
  };
    return (
      <div><DoctorNavbar/>
      <div style={{ marginTop: '100px' }}>
        
        <form 
          style={{
            margin: 'auto',
            padding: '15px',
            maxWidth: '400px',
            alignContent: 'center'
          }}
          onSubmit={handleSave}
        >
          <div className='form-group'>
          <label htmlFor="exampleInputEmail1">Date</label>
          <input
            className="form-control"
            type="date"
            name="date"
            value={date || ""}
            onChange={handleInputChange}
          />
          <label htmlFor="exampleInputEmail1">Time</label>
          <input
            className="form-control"
            type="time"
            name="time"
            value={time || ""}
            onChange={handleInputChange}
          />
          </div>
          <input className="btn btn-primary" type="submit" style={{margin: '5px' }} />
          <Link to="/doctorAppointment">
            <input className="btn btn-primary" type="button" value="Go Back"  style={{margin: '5px' }} />
          </Link>
        </form>
      </div>
      </div>
    );
  }
export default UpdateAppointment;