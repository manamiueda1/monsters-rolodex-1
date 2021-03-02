import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      dogs: [],
    };
  }

  // componentDidMount() {
  //   fetch("https://dog.ceo/api/breeds/image/random/3").then((response) =>
  //     response.json().then((data) => this.setState({ dogs: data.message }))
  //   );
  // }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((array) => this.setState({ monsters: array }));
  }

  render() {
    // console.log(this.state.dogs);

    return (
      <div className="App">
        {/* <div>
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({ string: "hello friend" })}>
            Change Text
          </button>
        </div> */}

        {this.state.dogs.map((dog) => (
          <img alt="randomDogs" src={dog} />
        ))}

        {this.state.monsters.map((monster) => (
          <div>
            <h1 key={monster.id}>{monster.name}</h1>
            <h3>{monster.email}</h3>
            <h3>{monster.username}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
