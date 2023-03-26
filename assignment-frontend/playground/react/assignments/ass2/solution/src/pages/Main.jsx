import React, { useState } from 'react'
import FilmYear from '../components/FilmYear';
import FilmInfo from '../components/FilmInfo';

const Main = ({data}) => {
    const [filmIndex, setFilmIndex] = useState(0);
  return (
    <div className="d-block d-sm-block d-lg-flex justify-content-evenly align-items-center my-div">
      <FilmYear data={data} filmIndex={filmIndex} setFilmIndex={setFilmIndex} />
      <FilmInfo film={data[filmIndex]} />
    </div>
  );
}

export default Main