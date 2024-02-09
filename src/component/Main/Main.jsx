import React, { useEffect, useState } from "react";
import requests from "../../Request";
import "./Main.css";
import axios from "axios";

function Main() {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		axios
			.get(requests.requestPopular)
			.then((res) => {
				setMovies(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	let singleMovie = Math.floor(Math.random() * movies.length + 1);
	let movie = movies[singleMovie];
	const truncateString = (str, num) => {
		if (str?.length > num) {
			return str.slice(0, num) + "...";
		} else {
			return str;
		}
	};
	return (
		<div className="main-container">
			<div className="container-img">
				<div>
					<img
						className="img"
						src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
						alt={movie?.title}
					/>
					<div className="container-overlay"></div>
				</div>

				<div className="content">
					<h1 className="content-header">{movie?.title}</h1>
					<div className="content-btn">
						<button type="button" class="btn btn-lg btn-light py-2 px-5">
							Play
						</button>
						<button
							type="button"
							className="btn btn-lg btn-outline-light py-2 px-5"
						>
							Watch Later
						</button>
					</div>
					<p className="content-p1">Released:{movie?.release_date}</p>
					<p className="content-p2">{truncateString(movie?.overview, 150)}</p>
				</div>
			</div>
		</div>
	);
}

// const mapStateToProps = (state) => {
//   return {
//     array: state.array,
//     error: state.error,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onFetchData: () => dispatch(fetchArray()),
//   };
// };

export default Main;
