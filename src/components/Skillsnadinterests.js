import React, { useState } from 'react'
import './Skillsnadinterests.js'
/*function Skillsnadinterests() {
    const [show,setshow]=useState(false);
    const [values, setValues] = useState([[null, null]]); // Initialize as a 2D array

 const handleInputChange = (event, i) => {
    const newValues = [...values];
    newValues[i][0] = event.target.value;
    setValues(newValues);
  };

  const handleSelectChange = (event, i) => {
    const newValues = [...values];
    newValues[i][1] = event.target.value;
    setValues(newValues);
  };

  const [skills,setskills]=useState([]);

  return (
    <div>
        <label>ENTER YOUT SKILLS:</label>
        <button onClick={()=>setshow(true)}>ADD</button>
        {show && values.map((value1D, i) => (
        <div key={i}>
                <input type='text' name='skill' placeholder='enter your skill' value={value1D[0] || ''} onChange={(e) => handleInputChange(e, i)} />
                <select value={value1D[1] || ''} onChange={(e) => handleSelectChange(e, i)}>
                    <option value="BEGINER">BEGINNER</option>
                    <option value="INTERMEDIATE">INTERMIDIATE</option>
                    <option value="ADVANCED">ADVANCED</option>
                </select>
                <p>Input: {value1D[0]}</p>
                <p>Selected option: {value1D[1]}</p>
                 </div>
        ))}
    </div>
  )
}


}
export default Skillsnadinterests*/

import { useDispatch, useSelector } from "react-redux";
import { addNewTaskAction, addinterest, updatetask } from "../redux/actions";
import { deleteTask} from "../redux/actions";
import { useNavigate } from 'react-router-dom';
import './Skillsnadinterests.css'
function Skillsnadinterests() {

    const [newTask, setNewTask] = useState({
      skill:"",
      level:"",
    });
    const[skill,setskill]=useState("");
    const dispatch = useDispatch();

    function handleInput(event) {
      setNewTask({
        ...newTask,
        skill: event.target.value
      });
    }
    function handleselect(event) {
      setNewTask({
        ...newTask,
        level: event.target.value
      });
    }
    function handleOnClick() {
      console.log('inside add new task')
      dispatch(addNewTaskAction(newTask));
      setNewTask({
        level:"",
        skill:""
      });
    }
    const [editText, setEditText] = useState("");
  const [newEdit, setNewEdit] = useState("");
  const [editSel,setEditSel]=useState("");
  const storeObjects = useSelector((store) => store);
  const [index,setindex]=useState(0);
  const navigate=useNavigate();
  const handleDelete = (event) => {
    dispatch(deleteTask(event.target.dataset.task_name));
  };
  const handlesubmit=(event)=>{
    event.preventDefault();
    dispatch(addinterest(skill))
    navigate("/workandpojects")
  }
  const handleEdit = (event) => {
    //console.log(event.target.dataset.task_name);
    setEditText(event.target.dataset.task_name);
  };
  const handleEditTextbox = (event) => {
    // console.log(event.target.value);
    setNewEdit(event.target.value);
  };
  const handleUpdate = () => {
   // dispatch(editTask(editText, newEdit));
   // console.log(dispatch(editTask(editText, newEdit)))
   // dispatch(editSelect(editSel,index))
   dispatch(updatetask(editText,newEdit,editSel,index))
    setEditText('')
    setEditSel("")
    console.log(storeObjects.tasksList)
  };
 console.log(storeObjects.tasksList)
    return (
      <div className='add'><br/>
        <h2>ADD YOUR SKILLS: </h2>
        <input type="text" onChange={handleInput} value={newTask.skill}/>
        <select onChange={handleselect} value={newTask.level} >
          <option value="" disabled selected>Choose a level:</option>
          <option value="BEGINER">BEGINNER</option>
          <option value="INTERMEDIATE">INTERMIDIATE</option>
          <option value="ADVANCED">ADVANCED</option>
        </select>
        <button onClick={handleOnClick}>Add Task</button>

      {storeObjects.tasksList.map((task,index) =>
        task.taskName === editText ? (
          <div className="edittrue" key={`${index}${task.taskName}`}>
           {/*<textarea  value={editText} placeholder={"Enter new Task"} onChange={handleEditTextbox} />
            <textarea type="text" name="editbox" value={editText} onChange={handleEditTextbox} />*/}
            <input type="text" placeholder={editText} onBlur={handleEditTextbox} />
            <select onChange={(event) => {
          setEditSel(event.target.value);
          setindex(index);
        }}
        value={editSel} >
          <option value="" disabled selected>Choose a level:</option>
          <option value="BEGINER">BEGINNER</option>
          <option value="INTERMEDIATE">INTERMIDIATE</option>
          <option value="ADVANCED">ADVANCED</option>
        </select>
            <button onClick={handleUpdate}>Save</button>
          </div>) : (
          <div className="editfalse" key={`${index}${task.taskName}${task.level}`}>
            <label>{task.taskName}</label>
            <label>{task.level}</label>
            <button data-task_name={task.taskName} onClick={handleDelete}>
              Delete
            </button>
            <button data-task_name={task.taskName} onClick={handleEdit}>
              Edit
            </button>
          </div> )) }
          <br/><br/><br/>
          <h2>ENTER YOU INTERESTS:</h2>

          <input type="text" placeholder='ENTER SOME OF YOUR INTERESTS' value={skill} onChange={(event)=>{setskill(event.target.value)}}/>
          <button type='submit' onClick={handlesubmit}>SUBMIT</button>
    </div>
    );
    

}
export default Skillsnadinterests