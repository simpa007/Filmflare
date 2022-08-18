import React, { useState} from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { UserAuth } from '../../context/AuthContext';
import { db } from '../../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import "./Movies.css"
export default function ({ item }) {
const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();
  
  const movieID = doc(db, "users", `${user?.email}`);
  //console.log(movies);
  const saveShow = async () => { 
     if (user?.email) {
       setLike(!like);
       setSaved(true);
       await updateDoc(movieID, {
         savedShows: arrayUnion({
           id: item.id,
           title: item.title,
           img: item.backdrop_path,
         }),
       })

     } else { 
       alert("Please log in to save a movie");
     }
  }
  return (
    
            <div className="item-content">
                <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                <div className="effect">
                  <p className="title">{item?.title}</p>
                  <p onClick={saveShow } className="icon">{like ? <FaHeart/> : <FaRegHeart/> }</p>
                </div>
            </div>

  )
}
