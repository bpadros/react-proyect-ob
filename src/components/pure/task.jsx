import React ,{useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task  } from '../../models/task.class';
import { LEVELS } from "../../models/levels.enum";
//importamos la hojas de estilo
import '../../styles/task.scss'


const TaskComponent = ({task ,complete , remove}) => {

    useEffect(() => {
       console.log('created task')
        return () => {
            console.log( ` Task :${task.name} is going to unmount  ` )
        };
    },[task]);

/**
 * Function that return a badge 
 * depending on the level of the task
 */
    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                <h6 className='mb-0'>
                <span className='badge bg-primary'>
                    {task.level}
                </span>
                </h6>)
            case LEVELS.URGENT:
                return(
                <h6 className='mb-0'>
                <span className='badge bg-warning'>
                    {task.level}
                </span>
                </h6>)
             case LEVELS.BLOCKING:
                return(
                <h6 className='mb-0'>
                <span className='badge bg-danger'>
                    {task.level}
                </span>
                </h6>)    
        
            default:
                break;
        }
    }
/**
 * 
 *  function that return icon depending on completion of the task
 */
    function taskCompletedIcon(){
        if(task.completed){
            return (<i onClick={()=>complete(task)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>) 
        }else{
            return  (<i onClick={()=>complete(task)} className='bi-toggle-off task-action' style={{color:'grey'}}></i>)
        }
    }

    const taskCompleted = {
        color:'gray',
        textDecoration: 'line-through',
    }

    const taskPending = {
        fontWeight: 'bold',
        color: 'tomato',
       }


    return (

        <tr className='fw-normal' style={task.completed? taskCompleted : taskPending }>
        <th>
            <span className='ms-2'>{task.name}</span>
        </th>
        <td className='align-middle'>
        <span className='ms-2'>{task.description}</span>
        </td>
        <td className='align-middle'>
        {/*Execution of function to return badge element*/}
       {taskLevelBadge()}
        </td>
        <td className='align-middle'>
        {/*execution of function to return icon depending on completion */}
        {taskCompletedIcon()}
      
         <i onClick={()=>remove(task)} className='bi-trash' style={{color: 'tomato'}}></i>



        {/* <span className='ms-2'>{task.completed ? 'Completed' : 'Pending'}</span> */}
        </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),
    complete : PropTypes.func.isRequired,
    remove : PropTypes.func.isRequired
};


export default TaskComponent;
