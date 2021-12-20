import { Component } from "react";
import "./app.css";
import Habits from "./components/habits";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };

  handleDescrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const habitCount = habits[index].count - 1;

    habits[index].count = habitCount < 0 ? 0 : habitCount;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits.splice(index, 1);
    this.setState({ habits });
  };

  render() {
    return (
      <Habits
        habits={this.state.habits}
        handleIncrement={this.handleIncrement}
        handleDescrement={this.handleDescrement}
        handleDelete={this.handleDelete}
      />
    );
  }
}

export default App;
