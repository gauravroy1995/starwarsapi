import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: {}, name: "", homeplanet: "", species: "" };
  }

  componentWillMount() {
    fetch("https://swapi.co/api/people/1/")
      .then(results => results.text())
      .then(results => JSON.parse(results))

      .then(results => {
        let x = `"${results.homeworld}"`;

        console.log(`"${results.homeworld}"`);

        fetch(x)
          .then(resultshomeworld => resultshomeworld.json())

          .then(results => {
            console.log(results);

            this.setState({ homeplanet: results.name });
          });

        this.setState({ data: results, name: results.name });
      });
  }

  render() {
    return (
      <div className="App">
        <span>{this.state.name}</span>

        <div>{this.state.homeplanet}</div>
      </div>
    );
  }
}

export default App;
