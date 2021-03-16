import React from "react";


const ListItem = ({id, done, value, complitedTodo, editTodo, deleteTodo}) => {
    return <li>
        <input type="checkbox"  checked={done} onChange={()=>complitedTodo(id)} />
        <input defaultValue={value}  onBlur={(e)=>editTodo(id, e.target.value)}/>
        <button  onClick={()=>deleteTodo(id)}>del</button>
    </li>
}

function ListTodo({todos , ...props }){



    return(<ul>{
        todos.map((item)=>( <ListItem key={item.id} id={item.id} done={item.done} value={item.text} {...props} />))
    }</ul>)
}

export default ListTodo