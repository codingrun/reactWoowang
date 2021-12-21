import React, { memo, useEffect } from "react";

const HabitAddForm = memo((props) => {
  const inputRef = React.createRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && props.handleAdd(name);
    inputRef.current.value = "";
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <input
        type="text"
        ref={inputRef}
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
