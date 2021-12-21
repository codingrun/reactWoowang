import React, { memo, useEffect } from "react";

const Navbar = memo((props) => {
  useEffect(() => {
    console.log("navbar :>> ");
  });
  return (
    <nav>
      <i className="navbar-logo fas fa-leaf"></i>
      <span>Habit Tracker</span>
      <span className="navbar-count">{props.totalCount}</span>
    </nav>
  );
});

export default Navbar;
