import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import axios from 'axios'

//creact icons import
import {FaTrashAlt, FaEdit} from 'react-icons/fa'
import TodoEdit from './TodoEdit'

export default function SingleTodo(props) {
  const {currentUser} = useAuth()
  //The below hook will open/close our edit modal
  const [showEdit, setShowEdit] = useState(false)

  //flipDone logic
  const flipDone = () => {
    let updatedToDo = {
        toDoId: props.todo.toDoId,
        name: props.todo.name,
        done: !props.todo.done,
        categoryId: props.todo.categoryId
    }
    axios.put(`http://todo.kurtiscaldwell.com/api/ToDos/${props.todo.toDoId}`, updatedToDo).then(response => {
        console.log(response)
        props.getTodos()
    })
}

  //Below is our logic for delete
  const deleteTodo = (id) => {
    if (window.confirm(`Are you sure you want to delete ${props.todo.name}?`)) {
      axios.delete(`http://todo.kurtiscaldwell.com/api/ToDos/${id}`).then(() => {props.getTodos()})
    }
  }

  return (
    <div className='singleTodo col-md-5 m-4'>
      {/* EDIT UI */}
      {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN &&
        <div>
          <button id='editLink' onClick={() => setShowEdit(true)}>
            <FaEdit />
          </button>
          <button className='m-1 rounded' id='deleteLink' onClick={() => deleteTodo(props.todo.toDoId)}>
              <FaTrashAlt />
            </button>

          {showEdit &&
            <TodoEdit
              todo={props.todo}
              showEdit={showEdit}
              setShowEdit={setShowEdit}
              getTodos={props.getTodos} />
          }
        </div>
      }


        <h4>{props.todo.name}</h4>
        <p>
          Done?
          <br />
        </p>
          <input className='checkbox' type='checkbox' checked={props.todo.done} onChange={() => flipDone()} />
        {/* {props.todo.done === true ?
            <p>Complete</p> :
            <p>Not Finished</p>
        } */}
    </div>
  )
}
