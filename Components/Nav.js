"use client";
import Link from "next/link";
import style from "./style.module.css";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {asyncSearch} from "@/store/actions/movieActions";
import { UpdateSearchQuery } from '@/store/reducers/movieReducer'
import { useRouter } from "next/navigation";
const Nav = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { search,searchQuery} = useSelector((state) => state.movieReducer);
  const moviediv = useRef(null);
  const SearchPage = useRef(null);
  const SearchIcon = useRef(null);
  const MenuIcon = useRef(null);
  const [isShown, setIsShown] = useState(false);

  // const handleMouseEnter = () => {
  //   moviediv.current.style.display = "flex";
  // };

  // const handleMouseLeave = () => {
  //   moviediv.current.style.display = "none";
  // };
  // const handleMouseMove = () => {
  //   moviediv.current.style.display = "flex";
  // };

  // const handleMouseLeaveM = () => {
  //   moviediv.current.style.display = "none";
  // };

  const searchpageHandler = () => {
    SearchPage.current.style.display = "flex";
    SearchIcon.current.style.display = "none";
    MenuIcon.current.style.display = "none";
    setIsShown(!isShown);
  };

  const closeSearch = () => {
    SearchPage.current.style.display = "none";
    SearchIcon.current.style.display = "initial";
    MenuIcon.current.style.display = "initial";
    setIsShown(!isShown);
  };

  const searchHandler = async (e)=>{
    e.preventDefault();
    dispatch(asyncSearch(searchQuery));
    router.push("/search");
    console.log(search,"its search result");
     console.log(searchQuery,"its seatchqueryry");
  }

  return (
    <>
      <div id={style.nav}>
        <div className={style.left}>
          <img
            style={{ height: "3vh" }}
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt=""
          />
          
        </div>
        <div className={style.right}>
          
          {isShown && (
            <svg 
              onClick={closeSearch}
              style={{ height: "5vh" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 20"
            >
              <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
            </svg>
          )}

          <svg className={style.searchbutton}
            ref={SearchIcon}
            onClick={searchpageHandler}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
          </svg>
          <svg
            ref={MenuIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
        </div>
      </div>
      
      <div ref={SearchPage} className={style.Searchpage}>
        <div className={style.txtdiv}>
          <h1 className="h1">Welcome.</h1>
          <p className="p">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <form onSubmit={searchHandler}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => dispatch(UpdateSearchQuery(e.target.value))}
              placeholder="Search for a movie, tv show ,person....."
            />
            <button onClick={searchHandler} type="button" className="btn btn-primary">
              Search
            </button>
          </form>
        </div>
      </div>
      <div className={style.side_nav}>
        <div className={style.headd}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
          </svg>
        </div>
        <div className={style.contant}>
          
          <div className={style.contain_row}>
            <div className={style.mrows}>
              <h6>Movies</h6>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
              </svg>
            </div>
           
            <div className={style.options}>
              <Link href="/popular">
                <div className={style.opt}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
                      </svg>
                      <small>
                        Popular Movies
                    </small>
                  </div>
              </Link>
             
              <div className={style.opt}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
                  </svg>
                  <small>
                     Now Playing Movies
                 </small>
              </div>
              <div className={style.opt}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
                  </svg>
                  <small>
                      Upcoming Movies
                 </small> 
              </div>
              <div className={style.opt}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
                  </svg>
                  <small>
                     Top Rated Movies 
                 </small>
              </div>
              
            </div>
          </div>
          <div className={style.contain_row}>
            <div className={style.mrows}>
              <h6>TV Shows</h6>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
              </svg>
            </div>
            <div className={style.options}>
              <div className={style.opt}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
                  </svg>
                  <small>
                     Popular TV Shows
                 </small>
              </div>
             
              <div className={style.opt}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
                  </svg>
                  <small>
                     Now Playing Tv shows
                 </small>
              </div>
              <div className={style.opt}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
                  </svg>
                  <small>
                      Upcoming TV Shows
                 </small>
              </div>
              <div className={style.opt}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
                  </svg>
                  <small>
                     Top Rated TV Shows
                 </small>
              </div>
              
            </div>
          </div>
          <div className={style.contain_row}>
            <div className={style.mrows}>
              <h6>Peaople</h6>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
              </svg>
            </div>
            <div className={style.options}>
              <div className={style.opt}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
                  </svg>
                  <small> 
                     Popular People
                 </small>
              </div>
            
              
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Nav;
