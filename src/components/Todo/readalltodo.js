import React, { Component } from 'react';

import { withFirebase } from '../Firebase';


const state = {

    todos: [],
};

class ReadAllToDo extends Component {
    constructor(props) {
        super(props);
        this.onDataChange = this.onDataChange.bind(this);

        this.state = { ...state };

    }
   
        

 
    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(function(authUser){
      if(authUser) console.log(authUser)
        console.log(user);
    });
        this.unsubuscribe =  this.props.firebase.todos().onSnapshot(this.onDataChange)

        
       
    }
    // componentDidMount() {
    //    if(this.props.authUser)  {
    //     this.props.firebase.todos().where('author', '==', this.props.authUser.uid).onSnapshot(this.onDataChange)
    //      console.log(this.props.authUser)
    //     .catch((error) =>{
    //         console.log(error)
    //     })
    //     }
        

    // }
    componentWillUnmount() {
        this.listener();
        this.unsubuscribe();
    }   
    onDataChange(items) {
        let todoList = [];

        items.forEach((item) => {
            let id = item.id;
            let data = item.data();
            todoList.push({
                id: id,
                title: data.todo,
            });
        });

        this.setState({
            todos: todoList,
            author: this.props.authUser.uid,
        });
        
    }

    handleRemove = (index) => {

        // grab original todos from state

        const { todos } = this.state;
        // create an array excluding the array value based on the index

        this.props.firebase.todo().doc(todos[index].id).delete()


    }
    handleEdit = (index, todo) => {

        // grab original todos from state

        const { todos } = this.state;
        // create an array excluding the array value based on the index

        this.props.firebase.todo().doc(todos[index].id).update({ todo: todos[index].title })


    }


    render() {
        const { todos } = this.state;
        return (
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <input type="checkbox" />
                        <span style={{}}></span>
                        <input value={todo.title} onChange={e => { this.setState(previousState => ({ ...previousState, todos: previousState.todos.map((elm, i) => i !== index ? elm : { ...elm, title: e.target.value }) })) }} />
                        {/* {todo.title} */}
                        <button onClick={(e) => this.handleEdit(index, e.target.value)}>update</button>
                        <button
                            onClick={() => this.handleRemove(index)}
                            type="button"
                            className="btn btn-sm btn-danger"
                            style={{}}>&times;
                    </button>
                    </li>
                ))}
            </ul>
        )
    }

}



export default withFirebase(ReadAllToDo)
