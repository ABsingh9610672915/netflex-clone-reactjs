import React  from "react";
import './Header.css'
import {Link} from "react-router-dom"
const Header =()=>{
  return (
    <div className="header">
    <div className="headerleft">
      <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" ></img></Link>
      <Link to="/movies/popuplar"  style={{textDecoration:"none"}}  ><span>Popular </span> </Link>
      <Link to="/movies/top_reted" style={{textDecoration:'none'}}  ><span>Top-Rated</span>  </Link>
      <Link to="/movies/upcoming"  style={{textDecoration:'none'}}  ><span>Up-coming </span> </Link>
    </div>
    </div>
  )
}
export default Header