import axios from 'axios';
import React, { useState } from 'react'
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import { useEffect } from 'react';
import Movies from '../Movies/Movies';
import "./Row.css"

export default function Row({ title, fetchURL, rowID }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => { 
    axios.get(fetchURL).then((response) => { 
      setMovies(response.data.results);
    })
  }, [fetchURL])
//console.log(movies);
  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

 const slideRight = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };



  return (
      <div>
      <h2 className="body-title">{title}</h2>
      <div className="body-img">
        <MdChevronLeft
          onClick={slideLeft}
          className="toddle-icon" size={40} />
        <div id={"slider" + rowID} className="body-row"> 
          {movies.map((item, id) => {
            return (
              <Movies item={item} />
            )
          })}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="toddle-icon" size={40} />
      </div>
    </div>
  )
}
