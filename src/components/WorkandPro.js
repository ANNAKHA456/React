import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addworkdet ,delwork,proworkdet, updatework} from '../redux/actions';
import { useNavigate } from 'react-router-dom';

function WorkandPro() {
     const [workdet,setworkdet]=useState({
        start_date:"",
        end_date:"",
        comp_name:"",
        dec_role:"",
     })
     const [prodet,setprodet]=useState({
        pro_name:"",
        pro_det:"",
     })
     const [edindex,setedindex]=useState(null);
         // const [loading,setLoading]=useState(true);
         const dispatch=useDispatch()
         const navigate=useNavigate()
   /* useEffect(() => {
      const isFirstLoad = localStorage.getItem('isFirstLoad') === null;

    if (isFirstLoad) {
      localStorage.clear();
      localStorage.setItem('isFirstLoad', 'false');
    }
      const works = JSON.parse(localStorage.getItem('workdet')) || {start_date: "", end_date: "", comp_name: "", dec_role: ""};
      setworkdet(works);
      const storepro=JSON.parse(localStorage.getItem('prodet')) || {};
      setprodet(storepro)
     // setLoading(false);
    }, []);
    useEffect(()=>{
        localStorage.setItem('workdet',JSON.stringify(workdet));},[workdet]
    );
    useEffect(()=>{
        localStorage.setItem('prodet',JSON.stringify(prodet));},[prodet]
    );*/
     const handleonchange =(e)=>{
        const {name,value}=e.target;
        setworkdet((prevdata)=>({
            ...prevdata,
            [name]:value,
        }));
        
     };
     const handlepro=(e)=>{
        const {name,value}=e.target;
        setprodet((prevdata)=>({
            ...prevdata,
            [name]:value,
        }));
     }
     const[edit,setedit]=useState({
      start_date:"",
        end_date:"",
        comp_name:"",
        dec_role:"",
     })
     const handleedit =(e)=>{
      const {name,value}=e.target;
      setedit((prevdata)=>({
          ...prevdata,
          [name]:value,
      }));
      
   };
   const handleadd=()=>{
      dispatch(addworkdet({workdet}))
      setworkdet({
         start_date: "",
         end_date: "",
         comp_name: "",
         dec_role: "",
       });
   }
     console.log(workdet)
    
     const handlesubmit=()=>{
        
        dispatch(proworkdet({prodet}))
        navigate("/refernces")
     };
     const handledel=(event)=>{
      console.log(event.target.dataset.task_name)
      dispatch(delwork(event.target.dataset.task_name))
     }
     const handleUpdate=()=>{
      console.log('inside handleupdate')
      console.log(edit)
      console.log(edindex)
      dispatch(updatework({edindex,edit}))
      setedindex(null);
     }
    // const [delindex,setdelindex]=useState();
     
     const workList=useSelector((store)=>store.workdet);
     console.log(workList)
     console.log(edindex)
  return (
  <div>
    <label>WORK DETAILS</label>
    <label>STARTING DATE:</label>
    <input type="date" onChange={handleonchange} name="start_date" value={workdet.start_date} />
    <label>ENDING DATE:</label>
    <input type="date" onChange={handleonchange} name="end_date" value={workdet.end_date} />
    <label>NAME OF THE COMPANY:</label>
    <input type="text" onChange={handleonchange} name="comp_name" value={workdet.comp_name} />
    <label>DESCRIPTION OF THE ROLE:</label>
    <textarea type="text" onChange={handleonchange} name="dec_role" value={workdet.dec_role} />
    <button type="button" onClick={handleadd}>
      ADD
    </button>

    {/* Display entered details with Edit and Delete buttons */}
    {workList.map((w, index) => (
      <div key={`${index}`}>
      <label>WORK DETAILS</label>
      <label>STARTING DATE:</label>
      <span>{w.start_date}</span>
      <label>ENDING DATE:</label>
      <span>{w.end_date}</span>
      <label>NAME OF THE COMPANY:</label>
      <span>{w.comp_name}</span>
      <label>DESCRIPTION OF THE ROLE:</label>
      <span>{w.dec_role}</span>
      <button onClick={() => handledel(index)}>Delete</button>
      <button onClick={() => setedindex(index)}>Edit</button>
    </div>
    ))}

    {/* Edit form */}
    {edindex !== null && (
      <div>
        <label>WORK DETAILS</label>
        <label>STARTING DATE:</label>
        <input type="date" onChange={handleedit} name="start_date" value={edit.start_date} />
        <label>ENDING DATE:</label>
        <input type="date" onChange={handleedit} name="end_date" value={edit.end_date} />
        <label>NAME OF THE COMPANY:</label>
        <input type="text" onChange={handleedit} name="comp_name" value={edit.comp_name} />
        <label>DESCRIPTION OF THE ROLE:</label>
        <textarea type="text" onChange={handleedit} name="dec_role" value={edit.dec_role} />
        <button onClick={handleUpdate}>Save</button>
      </div>
    )}

    {/* Form to enter project details */}
    <label>PROJECT DETAILS</label>
    <label>NAME OF THE PROJECT</label>
    <input type="text" name="pro_name" value={prodet.pro_name} onChange={handlepro} />
    <label>DETAILS</label>
    <textarea type="text" name="pro_det" value={prodet.pro_det} onChange={handlepro} />
    <button type="button" onClick={handlesubmit}>
      SUBMIT
    </button>
  </div>
  )
}

export default WorkandPro

 /* <div>

        <label>WORK DETAILS</label>

        <label>STARTING DATE:</label>
        <input type="date" onChange={handleonchange} name='start_date' value={workdet.start_date}/>

        <label>ENDING DATE:</label>
        <input type="date" onChange={handleonchange} name='end_date' value={workdet.end_date}/>
        <label>NAME OF THE COMPANY:</label>

        <input type="text" onChange={handleonchange} name='comp_name' value={workdet.comp_name}/>
        <label>DESCRIPTON OF THE ROLE:</label>
        <textarea type="text" onChange={handleonchange} name='dec_role' value={workdet.dec_role}/>
        <button type='submit' onClick={handleadd}>ADD</button>


        {work.map((w,index)=> index===edindex ?(
        <div key={`${index}${w.start_date}`}>
         <label>WORK DETAILS</label>
        <label>STARTING DATE:</label>
        <input type="date" onChange={handleedit} name='start_date' value={edit.start_date}/>
        <label>ENDING DATE:</label>
        <input type="date" onChange={handleedit} name='end_date' value={edit.end_date}/>
        <label>NAME OF THE COMPANY:</label>
        <input type="text" onChange={handleedit} name='comp_name' value={edit.comp_name}/>
        <label>{w.start_date}</label>
        <label>DESCRIPTON OF THE ROLE:</label>
        <input type="text" onChange={handleedit} name='dec_role' value={edit.dec_role}/>
        <button onClick={handleUpdate}>Save</button>
         </div>):(
             <div className="editfalse" key={`${index}${w.start_date}`}>
             <label>{work.start_date}</label>
             <label>{work.end_date}</label>
             <label>{w.comp_name}</label>
             <label>{w.dec_role}</label>
             <button data-task_name={index} onClick={handledel}>
               Delete
             </button>
             <button data-task_name={index} onClick={()=>setedindex(index)}>
               Edit
             </button>
           </div> 

         ))}
        <label>PROJECT DETAILS</label>
        <label>NAME OF THE PROJECT</label>
        <input type="text" name='pro_name' value={prodet.pro_name} onChange={handlepro} />
        <label>DEATAILS</label>
        <textarea type="text" name='pro_det' value={prodet.pro_det} onChange={handlepro}/>
        <button type="submit" onClick={handlesubmit}>SUBMIT</button>
    </div>*/