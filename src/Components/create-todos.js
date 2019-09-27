import React, { Component } from 'react';

class CreateTodos extends Component {
    constructor(props){
        super(props);
        this.state = {
            todo_name:'',
            todo_description:'',
            todo_priority:'',
            todo_completed:false,
        }
    }
    onChangeTodoName =(event) =>{
        this.setState({
            todo_name: event.target.value
        });
    }
    onChangeTodoDescription =(event) =>{
        this.setState({
            todo_description: event.target.value
        });
    }
    onChangeTodoPriority =(event) =>{
        this.setState({
            todo_priority: event.target.value
        });
    }
    onSubmit =(event)=>{
        event.preventDefault();
        console.log(`Form Submitted`);
        console.log(`Todo Name: ${this.state.todo_name}`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);
        console.log(`Todo Completed: ${this.state.todo_completed}`);

        this.setState({
            todo_name:'',
            todo_description:'',
            todo_priority:'',
            todo_completed:false
        });
    }

    render(){
        return(
            <div style={{marginTop: 30}}>
                <h3>Create Todos</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Todo Name: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.todo_name}
                                onChange={this.onChangeTodoName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Todo description: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-check from-check-inline">

                        <input  type="radio"
                                className="form-check-input"
                                name="priorityOptions"
                                id="priorityLow"
                                value="Low"
                                checked={this.state.todo_priority==='Low'}
                                onChange={this.onChangeTodoPriority}
                        />
                        <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check from-check-inline">

                        <input  type="radio"
                                className="form-check-input"
                                name="priorityOptions"
                                id="priorityMedium"
                                value="Medium"
                                checked={this.state.todo_priority==='Medium'}
                                onChange={this.onChangeTodoPriority}
                        />
                        <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check from-check-inline">

                        <input  type="radio"
                                className="form-check-input"
                                name="priorityOptions"
                                id="priorityHigh"
                                value="High"
                                checked={this.state.todo_priority==='High'}
                                onChange={this.onChangeTodoPriority}
                        />
                        <label className="form-check-label">High</label>
                        </div>
                    </div>
                     <div className="form-group">
                        <input type="submit"
                                className="btn btn-primary"
                                value="Create Todos"
                        />
                    </div>
                </form>
            </div>
        );
    }

}
export default CreateTodos;