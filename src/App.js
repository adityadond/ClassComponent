import React, { Component } from "react";
import Navbar from "./components/Navbar";
import TodoRows from "./components/TodoRows";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "Aditya",
      todoItems: [
         { action: "Buy Milk", done: true },
         { action: "Dentist at 5pm", done: false },
        { action: "Go to Gym", done: false },
      ],
      newTodo: "",
    };
  }

  updateValue = (event) => {
    this.setState({
      newTodo: event.target.value,
    });
  };

  newTodo = () => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { action: this.state.newTodo, done: false },
      ],
    });
  };

  todoRows=()=>this.state.todoItems.map((item)=><TodoRows item={item} callback={this.toggleDone}/>)

  toggleDone = (todo) =>
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      ),
    });


  render() {
    return (
      <div className="container">
        <div className="row">
          <Navbar name={this.state.userName}/>
          <div className="col-12" >
            <input
              className="form-control"
              value={this.state.newToDo}
              onChange={this.updateValue}
              placeholder="Enter Todo item"
            />
            <button className="btn btn-primary"  onClick={this.newTodo}>
              Add
            </button>
            <table className="table">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Complete</th>
                </tr>
              </thead>
              <tbody>{this.todoRows()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
