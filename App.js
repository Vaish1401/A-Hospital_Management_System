import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import LandingPage from "./pages/LandingPage";
import DoctorLogin from "./pages/DoctorLogin";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import AdminDoctorReg from "./pages/AdminDoctorReg";
import AdminAppointment from "./pages/AdminAppointment";
import ManageDoctor from "./pages/ManageDoctor";
import UpdatePatient from "./pages/UpdatePatient";
import UpdateDoctor from "./pages/UpdateDoctor";
import CreateAppointment from "./pages/CreateAppointment";
import DoctorAppointment from "./pages/DoctorAppointment";
import UpdateAppointment from "./pages/UpdateAppointment";
import UserAppointment from "./pages/UserAppointment";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <ToastContainer position="top-center"/>
        <Routes>
          <Route path="/" Component={LandingPage}></Route>

          <Route exact path="/login" Component={Login}></Route>
          <Route path="/register" Component={Register}></Route>
          <Route path="/home" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/contact" Component={Contact}></Route>
          <Route path="/createAppointment" Component={CreateAppointment}></Route>
          <Route path="/createAppointment/:id" Component={Appointment}></Route>
          <Route path="/userAppointment/:id" Component={UserAppointment}></Route>


          <Route exact path="/adminLogin" Component={AdminLogin}></Route>
          <Route exact path="/dashboard" Component={Dashboard}></Route>
          <Route exact path="/manageDoctors" Component={ManageDoctor}></Route>
          <Route exact path="/updatePatient/:id" Component={UpdatePatient}></Route>
          <Route exact path="/updateDoctor/:id" Component={UpdateDoctor}></Route>
          <Route exact path="/adminDoctorReg" Component={AdminDoctorReg}></Route>
          <Route exact path="/adminAppointment" Component={AdminAppointment}></Route>


          <Route exact path="/doctorLogin" Component={DoctorLogin}></Route>
          <Route exact path="/doctorAppointment" Component={DoctorAppointment}></Route>
          <Route exact path="/updateAppointment/:id" Component={UpdateAppointment}></Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
