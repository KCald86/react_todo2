import React from 'react'
import { Modal } from 'react-bootstrap'
import TodoForm from './TodoForm'

export default function TodoCreate(props) {
  return (
    <Modal
        show={props.showEdit}
        onHide={() => props.setShowEdit(false)}>
            <Modal.Header className='bg-red' closeButton>
                <h3>Editing {props.todo.name}</h3>
            </Modal.Header>
            <Modal.Body>
                <TodoForm getTodos={props.getTodos} setShowEdit={props.setShowEdit} todo={props.todo} />
            </Modal.Body>
    </Modal>

    // <article className='createTodo m-2 text-white justify-content-center'>
    //     <TodoForm
    //         setShowCreate={props.setShowCreate}
    //         getTodos={props.getTodos}/>
    // </article>
  )
}
