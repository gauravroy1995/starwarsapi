import React from "react";
import axios from "axios";

class Axiosa extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: {}, name: "", homeplanet: "", species: "" };
    this.fetchStarwars = this.fetchStarwars.bind(this);
  }

  fetchStarwars = () => {
    axios
      .get("https://swapi.co/api/people/1/")
      .then(response => {
        let results = response.data;
        let x = results.homeworld;
        let y = results.species;

        this.setState({ data: results, name: results.name, isLoading: false });
        return axios.all([axios.get(x), axios.get(y)]);
      })

      .then(results => {
        //console.log(results);
        // console.log(results[0].data.name);
        let x = results[0].data.name;
        //  console.log(results[1].data.name);
        let y = results[1].data.name;
        this.setState({ homeplanet: x, species: y });
      });
  };

  componentDidMount() {
    this.fetchStarwars();
  }

  render() {
    return (
      <div className="App">
        <table>
          <tr>
            <th>S.No</th>
            <th>Name of species</th>
            <th>Homeplanet of species</th>
            <th>Species Type</th>
          </tr>
          <tr>
            <td>1</td>
            <td>{this.state.name}</td>
            <td>{this.state.homeplanet}</td>
            <td>{this.state.species}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Axiosa;
