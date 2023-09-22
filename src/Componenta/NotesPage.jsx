import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, deleteNote } from '../Features/NotesSlice';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function NotesPage(props) {

    const [inptxt, setInptxt] = useState('')
    const [inptxt2, setInptxt2] = useState('')
    const DispBoxVal = useSelector((state) => state.NotesPageReducer)
    const dispatch = useDispatch()
const handleChange = (e) => {


        setInptxt(e.target.value);



    }

    const handleChange2 = (e) => {


        setInptxt2(e.target.value);



    }

    const handleClick = () => {

        const data = {
            id: uuidv4(),
            content1: inptxt,
            content2: inptxt2

        }
        dispatch(addNote(data))


        console.log(data)

        setInptxt('')
        setInptxt2('')

    }
const handleDelete = (id) => {
        dispatch(deleteNote(id));
    }



    return (

        <div className=' addnoteboxmain container-fluid mt-5'>
            <div className='addnotebox container-fluid '>

                <h1 >Add a Note</h1>

                <input className='addnotetxtbox' type="text" placeholder='Title' value={inptxt} onChange={handleChange} />
                <input type="text" placeholder='Take a note...' value={inptxt2} onChange={handleChange2} className='mt-2 addnotetxtbox2' />


                <div className='timeclickbox'>



                    <button className='addclick mt-3' onClick={handleClick}>Add</button>

                    <button className='remtime mt-5 mb-2'>Last 5Mins</button>



                </div>



            </div>

            <div className='display-container mt-5'>
                <h1 className='mynotes'> <FontAwesomeIcon icon={faNoteSticky} /> My Notes</h1>

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
                    <div>No notes added here</div>
                )}
            </div>


        </div>
    );
}

export default NotesPage;