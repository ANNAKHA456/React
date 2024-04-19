/*import React, { useState } from 'react'

function BasicDet() {
    const [firstname,setfirstname]=useState("");
    const [lastname,setlastname]=useState(""); 
    const [phno,setphno]=useState("");
    const [mailid,setmailid]=useState("");
    const [gender,setgender]=useState("");
    const [dob,setdob]=useState("");
    const [address,setaddress]=useState("");
    const genderset =(event)=>{
        
        console.log(event.target.value)
        setgender(event.target.value);

    }
    const detailsub=(details)=>{
        const fn=details.get("firstname");
        console.log(`${fn}`);
        console.log(firstname)

    }
  return (
    <div><form onSubmit={detailsub}>
        <th>BASIC DETAILS:</th>
        <table>
            
            <tr>
                <td>FIRST NAME</td>
                <td>LAST NAME</td>
            </tr>
            <tr>
                <td><input type="text" name="firstname" placeholder='Enter your first and middle name' value={firstname} onChange={((e)=>setfirstname(e.target.value))}/></td>
                <td><input type="text" placeholder='Enter your last name' value={lastname} onChange={((e)=>setlastname(e.target.value))}/></td>
            </tr>
            <tr>
                <td>EMAIL</td>
                <td>PHONE NUMBER</td>
            </tr>
            <tr>
            <td><input type="email" placeholder='Enter your email' value={mailid} onChange={((e)=>setmailid(e.target.value))}/></td>
            <td><input type="text" placeholder='Enter your phone number' value={phno} onChange={((e)=>setphno(e.target.value))}/></td>
            </tr>
            <tr>
                <td>DATE OF BIRTH</td>
                <td>ADDRESS</td>
            </tr>
            <tr>
            <td><input type="date" placeholder='Enter your date of birth' value={dob} onChange={((e)=>setdob(e.target.value))}/></td>
            <td><input type="text" placeholder='Enter your address' value={address} onChange={((e)=>setaddress(e.target.value))}/></td>
            </tr>
            <tr>
                <td>GENDER</td>
            </tr>
            <tr>
                <td><input type="radio" id="f" name='gender' value={gender} onChange={((e)=>setgender(e.target.value))} /></td>
                <td>Female</td>
                <td><input type="radio" id="m" name='gender' value={"male"} onChange={genderset}/></td>
                <td>Male</td>
                <td><input type="radio" id="nb" name='gender' value={"nonbin"} onChange={genderset}/></td>
                <td>Non Binary</td>
            </tr>
            <tr><td><button type='submit'>SUBMIT</button></td></tr>
        </table>
        </form>
    </div>
  )
}

export default BasicDet*/

import React, { useEffect, useState }  from 'react'
import { useDispatch } from 'react-redux';
//import initialState from '../redux/initialState';
//import { BASIC_DET } from '../redux/actionTypes';
import { addbasicdet,addsummary } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import './BasicDet.css'
function BasicDet() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        mailid:'',
        address:'',
        phno:'',
        dob:'',

      });
      console.log(`line before redux`)

      const dispatch=useDispatch();
      const a=dispatch(addbasicdet({}))
      console.log(a)
      const navigate=useNavigate();
      const [summary,setsummary]=useState("");
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        const isFirstLoad = localStorage.getItem('isFirstLoad') === null;

    if (isFirstLoad) {
      localStorage.clear();
      localStorage.setItem('isFirstLoad', 'false');
    }
        const storedFormData = JSON.parse(localStorage.getItem('formData')) || {};
        setFormData(storedFormData);
    
        const storedSummary = localStorage.getItem('summary') || '';
        setsummary(storedSummary);
        setLoading(false);
        const handleBeforeUnload = () => {
            localStorage.clear();
          };
      
          window.addEventListener('beforeunload', handleBeforeUnload);
      
          return () => {
            // Remove the event listener when the component is unmounted
            window.removeEventListener('beforeunload', handleBeforeUnload);
          };
        }, []);
      useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
      }, [formData]);
    
      useEffect(() => {
        localStorage.setItem('summary', summary);
      }, [summary]);
    //const [firstname,setfirstname]=useState("");
    //const [lastname,setlastname]=useState(""); 
    //console.log(dispatch)
    const handleonClick=(e)=>{
        const { name, value } = e.target;
     setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    }
    const handleonchange=(event)=>{
        setsummary(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(`inside handlesubmit...`)
        console.log(`firstnmae: ${formData} ${formData.dob} ${formData.address}`)
        dispatch(addbasicdet({formData}))
        console.log(summary)
        dispatch(addsummary({ summ: summary }))
        navigate("/edudetails")
        

    }

    if (loading) {
        return <p>Loading...</p>;
      }
  return (
    <div>
        <br/>
        <br/>
        <form onSubmit={handleSubmit}>
            <h3>FIRST NAME</h3>
        <input type="text" name="firstname" placeholder='Enter your first and middle name' value={formData.firstname} onChange={handleonClick}/>
        <h3>LAST NAME</h3>
        <input type="text" name="lastname" placeholder='Enter your last name' value={formData.lastname} onChange={handleonClick}/>
        <h3>EMAIL ID</h3>
        <input type="email" name="mailid" placeholder='Enter your email' value={formData.mailid} onChange={handleonClick}/>
        <h3>CONTACT NUMBER</h3>
        <input type="text" name="phno" placeholder='Enter your phone number' value={formData.phno} onChange={handleonClick}/>
        <h3>DATE OF BIRTH</h3>
        <input type="date" placeholder='Enter your date of birth' name="dob" value={formData.dob} onChange={handleonClick}/>
        <h3>ADDRESS</h3>
        <input type="text" name="address" placeholder='Enter your address' value={formData.address} onChange={handleonClick}/>
        <h3>INDRODUCTORY SUMMARY</h3>
        <input type='text' name='summary' placeholder='Enter an introductory summary' value={summary} onChange={handleonchange}/>
        <button type='submit'> SUBMIT</button>
             
        </form>
    </div>
  )
}

export default BasicDet