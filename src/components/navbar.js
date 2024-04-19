/*import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    const[activebut,setactivebut]=useState("home")
  return (
    <div class="pagination">
  <a class={activebut==="home"?"active":""} onClick={()=>setactivebut("home")}>
      <Link to="/">BASIC DETAILS</Link>
    </a>
    <a class={activebut==="edudet"?"active":""} onClick={()=>setactivebut("edudet")}>
      <Link to="/edudetails">EDUCATION</Link>
    </a>
    <a class={activebut==="skill"?"active":""} onClick={()=>setactivebut("skill")}>
      <Link to="/skillsandinterests">SKILLS</Link>
    </a>
    <a class={activebut==="work"?"active":""} onClick={()=>setactivebut("work")}>
      <Link to="/workandpojects">WORK AND PROJECTS</Link>
    </a>
    <a class={activebut==="ref"?"active":""} onClick={()=>setactivebut("ref")}>
      <Link to="/refernces">REFERENCES</Link>
    </a>
    <a>
      <Link to="/finalscreen">RESUME</Link>
    </a>
    </div>
  )
}

export default Navbar*/
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [activeButton, setActiveButton] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.substring(1); 
    setActiveButton(pathname || "home");
  }, [location]);

  return (
    <div className="pagination">
      <Link to="/" className={activeButton === "home" ? "active" : ""} onClick={() => setActiveButton("home")}>
        BASIC DETAILS
      </Link>
      <Link to="/edudetails" className={activeButton === "edudet" ? "active" : ""} onClick={() => setActiveButton("edudet")}>
        EDUCATION
      </Link>
      <Link to="/skillsandinterests" className={activeButton === "skill" ? "active" : ""} onClick={() => setActiveButton("skill")}>
        SKILLS
      </Link>
      <Link to="/workandpojects" className={activeButton === "work" ? "active" : ""} onClick={() => setActiveButton("work")}>
        WORK AND PROJECTS
      </Link>
      <Link to="/refernces" className={activeButton === "ref" ? "active" : ""} onClick={() => setActiveButton("ref")}>
        REFERENCES
      </Link>
      <Link to="/finalscreen" className={activeButton === "finalscreen" ? "active" : ""} onClick={() => setActiveButton("finalscreen")}>
        RESUME
      </Link>
    </div>
  );
}

export default Navbar;
