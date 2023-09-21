"use client"
import React, { useEffect } from 'react'
import Nav from '@/Components/Nav'
import style from './style.module.css'
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { useState,useRef } from "react";
import { asyncUpcomingTV } from '@/store/actions/movieActions';
import Link from 'next/link';
import { changepage,removeerrors } from "@/store/reducers/movieReducer";
import InfiniteScroll from "react-infinite-scroll-component";

const index = () => {
  const dispatch = useDispatch();
  const [HasMore, setHasMore] = useState(true);
  const { upcomingt,page} = useSelector((state) => state.movieReducer);

  // if(popular.length === 0){
  //   setHasMore(false);
  // }
  console.log(HasMore,"its hash");
  
  console.log(upcomingt,"its movies");
  useEffect(() => {
     dispatch(asyncUpcomingTV());    
  }, [page]);
 
  const getmoreposts =async ()=>{
    if(upcomingt.length >= 40){
      setTimeout(() => {
        // setShowMessage(true);
        dispatch(asyncUpcomingTV()); 
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
                dataLength={upcomingt.length}
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
                <h1>TV Shows Airing Today</h1>
              </div>
              
            
                  <div className={style.cards_div}>

                            {upcomingt.map((m,i) => {
                              return(
                                <div className={style.card} key={m.id}>
                                  <div className={style.img}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                                        alt=""
                                    />
                                  </div>
                                  <div className={style.btm}>
                                            <small>{m.name}</small>
                                            <p className="dt">{m.first_air_date}</p>
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