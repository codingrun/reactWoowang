import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  render() {
    const { habits, handleIncrement, handleDescrement, handleDelete } =
      this.props;
    return (
      <ul>
        {habits.map((habit) => {
          return (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={handleIncrement}
              onDescrement={handleDescrement}
              onDelete={handleDelete}
            />
          );
        })}
      </ul>
    );
  }
}

export default Habits;
