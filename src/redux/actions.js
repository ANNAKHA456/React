import { ADDINTER, ADD_SUMM, BASIC_DET,GET_DET, GRAD, HSDET, MATRI, PGDET, PRO_DET, REF_DET, WORK_DET} from "./actionTypes";
import {
    ADD_NEW_TASK,
    DELETE_TASK,UPDATE_TASK,EDIT_WORK,DELWORK,
  } from "./actionTypes";

export const addbasicdet=(field) =>({
    type:BASIC_DET,
    payload:field,
});
export const addinterest=(field) =>({
  type:ADDINTER,
  payload:field,
});
export const addmatri=(field) =>({
  type:MATRI,
  payload:field,
});
export const addhs=(field) =>({
  type:HSDET,
  payload:field,
});
export const addgrad=(field) =>({
  type:GRAD,
  payload:field,
});
export const addpg=(field) =>({
  type:PGDET,
  payload:field,
});

export const getbasicdet =()=>({
    type:GET_DET
});  
  export const addNewTaskAction = (newTask) => ({
    type: ADD_NEW_TASK,
    payload: newTask,
  });
  
  export const deleteTask = (taskName) => ({
    type: DELETE_TASK,
    payload: taskName,
  });
  
  /*export const editTask = (editText, newEdit) => ({
    type: EDIT_TASK,
    payload: { editText, newEdit },
  });

  export const editSelect = (editSel, index) => ({
    type: EDIT_SELECT,
    payload: { editSel, index },
  });*/

  export const updatetask= (editText,newEdit,editSel,index)=>({
    type:UPDATE_TASK,
    payload:{editText, newEdit,editSel, index}
  });

  export const addworkdet =(workdet)=>({
    type:WORK_DET,
    payload:workdet,
  });
  export const updatework=(index,detwork)=>({
    type:EDIT_WORK,
    payload:{index,detwork},
  });
  export const delwork=(index)=>({
    type:DELWORK,
    payload:{index}
  })

  export const proworkdet =(prodet)=>({
    type:PRO_DET,
    payload:prodet,
  });
  export const refdet =(refs)=>({
    type:REF_DET,
    payload:refs,
  });
  export const addsummary =(summ)=>({
    type:ADD_SUMM,
    payload:summ,
  });
