import React,{useState,useEffect} from 'react'
import {useNavigate,useParams,Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { toast } from 'react-toastify';
import AdminNavbar from '../component/AdminNavbar'
import useAuth from '../func/useAuth';

function UpdatePatient() {
  
const { checkLoggedIn,redirectToLogin} = useAuth();

  const initialState = {
    name: '',
    email: '',
    contact:'',
    address:''
  };
    const [state, setState] = useState(initialState);
    const { name, email , contact , address } = state;
    
    const Navigate = useNavigate();
  
    const { id } = useParams();
  
    useEffect(()=>{
      if (!checkLoggedIn()) {
        redirectToLogin();
      }
      axios.get(`http://localhost:6969/api/getPatient/${id}`)
      .then((resp)=>setState({ ...resp.data[0]}));
    },[id]);
  
    const handleInputChange = (e) => {
      const target = e.target;
      const name = target.name;
      const value = target.value;
      // console.log(name,"-----",value)
      setState({...state,[name]:value});
  };
  
  
  const handleSave = (e) => {
    e.preventDefault();
    if(!name){
        toast.error("Please Provide a Name!!");
    }
    else {
          axios.put(`http://localhost:6969/api/updatePatient/${id}`,{
            name,
            email,
            contact,
            address
        }).then(() => {
          setState({name:"",email:"",contact:"",address:""})
        }).catch((err)=>console.log(err));
        toast.success("UPDATED!!");
        Navigate("/dashboard");
    }
  };
    return (
      <div><AdminNavbar/>
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
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Your Name"
            value={name || ""}
            onChange={handleInputChange}
          />
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            className="form-control"
            type="text"
            name="email"
            placeholder="Your Name"
            value={email || ""}
            onChange={handleInputChange}
          />
          <label htmlFor="exampleInputEmail1">Contact</label>
          <input
            className="form-control"
            type="text"
            name="contact"
            placeholder="Your Name"
            value={contact || ""}
            onChange={handleInputChange}
          />
          <label htmlFor="exampleInputEmail1">Address</label>
          <input
            className="form-control"
            type="text"
            name="address"
            placeholder="Your Name"
            value={address || ""}
            onChange={handleInputChange}
          />
          </div>
          <input className="btn btn-primary" type="submit" value={id ? "Update":"Save"}  style={{margin: '5px' }} />
          <Link to="/dashboard">
            <input className="btn btn-primary" type="button" value="Go Back"  style={{margin: '5px' }} />
          </Link>
        </form>
      </div>
      </div>
    );
  }
export default UpdatePatient;