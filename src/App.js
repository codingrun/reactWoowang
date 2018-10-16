import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "Components/Counter";
import EnjoyLife from "Components/EnjoyLife";


// class Tds extends Component {
//   render() {
//     return (
//       <>
//         <td>1</td>
//         <td>2</td>
//       </>
//     );
//   }
// }

const Tds = ({name}) => {
  return (
    <>
      <td>{name}</td>
      <td>2</td>
    </>
  )
}

class Table extends Component {
  render() {
    return (
      <table>
        <tr>
          <Tds name="LEE"/>
        </tr>
      </table>
    );
  }
}

class App extends Component {
  render() {
    return (
      <>
        <Counter name="전지현"/>
        <EnjoyLife/>
        <Table/>
      </>
    );
  }
}

export default App;
