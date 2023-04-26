import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import patient from "../content/patientProfile.jpg"
import doctor from "../content/doctorProfile.jpg"
import admin from "../content/adminProfile.jpg"

function LandingPage() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{backgroundColor: 'black', minHeight: '100vh' }}>
  <div className="card text-white bg-primary mb-3 mx-2" style={{ width: '18rem' }}>
    <img className="card-img-top" src={doctor} alt="Card image cap" />
    <div className="card-body text-center">
      
      <Link className='text-white bg-light mb-2' to="/doctorLogin"><h5 className="card-title">Doctor</h5></Link>
    </div>
  </div>
  <div className="card text-white bg-warning mb-3 mx-2" style={{ width: '25rem' }}>
    <img className="card-img-top" src={patient} alt="Card image cap" />
    <div className="card-body text-center">
      
      <Link className='text-white bg-light mb-2'to="/login"><h5 className="card-title">Patient</h5></Link>
    </div>
  </div>
  <div className="card text-white bg-dark mb-3 mx-2" style={{ width: '18rem' }}>
    <img className="card-img-top" src={admin} alt="Card image cap" />
    <div className="card-body text-center">
      
      <Link className='text-white bg-light mb-2' to="/adminLogin"><h5 className="card-title">Admin</h5></Link>
    </div>
  </div>
</div>


  )
}

export default LandingPage;