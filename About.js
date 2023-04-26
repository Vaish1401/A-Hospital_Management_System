import {React,useEffect} from 'react'
import Navbar from "../component/Navbar";
import useAuth from '../func/useAuth';
import bckgnd from '../content/hero-bg.png';

function About() {
  
const { checkLoggedIn,redirectToLogin} = useAuth();
  useEffect(() => {
    if (!checkLoggedIn()) {
      redirectToLogin();
    }
  }, []);
  return (
<div>
  <Navbar />
  <section
    className="section hero"
    style={{
      backgroundImage: `url(${bckgnd})`,
      backdropFilter: "blur(10px)", // Add blur effect to the image
    }}
    aria-label="home"
  >
    <div className="container">
      <figure
        className="hero-banner"
        data-reveal="right"
        style={{ position: "relative" }}
      >
        <img
          src={require("../content/aboutUS.png")}
          width={590}
          height={517}
          loading="eager"
          alt="hero banner"
          className="w-100"
          style={{ filter: "blur(5px)" }} // Apply blur effect to the image
        />
        <div
          className="hero-content"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white", // Set text color to white
          }}
        >
          <h1 className="headline-lg hero-title" data-reveal="left">
            About Us!
            <br />
          </h1>
          <h6>
            Welcome To Hospital Management System. Hospital Management System is a Professional WebsiteType
            Platform. Here we will provide you only interesting content, which
            you will like very much. We're dedicated to providing you the best
            of WebsiteType, with a focus on dependability and WebsiteSpeciality.
            We're working to turn our passion for WebsiteType into a booming
            online website. We hope you enjoy our WebsiteType as much as we
            enjoy offering them to you.
            <br />
            <br />
            I will keep posting more important posts on my Website for all of
            you. Please give your support and love.
            <br />
            <br />
            Thanks For Visiting Our Site
            <br />
            Have a nice day!
          </h6>
        </div>
      </figure>
    </div>
  </section>
</div>


  )
}

export default About