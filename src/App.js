import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


const tasks = [{
    task: "Learn SetState()",
    id: Date.now(),
    completed: false
}];
console.log(tasks)

class App extends React.Component {
    constructor () {
        super();
        this.state = {tasks:tasks};
    };

    toggleCompleted = (itemId) => {
            const updatedTaskList = this.state.tasks.map(item => {
            if(item.id === itemId) {
                return {...item, completed: !item.completed};
            }
            else {
                return item;
            }
        })
        this.setState( {
            ...this.state,
            tasks: updatedTaskList
        })
    }

    clearCompleted = (itemId) => {
        console.log("Clearing Completed", itemId);
        this.setState({
            ...this.state,
            tasks: this.state.tasks.filter(item =>!item.completed)
        })

    } 
    
    addItem = (itemName) => {
        console.log('adding item to list', itemName);
        this.setState({
            ...this.state,
             tasks: [...this.state.tasks,
                {
                task: itemName,
                id: Date.now(),
                completed: false
                }
            ]
        });

    };
    
    // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
          <div className="Header">
        <h1>Todo List: MVP</h1>
        </div>
        <TodoForm addItem={this.addItem} />
        <TodoList tasks={this.state.tasks}
        toggleCompleted={this.toggleCompleted}
        clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
