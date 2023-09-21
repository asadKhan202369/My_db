"use client";
import React, { useEffect } from "react";
import Nav from "@/Components/Nav";
import style from "./style.module.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { asyncPopularMovies } from "@/store/actions/movieActions";
import Link from "next/link";
import { changepage, removeerrors } from "@/store/reducers/movieReducer";
import InfiniteScroll from "react-infinite-scroll-component";
import { Skeleton } from "@mui/material";

const index = () => {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();
  const [HasMore, setHasMore] = useState(true);
  const { popular, page } = useSelector((state) => state.movieReducer);

 

  useEffect(() => {
    dispatch(asyncPopularMovies());
   
    const loadingTimeout = setTimeout(() => {
      setloading(false);
    }, 3000);

    return () => clearTimeout(loadingTimeout);

  }, [page]);

  const getmoreposts = async () => {
    if (popular.length >= 40) {
      setTimeout(() => {
        // setShowMessage(true);
        dispatch(asyncPopularMovies());
        dispatch(changepage(1));
        console.log(page, "its page infiniey");
      }, 2000);
    }
  };

  const changepageHandler = async () => {
    dispatch(changepage(1));
  };


  return (
    <>
      <Nav></Nav>
      <InfiniteScroll
        dataLength={popular.length}
        next={getmoreposts}
        hasMore={HasMore}
        loader={
          <div className={style.lm} onClick={changepageHandler}>
            <h6>Load More</h6>
          </div>
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className={style.main}>
          <div className={style.head}>
            <h1>Popular Movies</h1>
          </div>
          <div className={style.cards_div}>
             {popular.map((m,i)=>(
                  <div className={style.card} key={m.id}>
                      {loading?(
                        <Skeleton
                        variant="rectangular"
                        width={"100%"}
                        className="relative z-30 bg-slate-200"
                        height={"100%"}
                      />
                      ):(
                            <div className={style.crd}>
                                 <div className={style.img}>
                                    <img
                                      src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                                      alt=""
                                    />
                                  </div>
                                  <div className={style.btm}>
                                    <small>{m.title}</small>
                                    <p className="dt">{m.release_date}</p>
                                  </div>
                            </div>
                    )}
                  </div>
             ))}
            </div>
          
        </div>
      </InfiniteScroll>
    </>
  );
};

export default index;
