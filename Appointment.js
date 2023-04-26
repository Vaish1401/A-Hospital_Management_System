import {React,useEffect,useState}from 'react'
import Navbar from "../component/Navbar";
import useAuth from '../func/useAuth';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';

function Appointment() {
  const navigate=useNavigate();
  const { checkLoggedIn,redirectToLogin} = useAuth();
  useEffect(() => {
    if (!checkLoggedIn()) {
      redirectToLogin();
    }
  }, []);

  const { id } = useParams();
   
  const initialState = {
    name:'',age:'',gender:'Male',disease:'',contact:'',date:'',time:'',userid:window.sessionStorage.getItem('id')
  };

  const [state, setState] = useState(initialState);
  const { userid,name,age,gender,disease,contact,date,time} = state;

  const handleInputChange = (e) => {
    console.log(e.target.name,"  ",e.target.value);
  const { name, value } = e.target;
  setState({ ...state, [name]: value });
  console.log(state);
  
};



const handleSubmit = (e =>{
    e.preventDefault();
    if(!name||!age||!disease||!contact||!date||!time){
        toast.error("Please Provide all the details");
        console.log(name,"-hi");
    }else {
        console.log(name,'---',age);
          axios.post("http://localhost:6969/api/appointment",   {
            id,userid,name,age,gender,disease,contact,date,time
        }).then(() => {
          toast.success("SAVED!!");
          navigate('/home');
        }).catch((err)=>console.log(err));
    }
})
 

 

  return (
    <div><Navbar/>
    <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100" >
          <div className="row justify-content-center align-items-center h-100" >
            <div className="col-12 col-lg-9 col-xl-7" >
            <div className="card bg-dark text-white" style={{borderRadius: '1rem', backgroundColor: '#333'}} >
                <div className="card-body p-4 p-md-5" >
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5" style={{color:"white"}}>Appointment Form</h3>
                  <form onSubmit={handleSubmit} >
                    <div className="row">
                      <div className="col-md-6 mb-4" >
                        <div className="form-outline">
                        <label className=" form-label"  style={{color:"white"}} >Name</label>
                          <input type="text" name="name" onChange={handleInputChange} className="form-control form-control-lg bg-dark text-white" />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                        <label className="form-label"  style={{color:"white"}}>Age</label>
                          <input type="number" name="age" onChange={handleInputChange} className="form-control form-control-lg bg-dark text-white" style={{color:"white"}} />
                        </div>
                      </div>
                    
                     
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1" style={{color:"white"}}>Gender: </h6>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="gender" value="Male"  defaultChecked  onChange={handleInputChange}/>
                          <label className="form-check-label" style={{color:"white"}}>Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="gender" value="Female"  onChange={handleInputChange} />
                          <label className="form-check-label" style={{color:"white"}} >Female</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="gender" value="Other"  onChange={handleInputChange} />
                          <label className="form-check-label" style={{color:"white"}} >Other</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                        <label className="form-label" style={{color:"white"}} >Disease/Symptoms</label>
                          {/* <input     type='textarea' name=""  placeholder='enter your problem!!' className="form-control form-control-lg bg-dark text-white" /> */}
                          <textarea name="disease" placeholder='Enter your problem' onChange={handleInputChange}  className="form-control form-control-lg bg-dark text-white" ></textarea>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="form-label" style={{color:"white"}} >Phone Number</label>
                          <input type="number" name="contact"  className="form-control form-control-lg bg-dark text-white" onChange={handleInputChange}/>
                        </div>
                      </div>
                    <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline" style={{width:290}}>
                        <label className="form-label" style={{color:"white"}} >Date(For Scheduling)</label>
                    <input type="date" name="date"  className="form-control form-control-lg bg-dark text-white" onChange={handleInputChange}/>
                  </div>
                </div>
                <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline" style={{width:290}}>
                      <label className="form-label" style={{color:"white"}} >Time</label>
                      <input type="time" name="time"  className="form-control form-control-lg bg-dark text-white" onChange={handleInputChange}/>
                    </div>
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
    </section></div>
     
  )
}

export default Appointment