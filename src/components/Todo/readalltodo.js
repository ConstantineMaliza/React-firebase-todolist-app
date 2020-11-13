import React, { Component } from 'react';

import { withFirebase } from '../Firebase';


const state = {
    
    todos: [{
        text: 'A new todo name',
        done: false,
    }],
};
class ReadAllToDo extends Component {
     constructor(props){
         super(props);

         this.state={...state};

     }
    //  componentDidMount(){
    //     this.props.firebase.todos().onSnapshot((snapshot)=>{

    //         snapshot
    //     })
    //  }


    render(){
        const { todos } = this.state;
        return(
              <ul className="todos">
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
            </ul> 
        )
    }

}
export default withFirebase(ReadAllToDo)
