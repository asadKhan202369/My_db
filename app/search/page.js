"use client"
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import Nav from '@/Components/Nav';
import  style  from './style.module.css';
import { searchQuery } from '@/store/reducers/movieReducer';
const searchPage = () => {
const {search,searchQuery} = useSelector((state) => state.movieReducer);
    const [name, setname] = useState("");
    const [date, setdate] = useState("");
    console.log(search,"its search ");
    console.log(searchQuery,"its searchquery");
    
  return (
    <>
         <Nav></Nav>
         <div className={style.main}>
            <div className={style.head}>
                  <h1>Search Result {searchQuery}</h1>
            </div>
            <div>
               <h6></h6>
              <div className={style.cards_div}>

                {search.map((m,i) => {
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
                          <p className="dt">{m.release_date}</p>
                        </div>
                     
                    
                    </div>
                  );
              })}
              </div>
                
            </div>
         </div>
        
    </>
  )
}

export default searchPage