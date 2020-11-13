import React, { Component } from 'react';


import { withFirebase } from '../Firebase';

const UpdateAndDeleteTodo= ({todo})=>{
    const [title,setTitle] =React.useState(todo.title)

  const onUpdate =() =>{
    db.collection("Todolistapp").doc(todo.id).set({...todo,title})
   }
   const onDelete = () =>{
       db.collection("Todolistapp").doc(todo.id).delete()
   }
    return(
        <>
        <input 
        value={title}
        onChange={e =>{setTitle(e.target.value)}}
        />
        <button className="edit"  onClick={onUpdate}>Update</button>
        <button className="delete" onClick={onDelete}>Delete</button>
        </>
    )

}
export default UpdateAndDeleteTodo;