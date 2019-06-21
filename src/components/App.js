import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";
import unsplash from "../components/api/usplash";
import usplash from "../components/api/usplash";

class App extends React.Component {
  state = {
    images: []
  };
  onFormSubmit = async term => {
    const response = await usplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        found : {this.state.images.length}
      </div>
    );
  }
}

export default App;
