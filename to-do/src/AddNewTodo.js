import React from "react";


class AddNewTodo extends React.Component{
    constructor(props) {
        super(props);
        this.handlChange = this.handlChange.bind(this)
        this.handlClick = this.handlClick.bind(this)
        this.state = {valueInput:''}
    }

    handlChange(e){
        this.setState({valueInput:e.target.value})
    }
    handlClick(){
        this.props.createNewTodo(this.state.valueInput)
    }

    render() {
        return(
            <div>
                <input placeholder="Create new To-do" onChange={this.handlChange} />
                <button onClick={this.handlClick} >Add...</button>
            </div>

    )
    }

}
export default AddNewTodo