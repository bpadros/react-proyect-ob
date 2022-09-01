import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";
//importams la hoja de estilos
import "../../styles/task.scss";
import TaskForm from "../pure/forms/taskForm";

const TaskListComponent = () => {
  const defaultTask1 = new Task("Example1", "decription1", true, LEVELS.NORMAL );
  const defaultTask2 = new Task("Example2", "decription2", false, LEVELS.URGENT );
  const defaultTask3= new Task("Example3", "decription3", false, LEVELS.BLOCKING );


  //ESTADO DEL COMPONENTE
  const [tasks, setTasks] = useState([defaultTask1 ,defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  // control del ciclo de vida del componente
  useEffect(() => {
    console.log("task state has been modified");
    setTimeout(()=>{
      setLoading(false);
    },2000)
    
    return () => {
      console.log("task list componente id going to unmount");
    };
  }, [tasks]);


    function completeTask(task){
      console.log('Complete this task', task);
      const index = tasks.indexOf(task);
      const tempTasks = [...tasks];
      tempTasks[index].completed = !tempTasks[index].completed;
      //we update the state of the component with the new list of tasks and it will update the 
      //iteraction of the tasks in order to show the task updated
      setTasks(tempTasks)
    }

    function deleteTask(task){
      console.log('deelete this task', task);
      const index = tasks.indexOf(task);
      const tempTasks = [...tasks];
      tempTasks.splice(index,1);
      setTasks(tempTasks)
    }

    function addTask(task){
      console.log('deelete this task', task);
     
      const tempTasks = [...tasks];
      tempTasks.push(task)
      setTasks(tempTasks)
    }


      const Table= () =>{
        return (
          <table>
        <thead>
            <tr>
                <th scope='col'>Title</th>
                <th scope='col'>Description</th>
                <th scope='col'>Priority</th>
                <th scope='col'>Actions</th>
            </tr>
        </thead>
        <tbody>
          {tasks.map((task,index)=>{
            return (
                <TaskComponent 
                key={index} 
                task={task}
                complete={completeTask}
                remove={deleteTask}
                >
                </TaskComponent>
            )
          })}




           
        </tbody>
        </table>

        )
      }
let tasksTable

if(tasks.length>0){
  tasksTable= <Table></Table>
}else{
  
  tasksTable=
  (<div>
 <h3>There are no tasks to show</h3>
 <h4>Please create one</h4>
  </div>
 )
}

const loadingStyle = {
  fontSize: '30px',
  color: 'gray',
  fontWeight: 'bold'
}



  return (
    <div>
      <div className="col-12">
        <div className="card">
          {/* card header */}
          <div className="card-header p-3">
            <h5>Your tasks :</h5>
          </div>
          {/*card body (content) */}
          <div className="card-body" data-mdb-perfect-scrollbar='true' style={{position:'relative' , height:'400px'}}>
        {loading ? (<p style={loadingStyle}>Loading tasks...</p>) :tasksTable }
          </div>
         
        </div>
      </div>
      {/* TODO: aplicar un for/map para renderizar una lista*/}
      {/* <TaskComponent task={defaultTask}></TaskComponent> */}
      <TaskForm add={addTask} length={tasks.length}></TaskForm>
    </div>
  );
};

export default TaskListComponent;
