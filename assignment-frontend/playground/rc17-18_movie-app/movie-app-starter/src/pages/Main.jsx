import axios from "axios";
import React from "react";

const Main = () => {
  const [movieDate, setMovieDate] = useState([])
  const APP_KEY = process.env.REACT_APP_apiKey
  const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${APP_KEY}`

  const getData = async () => {
    try {
      const data = await axios.get(BASE_URL)
      console.log(data);
    }
    catch(error){
      console.log(error);
    }
  }
 getData();

  return <div>Main</div>;
};

export default Main;
