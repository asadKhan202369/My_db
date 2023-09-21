"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  asyncaddmovies,
  asyncTrendingWeek,
  asyncFreeTV,
  asyncFreemovies,
  asyncPopularStream,
  asyncPopularTv,
  asyncPopularMovie,
  asyncPopularRent,
} from "@/store/actions/movieActions";
import { changepage, removeerrors } from "@/store/reducers/movieReducer";
import Nav from "@/Components/Nav";
import { toast } from "react-toastify";
import { useRef } from "react";
import { useRouter } from "next/navigation";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { CircularProgress } from "@mui/material";
import { Card, CardContent, Skeleton } from '@mui/material';

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import event from "material/src/element/event";

export const metadata = {
  title: "Tmdb Homepage",
};

const page = () => {
  const router = useRouter();
  const moviediv = useRef(null);
  const dispatch = useDispatch();
  const divRef = useRef(null);
  const divRef1 = useRef(null);
  const h6Ref = useRef(null);
  const h6Ref2 = useRef(null);
  const h6Reft = useRef(null);
  const h6Refs = useRef(null);
  const h6Refm = useRef(null);
  const h6RefR = useRef(null);
  const divRef2 = useRef(null);
  const h6rf3 = useRef(null);
  const h6rf4 = useRef(null);
  const [slug, setslug] = useState("");
  const {
    movies,
    Tv,
    Free,
    Ltrailer,
    search,
    searchQuery,
    page,
    errors,
    SearchQue,
  } = useSelector((state) => state.movieReducer);

  if (errors.length > 0) {
    errors.map((e, i) => {
      toast.error(e);
    });
    dispatch(removeerrors());
  }

  useEffect(() => {
    //  dispatch(asyncLatestTrailer());
    dispatch(asyncaddmovies());
    //  dispatch(asyncPopularTv())
    dispatch(asyncPopularStream());
    dispatch(asyncFreemovies());
  }, [page]);

  const trendingdayHandler = () => {
    divRef.current.style.left = "0%";
    divRef.current.style.width = "50%";
    h6Ref2.current.style.color = "#97ecbf";
    h6Ref.current.style.color = "#111";
    dispatch(asyncaddmovies());
  };

  const trendingweekHandler = () => {
    divRef.current.style.left = "50%";
    divRef.current.style.borderRadius = "0vmax";
    divRef.current.style.borderTopRightRadius = "3vmax";
    divRef.current.style.borderBottomRightRadius = "3vmax";
    h6Ref.current.style.color = "#97ecbf";
    h6Ref2.current.style.color = "#111";
    dispatch(asyncTrendingWeek());
  };

  const trendingdayHandler2 = () => {
    divRef2.current.style.left = "0%";
    divRef2.current.style.width = "50%";
    h6rf3.current.style.color = "#97ecbf";
    h6rf4.current.style.color = "#111";
    dispatch(asyncFreemovies());
  };

  const trendingweekHandler2 = () => {
    divRef2.current.style.left = "50%";
    divRef2.current.style.borderRadius = "0vmax";
    divRef2.current.style.borderTopRightRadius = "3vmax";
    divRef2.current.style.borderBottomRightRadius = "3vmax";
    h6rf4.current.style.color = "#97ecbf";
    h6rf3.current.style.color = "#111";
    dispatch(asyncFreeTV());
  };

  const popularTvHandler = () => {
    divRef1.current.style.left = "25%";
    divRef1.current.style.width = "23%";
    divRef1.current.style.borderRadius = "3vmax";
    h6Reft.current.style.color = "#97ecbf";
    h6Refs.current.style.color = "#111";
    h6Refm.current.style.color = "#111";
    h6RefR.current.style.color = "#111";
    dispatch(asyncPopularTv());
  };

  const popularMovieHandler = () => {
    divRef1.current.style.left = "75%";
    divRef1.current.style.width = "25%";
    divRef1.current.style.borderRadius = "0vmax";
    divRef1.current.style.borderBottomRightRadius = "3vmax";
    divRef1.current.style.borderTopRightRadius = "3vmax";
    h6Refm.current.style.color = "#97ecbf";
    h6Refs.current.style.color = "#111";
    h6Reft.current.style.color = "#111";
    h6RefR.current.style.color = "#111";
    dispatch(asyncPopularMovie());
  };

  const popularStrHandler = () => {
    divRef1.current.style.left = "0%";
    divRef1.current.style.borderRadius = "0vmax";
    h6Refs.current.style.borderTopLeftRadius = "3vmax";
    h6Refs.current.style.borderBottomLeftRadius = "3vmax";
    h6Refs.current.style.color = "#97ecbf";
    h6Reft.current.style.color = "#111";
    h6Refm.current.style.color = "#111";
    h6RefR.current.style.color = "#111";
    dispatch(asyncPopularStream());
  };

  const popularRent = () => {
    divRef1.current.style.left = "47%";
    divRef1.current.style.width = "25%";
    divRef1.current.style.borderRadius = "3vmax";
    h6Refs.current.style.color = "#97ecbf";
    h6RefR.current.style.color = "#97ecbf";
    h6Reft.current.style.color = "#111";
    h6Refm.current.style.color = "#111";
    h6Refs.current.style.color = "#111";
    dispatch(asyncPopularRent());
  };

  const detspage = (typ, id) => {
    // event.preventDefault();
    if (typ !== "movie") {
      typ = "TV";
    }

    console.log(typ, "its typ");
    console.log(id, "its typ");
    router.push(`/dets/${typ}/${id}`);
  };

  const SkeletonCard = () => {
    return (
      <Card>
        <Skeleton variant="rectangular" width="100%" height={200} />
        <CardContent>
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="70%" />
        </CardContent>
      </Card>
    );
  };
  

  return (
    <>
      <Nav></Nav>
      <div style={{ marginTop: "0vh" }} id="search">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          {movies.map((m, i) => {
            return (
              <SwiperSlide key={m.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                  alt=""
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div></div>
      <div style={{ overflow: "hidden" }}>
        <div className="tranding">
          <div className="div">
            <h1>Trending</h1>
            <div className="tw">
              <div ref={divRef} id="t"></div>
              <h6 ref={h6Ref2} onClick={trendingdayHandler} className="h6">
                Today
              </h6>
              <h6 ref={h6Ref} onClick={trendingweekHandler}>
                This Week
              </h6>
            </div>
          </div>
          <div id="cards_div">
          {/* <SkeletonCard /> */}
      {/* <SkeletonCard /> */}

            {movies.map((m, i) => {
              return (
                <div
                  onClick={() => detspage(m.media_type, m.id)}
                  id="card"
                  key={m.id}
                >
                  <div className="img">
                    <img
                      height={200}
                      src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                      alt=""
                    />
                  </div>
                  <div className="btm">
                    <small>{m.title}</small>
+                    <p className="dt">{m.release_date}</p>
                    {/* <p>{m.media_type}</p> */}
                  </div>

                  <div className="rat">
                    <div className="rt">
                      <CircularProgress
                        size={40}
                        variant="determinate"
                        value={Math.round(m.vote_average * 10)}
                      />
                      <h6>{(m.vote_average * 10).toFixed(1)}%</h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="tranding">
          <div className="div">
            <h1>What's Popular</h1>
            <div className="tw1">
              <div ref={divRef1} id="t"></div>
              <h6 ref={h6Refs} onClick={popularStrHandler} className="h6">
                Streaming
              </h6>
              <h6 ref={h6Reft} onClick={popularTvHandler}>
                On TV
              </h6>
              <h6 ref={h6RefR} onClick={popularRent}>
                For Rent
              </h6>
              <h6 ref={h6Refm} onClick={popularMovieHandler}>
                In Theaters
              </h6>
            </div>
          </div>
          <div id="cards_div">
            {Tv.map((m, i) => {
              return (
                <div
                  onClick={() => detspage(m.media_type, m.id)}
                  id="card"
                  key={m.id}
                >
                  <div className="img">
                    <img
                      height={200}
                      src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                      alt=""
                    />
                  </div>
                  <div className="btm">
                    <small>{m.name}</small>
                    <p className="dt">{m.first_air_date}</p>
                  </div>

                  <div className="rat">
                    <div className="rt">
                      <CircularProgress
                        size={40}
                        variant="determinate"
                        value={Math.round(m.vote_average * 10)}
                      />
                      <h6>{(m.vote_average * 10).toFixed(1)}%</h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="tranding">
          <div className="div">
            <h1>Free To Watch</h1>
            <div className="tw">
              <div ref={divRef2} id="t"></div>
              <h6 ref={h6rf3} onClick={trendingdayHandler2} className="h6">
                Movies
              </h6>
              <h6 ref={h6rf4} onClick={trendingweekHandler2}>
                TV
              </h6>
            </div>
          </div>
          <div id="cards_div">
            {Free.map((m, i) => {
              return (
                  
                <div id="card" onClick={() => detspage(m.media_type, m.id)} key={m.id}>
                  <div className="img">
                    <img
                      height={200}
                      src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                      alt=""
                    />
                  </div>
                  <div className="btm">
                    <small>{m.title}</small>
                    <p className="dt">{m.release_date}</p>
                  </div>

                  <div className="rat">
                    <div className="rt">
                      <CircularProgress
                        size={40}
                        variant="determinate"
                        value={Math.round(m.vote_average * 10)}
                      />
                      <h6>{(m.vote_average * 10).toFixed(1)}%</h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="paginate">
          <button onClick={() => dispatch(changepage(-1))}>Previous</button>
          <span className="h6">{page}</span>
          <button onClick={() => dispatch(changepage(1))}>Next</button>
        </div>
      </div>
    </>
  );
};

export default page;
