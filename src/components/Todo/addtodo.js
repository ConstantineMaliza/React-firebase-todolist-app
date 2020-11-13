import React, { Component } from 'react';

import { withFirebase } from '../Firebase';
import '../Style/todo.css'

const newtodostate = {
    todo: '',
};

class AddToDo extends Component {
    constructor(props) {
        super(props);

        this.state = { ...newtodostate };
    }

    handleChange = (event) => {
        this.setState({
            todo: event.currentTarget.value,
            author: this.props.authUser.uid,

        });
    }


    handleSubmit = (event) => {
        // grab original todos from state 
        const { todo, author } = this.state;
        // todo text is result
        // append new todo with default state to todos
        this.props.firebase.todo().add({todo, author})
            .then(() => {
                // console.log(author);
                this.setState({ ...newtodostate });
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    }

    render() {
        const { todo } = this.state;
        return (

            <form onSubmit={this.handleSubmit} className="todo">
                <input name="todo" type="text" onChange={this.handleChange} value={todo} placeholder="Enter todo here...[Press Enter]" autoComplete="off" />
            </form>
        )
    }
}

export default withFirebase(AddToDo);