import {
  BASIC_DET, GET_DET, ADD_NEW_TASK,
  DELETE_TASK, UPDATE_TASK, WORK_DET,EDIT_WORK,DELWORK, PRO_DET, REF_DET, ADD_SUMM, MATRI, HSDET, GRAD, PGDET, ADDINTER
} from "./actionTypes"
import initialState from "./initialState";
// eslint-disable-next-line
export default (store = { initialState }, action) => {
  console.log("reducer active...")
  switch (action.type) {
    case BASIC_DET:
      //return {
      //  ...store,

      // [action.field]: action.value,
      // };
      console.log(`inside redducer.js function`)
      console.log(action.payload)
      const newtask = action.payload.formData;
      console.log(newtask)
      // store.basicdet={...action.payload};
      // console.log(`value assigned ${store.basicdet}`)
      // break;
      return {
        ...store,
        basicdet: action.payload.formData,
      }

    case GET_DET:
      break;

    case ADD_NEW_TASK:
      const newTaskList = [...store.tasksList];
      console.log(newTaskList)
      console.log(action.payload)
      newTaskList.push({
        taskName: action.payload.skill,
        level: action.payload.level,
      });
      console.log(newTaskList)
      return {
        ...store,
        tasksList: newTaskList,
      };

    case DELETE_TASK:

      return {
        ...store,
        tasksList: [...store.tasksList].filter(
          (task) => action.payload !== task.taskName
        ),
      };

    case UPDATE_TASK:
      const index = action.payload.index;

      if (index >= 0 && index < store.tasksList.length) {
        const updatedTasksList = store.tasksList.map((task, i) => {
          if (i === index) {
            // Update both 'taskName' and 'level'
            return {
              ...task,
              taskName: action.payload.newEdit,
              level: action.payload.editSel,
            };
          }
          return task;
        });
        console.log(updatedTasksList)
        return {
          ...store,
          tasksList: updatedTasksList,
        };
      }

      return store;
      case WORK_DET:
      console.log(action.payload.workdet)
      const newTaskLi = [...store.workdet];
      console.log(newTaskLi)
      console.log(action.payload)
      newTaskLi.push({
        start_date: action.payload.workdet.start_date,
        end_date:action.payload.workdet.end_date,
        comp_name:action.payload.workdet.comp_name,
        dec_role:action.payload.workdet.dec_role,
      });
      console.log(newTaskLi)
      return {
        ...store,
        workdet: newTaskLi,
      };
    case EDIT_WORK:
      console.log('inside edit work reducer')
      console.log(store.workdet)
      console.log(action.payload.index.edit)
      console.log(action.payload.index.edindex)
      const updatedWorkDetails = store.workdet.map((work, i) => {
        if (i === action.payload.index.edindex) {
          return {
            ...work,
            start_date: action.payload.index.edit.start_date,
            end_date: action.payload.index.edit.end_date,
            comp_name: action.payload.index.edit.comp_name,
            dec_role: action.payload.index.edit.dec_role,
          };
        }
        return work;
      });

      console.log(updatedWorkDetails);

      return {
        ...store,
        workdet: updatedWorkDetails,
      };
      case DELWORK:
        console.log(`inside reducer for delowrk`)
  
        return {
          ...store,
          workdet: store.workdet.filter((_, index) => index !== action.payload.index.edindex),
        };
    case ADD_SUMM:
      console.log(action.payload.summ)
      return {
        ...store,
        summary: action.payload.summ,
      }
    case ADDINTER:
      return {
        ...store,
        interests: action.payload.skill,
      }
    case MATRI:
      console.log(action.payload)
      return {
        ...store,
        matridets: action.payload.matriculationDetails
      }
    case HSDET:
      console.log(action.payload)
      return {
        ...store,
        hsdets: action.payload.highschoolDetails
      }
    case GRAD:
      console.log(action.payload)
      return {
        ...store,
        graddets: action.payload.graduationDetails
      }
    case PGDET:
      console.log(action.payload)
      return {
        ...store,
        pgdets: action.payload.postgraduationDetails
      }
    case PRO_DET:
      console.log(action.payload.prodet)
      return {
        ...store,
        prodet: action.payload.prodet,
      }
    case REF_DET:
      return {
        ...store,
        references: action.payload.refs,
      }
    default:
      return store;
  }
};

    /* case EDIT_TASK:
      const y=[...store.tasksList]
      console.log(y)
      const temp= {
        ...store,
        tasksList: [...store.tasksList].map((task) => ({
          taskName:
            task.taskName === action.payload.editText
              ? action.payload.newEdit
              : task.taskName,
        })),
      }; console.log(temp)
      return temp;

      case EDIT_SELECT:
        /*const ind=action.payload.index;
        const newtasklist=[...store.tasksList]
        newtasklist[ind]={
          ...newtasklist[ind], level:action.payload.editSel,
        }
        return t;
        const index =action.payload.index;
        if (index >= 0 && index < store.tasksList.length) {
          store.tasksList[index] = {
            ...store.tasksList[index],
            level: action.payload.editSel,
            // other properties: e.g., level: newLevel
          };}
          const updatetask ={
            ...store, taskslist:
          }
          console.log(store.tasksList)
          const editSel=action.payload.editSel;
          const index =action.payload.index;
        if (index >= 0 && index < store.tasksList.length) {
          const updatedTasksList = store.tasksList.map((task, i) => {
            if (i === index) {
              return {
                ...task,
                level: editSel,
              };
            }
            return task;
});
console.log(updatedTasksList)
return {
...store,
tasksList: updatedTasksList,
};
}

return store;

const index =action.payload.index;
const editSel=action.payload.editSel;
const tp= {
...store,
tasksList: [...store.tasksList].map((task,i) => ({
level: i===index? editSel:task.level
})),
}; 
console.log(tp)
return tp;

const index =action.payload.index;
const editSel=action.payload.editSel;
const l=[...store.tasksList]
console.log(l)
console.log(l[index])
return store;

     */