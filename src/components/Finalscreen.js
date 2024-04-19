import React from 'react'
import { useSelector } from 'react-redux';
import './Finalscreen.css'

function Finalscreen() {
    const basicDetail=useSelector((store)=> store.basicdet);
    console.log(`store objects assigned`)
    console.log(basicDetail)
    const matri=useSelector((store)=>store.matridets);
    console.log(matri)
    const hs=useSelector((store)=>store.hsdets);
    console.log(hs)
    const grad=useSelector((store)=>store.graddets);
    console.log(grad)
    const pg=useSelector((store)=>store.pgdets);
    console.log(pg)
    const summaryVal=useSelector((store)=> store.summary);
    console.log(`store objects assigned`)
    console.log(summaryVal)
    const taskslist=useSelector((store)=>store.tasksList)
    console.log(taskslist)
    const workDetails =useSelector((store)=>store.workdet)
    console.log(workDetails.comp_name)
    const proDetails=useSelector((store)=>store.prodet)
    console.log(proDetails)
  const referen=useSelector((store)=>store.references)
    console.log(referen)
    const datacheck =
    basicDetail ||
    matri ||
    hs ||
    grad ||
    pg ||
    summaryVal ||
    taskslist ||
    workDetails ||
    proDetails ||
    referen;
    const data= datacheck.length===0?false:true;
    console.log(data)
  return (
    <div className="resume">
        { data ? (
        <>
      {basicDetail?(<header>
        <h1>{basicDetail.firstname} {basicDetail.lastname}</h1>
        <p>{basicDetail.mailid} | {basicDetail.phno} | {basicDetail.address}</p>
      </header>):(<h1>NO DATA</h1>)}
        {summaryVal&&(
      <section className="summary">
        <h2>Summary</h2>
        <p>{summaryVal}</p>
      </section>)}

      <section>
        <h2>Education</h2>
        <table id="edu">
            <thead>
            <tr>
                <th>QUALIFICATION</th>
                <th>TENURE</th>
                <th>BOARD</th>
                <th>INSTITUTION</th>
                <th>PERCENTAGE</th>
            </tr></thead>
            <tbody>
            {matri&&(<tr>
                <td>CLASS X</td>
                <td>{matri.year_start}-{matri.year_end}</td>
                <td>{matri.board}</td>
                <td>{matri.school}</td>
                <td>{matri.marks}</td>

            </tr>)}
            {hs&&(<tr>
                <td>CLASS XII</td>
                <td>{hs.year_start}-{hs.year_end}</td>
                <td>{hs.board}</td>
                <td>{hs.school}</td>
                <td>{hs.marks}</td>

            </tr>)}
            {grad &&( <tr>
               <td>GRADUATION</td>
                <td>{grad.year_start}-{grad.year_end}</td>
                <td>{grad.board}</td>
                <td>{grad.school}</td>
                <td>{grad.marks}</td>

            </tr>)}
            {pg &&(  <tr>
                <td>POST GRADUATION</td>
                <td>{pg.year_start}-{pg.year_end}</td>
                <td>{pg.board}</td>
                <td>{pg.school}</td>
                <td>{pg.marks}</td>

            </tr>)}</tbody>
        </table>
      </section>

      {taskslist &&(  <section className="tasks">
        <h2>Skills</h2>
        <ul>
          {taskslist.map((task, index) => (
            <li key={index}>{task.taskName} - {task.level}</li>
          ))}
        </ul>
      </section>)}
      

      {workDetails &&(  <section className="work-details">
        <h2>Work Experience</h2>
            {/*<div key={index} className="work-item">*/}
            <ul>
          {workDetails.map((task, index) => (
            <li key={index}>{task.comp_name} - {task.dec_role}</li>
          ))}
        </ul>
        
      </section>)}

      {proDetails&&(<section className="project-details">
        <h2>Projects</h2>
          <div  className="project-item">
            <h3>{proDetails.pro_name}</h3>
            <p>{proDetails.pro_det}</p>
          </div>
      </section>)}

      {referen&&(<section className="project-details">
        <h2>References</h2>
          <div  className="project-item">
            <p>{referen}</p>
          </div>
      </section>)}

            </>): <h1>NO DATA AVAILABLE</h1>}
      
    </div>
        
  );
}

export default Finalscreen