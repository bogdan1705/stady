import React from "react";
import './App.css';
import AddNewTodo from "./AddNewTodo";
import ListTodo from "./ListTodo";

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todos: []}
        this.createNewTodo = this.createNewTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.editTodo = this.editTodo.bind(this)
        this.complitedTodo = this.complitedTodo.bind(this)
    }

    createNewTodo(value) {
        // let todos = this.state.todos
        //     todos.push()
        // this.setState({todos})
        this.setState((state) => ({...state, todos: [...state.todos, {text: value, done: false, id: +new Date()}]}))
    }

    deleteTodo(id) {
        this.setState((state) => ({...state, todos: state.todos.filter((item) => item.id !== id )}))
    }

    editTodo(id, value) {
        this.setState((state) => ({
            ...state, todos: state.todos.map((item) => {
                if (item.id === id) return {...item, text: value}
                return item
            })
        }))
    }

    complitedTodo(id) {
        this.setState((state) => ({
            ...state, todos: state.todos.map((item) => {
                if (item.id === id) return {...item, done: !item.done}
                return item
            })
        }))
    }

    render() {

        const sortTodos = [...this.state.todos].sort((a, b) =>  b.done ? -1 : 1)
        console.log(sortTodos)
        return (
            <div>
                <h1>My to-dos</h1>
                <AddNewTodo createNewTodo={this.createNewTodo}/>
                <hr/>
                <ListTodo todos={sortTodos} deleteTodo={this.deleteTodo} editTodo={this.editTodo}
                          complitedTodo={this.complitedTodo}/>
            </div>

        )
    }

}

export default ToDo;