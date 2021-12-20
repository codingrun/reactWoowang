import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  render() {
    const {
      habits,
      handleIncrement,
      handleDescrement,
      handleDelete,
      handleAdd,
      handleReset,
    } = this.props;
    return (
      <>
        <HabitAddForm handleAdd={handleAdd} />
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
        <button className="habit" onClick={handleReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
