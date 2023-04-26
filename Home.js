import {React,useEffect }from 'react'
import Navbar from '../component/Navbar';
import useAuth from '../func/useAuth';
import bckgnd from '../content/hero-bg.png';

function Home(){
  const { checkLoggedIn,redirectToLogin} = useAuth();
  useEffect(() => {
    if (!checkLoggedIn()) {
      redirectToLogin();
    }
  }, []);
  


  return (
    <div><Navbar/>
<section className="section hero" style={{width:"100%",height:"100%",backgroundImage: `url(${bckgnd})`}} aria-label="home">
  <div className="container">
    <div className="hero-content">
      <p className="hero-subtitle has-before" data-reveal="left">Hospital Management System</p>
      <h1 className="headline-lg hero-title" data-reveal="left">
        We Serve
      </h1>
    </div>
    <figure className="hero-banner" data-reveal="right">
      <img src={require("../content/hero-banner.png")} width={590} height={517} loading="eager" alt="hero banner" className="w-100" />
    </figure>
  </div>
</section>

<section className="section hero" style={{backgroundImage: `url(${bckgnd})`}} aria-label="home">
  <div className="container">
    <div className="hero-content">
      <h1 className="headline-lg hero-title" data-reveal="left">
        Our Hospital
      </h1>
    </div>
    <figure className="hero-banner" data-reveal="right">
      <img src={require("../content/hospitalImage.jpg")} width={590} height={517} loading="eager" alt="hero banner" className="w-100" />
    </figure>
  </div>
</section>

<section className="section hero" style={{backgroundImage: `url(${bckgnd})`}} aria-label="home">
  <div className="container">
    <div className="hero-content">
      <h1 className="headline-lg hero-title" data-reveal="left">
        Top-Notch Facility <br />
      </h1>
    </div>
    <figure className="hero-banner" data-reveal="right">
      <img src={require("../content/room.jpg")} width={590} height={517} loading="eager" alt="hero banner" className="w-100" />
    </figure>
  </div>
</section>

<section className="section hero" style={{backgroundImage: `url(${bckgnd})`}} aria-label="home">
  <div className="container">
    <div className="hero-content">
      <h1 className="headline-lg hero-title" data-reveal="left">
        Best Surgeons around the globe. <br />
      </h1>
    </div>
    <figure className="hero-banner" data-reveal="right">
      <img src={require("../content/surgeon.jpg")} width={590} height={517} loading="eager" alt="hero banner" className="w-100" />
    </figure>
  </div>
</section>

<section className="section hero" style={{backgroundImage: `url(${bckgnd})`}} aria-label="home">
  <div className="container">
    <div className="hero-content">
      <h1 className="headline-lg hero-title" data-reveal="left">
        24/7 Service <br />
      </h1>
    </div>
    <figure className="hero-banner" data-reveal="right">
      <img src={require("../content/serve.jpg")} width={590} height={517} loading="eager" alt="hero banner" className="w-100" />
    </figure>
  </div>
</section>

</div>
    
  )
}

export default Home