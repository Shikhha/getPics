import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../components/api/usplash";

class App extends React.Component {
  state = {
    images: []
  };
  onFormSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
    console.log(this.state.images);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
