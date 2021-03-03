import React, { Component } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList.component";
import Search from "./components/Search/Search.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((array) => this.setState({ monsters: array }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filtered = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <Search
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filtered} />
      </div>
    );
  }
}

export default App;
