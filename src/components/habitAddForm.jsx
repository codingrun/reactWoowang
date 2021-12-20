import React, { PureComponent } from "react";

class HabitAddForm extends PureComponent {
  inputRef = React.createRef();
  onSubmit = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.handleAdd(name);
    this.inputRef.current.value = "";
  };
  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          ref={this.inputRef}
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
