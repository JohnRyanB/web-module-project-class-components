import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: ''
        };
    };

handleChanges = e => {
    this.setState({
        ...this.state,
        newTodo: e.target.value
    });
};

handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.newTodo);
}

render() {
    return(
    <form onSubmit={this.handleSubmit}>
        <input type="text"
        name="item"
        value={this.state.newItem}
        onChange={this.handleChanges}
        />
        <button>Add</button>
    </form>
    )
}

}

export default TodoForm;