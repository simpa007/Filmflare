import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import "./SavedShows.css";
export default function SavedShows() {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  //console.log(movies);
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(
      doc(db, "users", `${user?.email}`, (doc) => {
        setMovies(doc.data()?.savedShows);
      })
    );
  }, [user?.email]);

  return (
    <div>
      <h2 className="body-title">My Shows</h2>
      <div className="body-img">
        <MdChevronLeft onClick={slideLeft} className="toddle-icon" size={40} />
        <div id={"slider"} className="body-row">
          {movies.map((item, id) => {
            return (
              <div key={id} className="item-content">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                  alt={item?.title}
                />
                <div className="effect">
                  <p className="title">{item?.title}</p>
                  <p></p>
                </div>
              </div>
            );
          })}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="toddle-icon"
          size={40}
        />
      </div>
    </div>
  );
}
