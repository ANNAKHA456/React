import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { refdet } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import './References.css'

function References() {
    const [refrence,setreference]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{
        const storeref = JSON.parse(localStorage.getItem('reference'))||{};
        setreference(storeref)
    },[]);
    useEffect(()=>{
        localStorage.setItem('reference',JSON.stringify(refrence))
    },[refrence]);
    const handleonclick=()=>{
        //window.alert("ADD YOUR REFERENCES AS YOU WANT TO SEE IN Y0UR RESUME:")
        dispatch(refdet({refs:refrence}))
        navigate("/finalscreen")

    }
  return (
    <div>
        <label>ENTER YOUR REFERENCES:</label>
        <input name='refer' placeholder="ENTER YOUR REFERENCES" onChange={(event)=>{
            setreference(event.target.value)
        }} value={refrence}/>
        <button type="submit" onClick={handleonclick}>SUBMIT</button>
    </div>
  )
}

export default References