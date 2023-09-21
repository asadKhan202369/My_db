"use client"
import React, { useEffect } from 'react'
import Nav from '@/Components/Nav'
import style from './style.module.css'
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { useState,useRef } from "react";
import { asyncUpcomingMovies } from '@/store/actions/movieActions';
import Link from 'next/link';
import { changepage,removeerrors } from "@/store/reducers/movieReducer";
import InfiniteScroll from "react-infinite-scroll-component";

const index = () => {
  const [count, setcount] = useState("")
  const dispatch = useDispatch();
  const [HasMore, setHasMore] = useState(true);
  const { upcoming,page} = useSelector((state) => state.movieReducer);
  
  setcount(upcoming.length)
  
  console.log(count, "its hash");
  console.log(HasMore,"its hash");
  
  console.log(upcoming,"its movies");
  useEffect(() => {
     dispatch(asyncUpcomingMovies());    
  }, [page]);
 
  const getmoreposts =async ()=>{
    if(upcoming.length >= 40){
      setTimeout(() => {
        // setShowMessage(true);
        dispatch(asyncUpcomingMovies()); 
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
                dataLength={upcoming.length}
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
                <h1>Upcoming Movies</h1>
              </div>
              
            
                  <div className={style.cards_div}>

                            {upcoming.map((m,i) => {
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