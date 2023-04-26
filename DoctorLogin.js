import React from 'react'
import {useNavigate,Link, Navigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
 

function DoctorLogin() {
const initialState = {
name: '',
password: '',
};

const navigate=useNavigate();

const [state, setState] = useState(initialState);
const { name, password } = state;
const [loginStatus,setLoginStatus]=useState("");

const handleInputChange = (e) => {
console.log(e.target.name,"  ",e.target.value)
const { name, value } = e.target;
setState({ ...state, [name]: value });
};

// const ses=(()=>{
//   const result=axios.get("http://localhost:6969/api/login");
//   setLoginStatus(result);
//   console.log(result); 
// })

const handleSubmit = ((e) =>{
  e.preventDefault();
  if(!name){toast.error("Please Provide a Name!!");}
  else if (!password){toast.error("Please Provide a Password!!");}
  else
  {
    axios.post("http://localhost:6969/api/doctorLogin",
    {
      name,password
    })
    .then((res) =>
    {
      console.log("res.data[0]-> ",res.data[0]);//object
      
      if(res.data.result==="Wrong Password")
      {
        toast.error("Wrong Password");
      }
      else if(res.data.result==="Wrong Username")
      {
        toast.error("Wrong Username");
      }
      else
      {
        window.localStorage.setItem('loggedIn','true')
        window.sessionStorage.setItem('name',res.data[0].name);
        window.sessionStorage.setItem('id',res.data[0].id);
        window.sessionStorage.setItem('loggedIn','true');
        setTimeout(() =>navigate("/doctorAppointment"), 500);
      }
    })
    .catch((err)=>console.log(err));
  }
})
  return (
    <div>
      <section className="vh-100 gradient-custom" style={{backgroundColor: 'black'}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-5">
              <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
                <div className="card-body p-5 text-center">
                  <div className="mb-md-3 mt-md-4 pb-5">
                    <form onSubmit={handleSubmit}>
                    <h2 className="fw-bold mb-2 text-uppercase">Doctor Login</h2>
                    <br></br>
                    <p className="text-white-50 mb-5">Please enter your login and password!</p>
                    <div className="form-outline form-white mb-4">
                      <label className="form-label text-white">Username</label>
                      <input type="text" name="name" value={name || ""} onChange={handleInputChange} className="form-control form-control-lg bg-dark text-white" />
                    </div>
                    <div className="form-outline form-white mb-4">
                      <label className="form-label text-white">Password</label>
                      <input type="password"  name="password" value={password || ""} onChange={handleInputChange} className="form-control form-control-lg bg-dark text-white" />
                    </div>
                    {/* <p className="small mb-5 pb-lg-2"><a className="text-white-50">Forgot password?</a></p> */}
                    <button className="btn btn-outline-light btn-lg px-5" type="submit" >Login</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DoctorLogin;
