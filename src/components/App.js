import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onFormSubmit(term) {
    console.log(term);
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onFormSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;
