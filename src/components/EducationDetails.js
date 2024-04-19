import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addgrad, addhs, addmatri, addpg } from '../redux/actions';
import './EducationalDetails.css'
function EducationDetails() {
    const navigate=useNavigate();
   // const basicdetail=useSelector((store)=> store.basicdet);
    console.log(`store objects assigned`)
    //console.log(basicdetail)
   
    const [matriculationDetails,setmatriculationDetails]=useState({
        year_start:"",
        year_end:"",
        board:"",
        school:"",
        marks:"",
    });
    const [highschoolDetails,sethighschoolDetails]=useState({
        year_start:"",
        year_end:"",
        board:"",
        school:"",
        marks:"",
    });
    const [graduationDetails,setgraduationDetails]=useState({
        year_start:"",
        year_end:"",
        board:"",
        school:"",
        marks:"",
    });
    const [postgraduationDetails,setpostgraduationDetails]=useState({
        year_start:"",
        year_end:"",
        board:"",
        school:"",
        marks:"",
    });
    const [loading,setLoading]=useState(true);
    useEffect(() => {
      const isFirstLoad = localStorage.getItem('isFirstLoad') === null;

    if (isFirstLoad) {
      localStorage.clear();
      localStorage.setItem('isFirstLoad', 'false');
    }
      const storedmatri = JSON.parse(localStorage.getItem('matriculationDetails')) || {};
      setmatriculationDetails(storedmatri);
      const storehs=JSON.parse(localStorage.getItem('highschoolDetails')) || {};
      sethighschoolDetails(storehs)
      const storegrad=JSON.parse(localStorage.getItem('graduationDetails')) || {};
      setgraduationDetails(storegrad)
      const storepg=JSON.parse(localStorage.getItem('postgraduationDetails')) || {};
      setpostgraduationDetails(storepg)
      setLoading(false);
    }, []);
    useEffect(() => {
      localStorage.setItem('matriculationDetails', JSON.stringify(matriculationDetails));
    }, [matriculationDetails]);
    useEffect(() => {
      localStorage.setItem('highschoolDetails', JSON.stringify(highschoolDetails));
    }, [highschoolDetails]);
    useEffect(() => {
      localStorage.setItem('graduationDetails', JSON.stringify(graduationDetails));
    }, [graduationDetails]);
    useEffect(() => {
      localStorage.setItem('postgraduationDetails', JSON.stringify(postgraduationDetails));
    }, [postgraduationDetails]);
    
    const handleonchangematri=(e)=>{
        const { name, value } = e.target;
    setmatriculationDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    }

    const handleonchangehs=(e)=>{
        const { name, value } = e.target;
    sethighschoolDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    }

    const handleonchangegrad=(e)=>{
        const { name, value } = e.target;
    setgraduationDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    }

    const handleonchangepg=(e)=>{
        const { name, value } = e.target;
    setpostgraduationDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    }
    const dispatch=useDispatch();

    const handlesubmit=(event)=>{
      event.preventDefault();
      dispatch(addmatri({matriculationDetails}))
      dispatch(addhs({highschoolDetails}))
      dispatch(addgrad({graduationDetails}))
      dispatch(addpg({postgraduationDetails}))
      navigate("/skillsandinterests")
    }
    if (loading) {
      return <p>Loading...</p>;
    }
  return (
    <div>
        <form>
          <br/>
            <h1>MATRICULATION DETAILS:</h1>
            <br/>
            <label>YEAR OF STARTING:</label>
            <input type="number"name="year_start"value={matriculationDetails.year_start}onChange={handleonchangematri}/>
            <label>YEAR OF ENDING:</label>
            <input type="number" name="year_end" value={matriculationDetails.year_end} onChange={handleonchangematri}/>
            <label>BOARD OF EDUCATION:</label>
            <input type="text" name="board" value={matriculationDetails.board} onChange={handleonchangematri}/>
            <label>INSTITUTION OF EDUCATION:</label>
            <input type="text" name="school" value={matriculationDetails.school} onChange={handleonchangematri}/>
            <label>MARKS ATTAINED:</label>
            <input type="number" name="marks" value={matriculationDetails.marks} onChange={handleonchangematri}/>
            <br/><br/>
            <h1>HIGHSCHOOL DETAILS:</h1> <br/>
            <label>YEAR OF STARTING:</label>
            <input type="number" name="year_start" value={highschoolDetails.year_start}onChange={handleonchangehs}/>
            <label>YEAR OF ENDING:</label>
            <input type="number" name="year_end" value={highschoolDetails.year_end} onChange={handleonchangehs}/>
            <label>BOARD OF EDUCATION:</label>
            <input type="text" name="board" value={highschoolDetails.board} onChange={handleonchangehs}/>
            <label>INSTITUTION OF EDUCATION:</label>
            <input type="text" name="school" value={highschoolDetails.school} onChange={handleonchangehs}/>
            <label>MARKS ATTAINED:</label>
            <input type="number" name="marks" value={highschoolDetails.marks} onChange={handleonchangehs}/>
            <br/><br/>
            <h1>GRADUATION DETAILS:</h1> <br/>
            <label>YEAR OF STARTING:</label>
            <input type="number"name="year_start"value={graduationDetails.year_start}onChange={handleonchangegrad}/>
            <label>YEAR OF ENDING:</label>
            <input type="number" name="year_end" value={graduationDetails.year_end} onChange={handleonchangegrad}/>
            <label>BOARD OF EDUCATION:</label>
            <input type="text" name="board" value={graduationDetails.board} onChange={handleonchangegrad}/>
            <label>INSTITUTION OF EDUCATION:</label>
            <input type="text" name="school" value={graduationDetails.school} onChange={handleonchangegrad}/>
            <label>MARKS ATTAINED:</label>
            <input type="number" name="marks" value={graduationDetails.marks} onChange={handleonchangegrad}/>
            <br/><br/>
            <h1>POST GRADUATION DETAILS:</h1> <br/>
            <label>YEAR OF STARTING:</label>
            <input type="number"name="year_start"value={postgraduationDetails.year_start}onChange={handleonchangepg}/>
            <label>YEAR OF ENDING:</label>
            <input type="number" name="year_end" value={postgraduationDetails.year_end}onChange={handleonchangepg}/>
            <label>BOARD OF EDUCATION:</label>
            <input type="text" name="board" value={postgraduationDetails.board} onChange={handleonchangepg}/>
            <label>INSTITUTION OF EDUCATION:</label>
            <input type="text" name="school" value={postgraduationDetails.school} onChange={handleonchangepg}/>
            <label>MARKS ATTAINED:</label>
            <input type="number" name="marks" value={postgraduationDetails.marks} onChange={handleonchangepg}/>

            <button type='submit' onClick={handlesubmit}>SUBMIT</button>
        </form>
    </div>
  )
}

export default EducationDetails