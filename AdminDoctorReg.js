import React,{useState,useEffect} from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import AdminNavbar from '../component/AdminNavbar';
import useAuth from '../func/useAuth';
function AdminDoctorReg() {

const { checkLoggedIn,redirectToLogin} = useAuth();
  useEffect(() => {
    if (!checkLoggedIn()) {
      redirectToLogin();
    }
  }, []);

  const initialState = {
    name: '',
    password: '',
    specialisation: '',
    gender: 'Male',
    email: '',
    contact: '',
    profile:''
  };


  const [state, setState] = useState(initialState);
  const { name, password, specialisation, gender, email, contact , profile} = state;
  const handleInputChange = (e) => {
  const { name, value } = e.target;
  if(name=='profile') {
    setState({ ...state, ['profile']: e.target.files[0].name });
  }
  else{
    setState({ ...state, [name]: value });
  }
  console.log(state);
};

const Navigate = useNavigate();
const handleSubmit = (e =>{
    e.preventDefault();
    if(!name){
        toast.error("Please Provide a Name!!");
        console.log(name,"-hi");
    } else if (!password){
        toast.error("Please Provide a Password!!");
    } else {
        console.log(name,'---',password);
          axios.post("http://localhost:6969/api/DoctorRegister",   {
            name,password,specialisation,gender,email,contact,profile
        }).then(() => {
            setState({name:"",password:"",specialisation:"",gender:"",email:"",contact:"",profile:""})
        }).catch((err)=>console.log(err));
        toast.success("SAVED!!");
        setTimeout(() =>Navigate("/manageDoctors"), 500);
    }
})


  return (
    <div>
        <AdminNavbar/>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100" >
          <div className="row justify-content-center align-items-center h-100" >
            <div className="col-12 col-lg-9 col-xl-7" >
            <div className="card bg-dark text-white" style={{borderRadius: '1rem', backgroundColor: '#333'}} >
                <div className="card-body p-4 p-md-5" >
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5" style={{color:"white"}}>Doctor Registration Form</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-4" >
                        <div className="form-outline">
                        <label className=" form-label"  style={{color:"white"}} >Name</label>
                          <input type="text" name="name" value={name || ""} onChange={handleInputChange} className="form-control form-control-lg bg-dark text-white" />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                        <label className="form-label"  style={{color:"white"}}>Password</label>
                          <input type="password" name="password" value={password || ""} onChange={handleInputChange} className="form-control form-control-lg bg-dark text-white" style={{color:"white"}} />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                        <label className="form-label"  style={{color:"white"}}>Specialisation</label>
                          <input type="text" name="specialisation" value={specialisation || ""} onChange={handleInputChange} className="form-control form-control-lg bg-dark text-white" />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1" style={{color:"white"}}>Gender: </h6>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="gender" value="Male" onChange={handleInputChange} defaultChecked />
                          <label className="form-check-label" style={{color:"white"}}>Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="gender" value="Female" onChange={handleInputChange} />
                          <label className="form-check-label" style={{color:"white"}}>Female</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="gender" value="Other" onChange={handleInputChange} />
                          <label className="form-check-label" style={{color:"white"}}>Other</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                        <label className="form-label" style={{color:"white"}}>Email</label>
                          <input type="email" name="email"  value={email || ""} onChange={handleInputChange} className="form-control form-control-lg bg-dark text-white" />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                        <label className="form-label" style={{color:"white"}}>Phone Number</label>
                    <input type="number" name="contact"  value={contact || ""} onChange={handleInputChange} className="form-control form-control-lg bg-dark text-white" />
                  </div>
                </div>
                <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                        <label className="form-label" style={{color:"white"}}>Profile Picture</label>
                    <input type="file" id="profile" name="profile" accept="image/*" onChange={handleInputChange} className="form-control form-control-lg bg-dark text-white" />
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-2">
                <input className="btn btn-outline-light btn-lg px-5" type="submit"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
    </div>

  )

}

export default AdminDoctorReg;