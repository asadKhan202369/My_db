"use client"
import React, { useEffect } from 'react'
import Nav from '@/Components/Nav'
import style from './style.module.css'
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { useState,useRef } from "react";
import { asyncTopRatedMovies } from '@/store/actions/movieActions';
import Link from 'next/link';
import { changepage,removeerrors } from "@/store/reducers/movieReducer";
import InfiniteScroll from "react-infinite-scroll-component";

const index = () => {
  const [count, setcount] = useState("");
  const dispatch = useDispatch();
  const [HasMore, setHasMore] = useState(true);
  const { topReated,page} = useSelector((state) => state.movieReducer);

  console.log(count, "its hash");
  console.log(topReated.length, "its movies");
  console.log(HasMore,"its hash");
  console.log(topReated,"its movies");
  useEffect(() => {
     dispatch(asyncTopRatedMovies());    
  }, [page]);
 
  const getmoreposts =async ()=>{
    if(topReated.length >= 40){
      setTimeout(() => {
        // setShowMessage(true);
        dispatch(asyncTopRatedMovies()); 
        dispatch(changepage(1))  
        console.log(page,"its page infiniey");
      }, 2000); 
    }
     
  }

  const changepageHandler = async ()=>{
    
    dispatch(changepage(1))
    // console.log(page,"its page")
     
  }

  return (
    <>
       <Nav></Nav>
       <InfiniteScroll
                dataLength={topReated.length}
                next={getmoreposts}
                hasMore={HasMore}
                loader={<div className={style.lm} onClick={changepageHandler}>
                        <h6>Load More</h6>
                       </div>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
          <div className={style.main}>
              <div className={style.head}>
                <h1>Top Rated Movies</h1>
              </div>
              
            
                  <div className={style.cards_div}>

                            {topReated.map((m,i) => {
                              return(
                                <div className={style.card} key={m.id}>
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
                              );
                        })}
                  </div>
          </div>
       </InfiniteScroll>
      
    </>
  )
}

export default index