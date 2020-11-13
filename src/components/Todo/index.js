import React, { Component } from 'react';
import '../Style/todo.css';

import { withFirebase } from '../Firebase';
import AddToDo from './addtodo';
import ReadAllToDo from './readalltodo';

// const newtodostate = {
//     todo: '',
//     // todos: [{
//     //     text: 'A new todo name',
//     //     done: false,
//     // }],
// };

class ToDoPage extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = { ...newtodostate };
    // }
    
    // handleChange = (event) => {
    //     this.setState({
    //         todo: event.currentTarget.value,
    //     });
    // }

    // // handleCheckbox = (index) => {
    // //     const { todos } = this.state;
    // //     todos[index].done = !todos[index].done;
    // //     this.setState({
    // //         todos,
    // //     });
    // // }

    // handleSubmit = (event) => {
    //     // grab original todos from state 
    //     const { todo } = this.state;
    //     // todo text is result
    //     // append new todo with default state to todos
    //      this.props.firebase.todo().add({ todo })
    //         .then(() => {
    //             this.setState({ ...newtodostate });
    //         })
    //         .catch(error => {
    //             this.setState({ error });
    //           });

    //     // this.setState({
    //     //     todo: '',
    //     //     todos: [
    //     //         {
    //     //             text: event.currentTarget.todo.value,
    //     //             done: false,
    //     //         },
    //     //         ...todos,
    //     //     ],
    //     // });
    //     event.preventDefault();
    // }
    // // handleRemove = (index) => {
    // //     // grab original todos from state
    // //     const { todos } = this.state;
    // //     // create an array excluding the array value based on the index
    // //     this.setState({
    // //         todo: '',
    // //         todos: [
    // //             ...todos.slice(0, index),
    // //             ...todos.slice(index + 1),
    // //         ],
    // //     });
    // // }
    render() {
        // const { todo } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <h1>React Todo App</h1>
                </header>
                <main>
                    <AddToDo/>
                    <ReadAllToDo/>


                    {/* <ul className="todos">
                        {(todos.length === 0)
                            ? (<li>No todos yet</li>)
                            : (todos.map((item, key) => (
                                <li checked={item.done} key={`list-${(key + 1)}`} >
                                    <input onChange={() => this.handleCheckbox(key)} checked={item.done} className="form-control" type="checkbox" />
                                    <span style={{
                                        textDecoration: (item.done) ? 'line-through' : 'none',
                                    }}
                                    >
                                        {item.text}
                                    </span>
                                    <button
                                        onSubmit={this.handleSubmit}
                                        type="button"
                                        className="btn btn-sm btn-danger"
                                        style={{

                                        }}
                                    >
                                        &times;
                    </button>
                                </li>
                            )))
                        }
                    </ul> */}
                </main>
            </div>
        )
    }
}

export default withFirebase(ToDoPage);