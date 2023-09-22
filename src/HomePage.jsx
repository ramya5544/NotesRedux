import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './TasksPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { faListCheck, faNoteSticky } from '@fortawesome/free-solid-svg-icons';

function HomePage(props) {

    const [inptxt, setInptxt] = useState('')
    const [inptxt2, setInptxt2] = useState('')



    const DispBoxVal = useSelector((state) => state.NotesPageReducer)
    

   
    const handleChange = (e) => {


        setInptxt(e.target.value);



    }

    const handleChange2 = (e) => {


        setInptxt2(e.target.value);



    }

   




    const handleClick = () =>{
        const data = {
            id: uuidv4(),
            content1: inptxt,
            content2: inptxt2

        }
        addNote(data)


        console.log(data)

        setInptxt('')
        setInptxt2('')

    }

    

    const handleDelete = (id) => {
        deleteNote(id);
    }
    const [taskText, setTaskText] = useState('');
    const [taskTitle, setTaskTitle] = useState('');
    const taskList = useSelector((state) => state.tasks);

    const handleTaskTextChange = (e) => {
        setTaskText(e.target.value);
    };

    const handleTaskTitleChange = (e) => {
        setTaskTitle(e.target.value);
    };

    const handleAddTask = () => {
        if (taskText.trim() !== '' && taskTitle.trim() !== '') {
            const newTask = {
                id: uuidv4(),
                title: taskTitle,
                text: taskText,
                completed: false,
            };

            addNote(data)
            setTaskText('');
            setTaskTitle('');
        }
    };


    const handleDeleteTask = (taskId) => {
        deleteTask(taskId);
    };

 return (
 <div>

            <div className='display-container mt-5'>
                <h1 className='mynotes'>Notes section</h1>


                <h2 className='mynotes mt-5'> <FontAwesomeIcon icon={faNoteSticky} /> My Notes</h2>

                {DispBoxVal.length > 0 ? (
                    <div className="card-container horizontal-card-list mt-1">
                        {DispBoxVal.map((BoxVal) => (
                            <div key={BoxVal.id} className="card">
                                <div className="card-body">
                                    <h1 className='addnotetxt'> {BoxVal.content1}</h1>
                                    <div className='card-content'>
                                        <p className='addnotetxt'>  {BoxVal.content2}</p>

                                        <button className="deletebtn" onClick={() => { handleDelete(BoxVal.id) }}>
                                            <FontAwesomeIcon icon={faTrashCan} />   </button></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>No notes added</div>
                )}
            </div>


























            <h2 className='mt-5 mynotes'>

                <FontAwesomeIcon icon={faListCheck} />

                My Tasks</h2>

            <div className="Tasks container-fluid">






                <div className="TasksList container-fluid mt-5 py-3">

                    {taskList.length > 0 ? (
                        taskList.map((task) => (
                            <div key={task.id} className="mt-4 task-item">
                                <div
                                    className={`task-checkbox  ${task.completed ? 'checked' : ''}`}
                                    onClick={() => {
                                    }}
                                ></div>
                                <div className="task-content">
                                    <h3>{task.title}</h3>
                                    <p>{task.text}</p>
                                </div>
                                <div
                                    className="delete-button "
                                    onClick={() => handleDeleteTask(task.id)}
                                >
                                    <FontAwesomeIcon icon={faTrashCan} />

                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="no-tasks-message ">No tasks added</div>
                    )}










                </div>
            </div>


        </div>

    );
}

export default HomePage;