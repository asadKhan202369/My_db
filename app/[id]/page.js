"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Nav from "@/Components/Nav";
import style from "./style.module.css";
const page = () => {
  const line = useRef(null);
  const params = useParams();
  const [details, setdetails] = useState([]);
  const [backdrops, setbackdrops] = useState([]);
  const [casts, setcasts] = useState([]);
  const [gen, setgen] = useState("");
  const GetDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=24353009232f42a282a3a6abc9dccee7`
        // `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=24353009232f42a282a3a6abc9dccee7`
        // `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=24353009232f42a282a3a6abc9dccee7`
      );
      console.log(data, "its detail data");
      setdetails(data);
    } catch (error) {
      console.log(error);
    }
  };

  const GetCast = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=24353009232f42a282a3a6abc9dccee7`
        // `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=24353009232f42a282a3a6abc9dccee7`
        // `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=24353009232f42a282a3a6abc9dccee7`
      );
      setcasts(data.cast);
    } catch (error) {
      console.log(error);
    }
  };

  const GetBackdrops = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}/images?api_key=24353009232f42a282a3a6abc9dccee7`
        // `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=24353009232f42a282a3a6abc9dccee7`,
        // `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=24353009232f42a282a3a6abc9dccee7`
        // `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=24353009232f42a282a3a6abc9dccee7`
      );
      setbackdrops(data.backdrops);
    } catch (error) {
      console.log(error);
    }
  };

  const GetPosters = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}/images?api_key=24353009232f42a282a3a6abc9dccee7`
        // `https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=24353009232f42a282a3a6abc9dccee7`
        // `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=24353009232f42a282a3a6abc9dccee7`,
        // `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=24353009232f42a282a3a6abc9dccee7`
        // `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=24353009232f42a282a3a6abc9dccee7`
      );
      console.log(data, "its detail data posters");
      setbackdrops(data.posters);
    } catch (error) {
      console.log(error);
    }
  };

  const posterHandler = () => {
    GetPosters();
    line.current.style.left = "27%";
  };

  const backdropsHandler = () => {
    GetBackdrops();
    line.current.style.left = "14%";
  };

  useEffect(() => {
    GetDetails();
    GetCast();
    GetBackdrops();
  }, []);

  return (
    <>
      <Nav></Nav>

      <div className={style.main} style={{ overflow: "hidden" }}>
        <div
          style={{
            overflow: "hidden",
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${details?.backdrop_path})`,
            backgroundSize: "cover",
          }}
          className={style.movie}
        >
          <div className={style.left_card}>
            <div className={style.img}>
              <img
                height={200}
                src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                alt=""
              />
            </div>
          </div>
          <div className={style.right_card}>
            <h1>{details.original_title}</h1>
            <div className={style.date}>
              <p>{details.release_date}</p>
            </div>
            {/* <div className="score">
              <div className={style.uscor}>
                <div className={style.ucircle}></div>
                <h6>
                  User <br /> Score
                </h6>
              </div>
            </div> */}
            {/* <p>{details.production_countries[0]}</p> */}

            <h6>{details.tagline}</h6>
            <div className={style.div}>
              <h6>Overview</h6>
              <p>{details.overview}</p>
            </div>
          </div>
        </div>
        <div className={style.details_div}>
          <div className={style.dl}>
            <h1>Top Billed Cast</h1>
            <div className={style.cast_slider1}>
              {casts.map((c, idx) => {
                return (
                  <div className={style.cst} key={c.id}>
                    <div className={style.img}>
                      <img
                        src={`https://www.themoviedb.org/t/p/w138_and_h175_face${c.profile_path}`}
                        alt=""
                      />
                    </div>
                    <div className={style.btm}>
                      <h6>{c.name}</h6>
                      <p>{c.character}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <h3>Full Cast & Crew</h3>
            <div className={style.popular}>
              <div className={style.phead}>
                <div className={style.links}>
                  <h6>Most Popular</h6>
                  <h6 onClick={backdropsHandler}>
                    Backdrops <span>(6)</span>
                  </h6>
                  <h6 onClick={posterHandler}>
                    Posters <span>(6)</span>
                  </h6>
                  <div ref={line} className={style.h6line}></div>
                </div>
              </div>
              <div className={style.poster}>
                {backdrops.map((p, i) => {
                  return (
                    <div className={style.pst} key={i}>
                      <img
                        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${p.file_path}`}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={style.dr}>
            <div className={style.rdv}>
              <h6>Original Titles</h6>
              <small>{details.original_title}</small>
            </div>
            <div className={style.rdv}>
              <h6>Status</h6>
              <small>{details.status}</small>
            </div>
            <div className={style.rdv}>
              <h6>Original Language</h6>
              <small>{details.original_language}</small>
            </div>
            <div className={style.rdv}>
              <h6>Budget</h6>
              <small>{details.budget}</small>
            </div>
            <div className={style.rdv}>
              <h6>Revenue</h6>
              <small>{details.revenue}</small>
            </div>
            <div className={style.rdv}>
              <h6>Release Date</h6>
              <small>{details.release_date}</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
