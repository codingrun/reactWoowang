import { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (habit.id === item.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDescrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (habit.id === item.id) {
        const habitCount = item.count - 1;
        return { ...habit, count: habitCount < 0 ? 0 : habitCount };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits.splice(index, 1);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };
  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count > 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };
  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.length} />
        <Habits
          habits={this.state.habits}
          handleIncrement={this.handleIncrement}
          handleDescrement={this.handleDescrement}
          handleDelete={this.handleDelete}
          handleAdd={this.handleAdd}
          handleReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
