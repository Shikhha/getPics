import axios from "axios";

//axios.create creates a customized copy.
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID ff1efb72aa6dcdcfe56127828ad0cca7d510d92aecdf89fed9c5245ccd9ddee5"
  }
});
