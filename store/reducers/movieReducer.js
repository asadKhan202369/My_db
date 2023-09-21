import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    movies: [],
    Ltrailer:[],
    Tv:[],
    popular:[],
    popular1:[],
    page: 1,
    errors: [],
    search:[],
    searchQuery:'',
    mainpage:[],
    nowplaying:[],
    upcoming:[],
    topReated:[],
    nowplayingt:[],
    upcomingt:[],
    topReatedt:[],
    populart:[],
    Free:[],
    Popularp:[]
};

export const movieReducer = createSlice({
      name:"pinterest",
      initialState,
      reducers:{
         addmovies: (state,actions)=>{
            // Trendingday
              state.movies = actions.payload;
         },
         FreeMovie: (state,actions)=>{
            // Trendingday
              state.Free = actions.payload;
         },
         FreeTV: (state,actions)=>{
            // Trendingday
              state.Free = actions.payload;
         },
         saveMoviesWeek: (state,actions)=>{
            // TrendingWeek
            state.movies = actions.payload;
         },
         popularTv: (state,actions)=>{
            // TrendingWeek
            state.Tv = actions.payload;
         },
         popularStream: (state,actions)=>{
            // TrendingWeek
            state.Tv = actions.payload;
         },
         popularMovie: (state,actions)=>{
            // TrendingWeek
            state.Tv = actions.payload;
         },
         popularRent: (state,actions)=>{
            // TrendingWeek
            state.Tv = actions.payload;
         },
         popularmovies: (state,actions)=>{
            state.popular = [...state.popular, ...actions.payload]
         },
         nowPlayingmovies: (state,actions)=>{
            state.nowplaying = [...state.nowplaying, ...actions.payload]
         },
         upcomingmovies: (state,actions)=>{
            state.upcoming = [...state.upcoming, ...actions.payload]
         }, 
         topRatedMovies: (state,actions)=>{
            state.topReated = [...state.topReated, ...actions.payload]
         },
         popularTV: (state,actions)=>{
            state.populart = [...state.populart, ...actions.payload]
         },
         nowPlayingTV: (state,actions)=>{
            state.nowplayingt = [...state.nowplayingt, ...actions.payload]
         },
         upcomingTV: (state,actions)=>{
            state.upcomingt = [...state.upcomingt, ...actions.payload]
         }, 
         topRatedTV: (state,actions)=>{
            state.topReatedt = [...state.topReatedt, ...actions.payload]
         },
         PopularPeople: (state,actions)=>{
            state.Popularp = [...state.Popularp, ...actions.payload]
         },
         latestTrailer: (state,actions)=>{
            state.Ltrailer = actions.payload;
         },
         SearchAny: (state,actions)=>{
            state.search = actions.payload;
         },
         UpdateSearchQuery: (state,actions)=>{
            state.searchQuery = actions.payload;
         },
         Mainpageimage: (state,actions)=>{
            state.mainpage = actions.payload;
         },
         adderrors: (state, action) => {
            state.errors.push(action.payload);
         },
        removeerrors: (state, action) => {
            state.errors = [];
        },
         changepage: (state, action) => {
            state.page += action.payload;
        },
      },
})

export default movieReducer.reducer;

export const {addmovies,topRatedTV,FreeMovie,PopularPeople,popularTV,nowPlayingTV,upcomingTV,FreeTV,updatepage,topRatedMovies,upcomingmovies,nowPlayingmovies,changepage,Mainpageimage,popularRent,SearchAny,UpdateSearchQuery,removeerrors,popularStream,adderrors,saveMoviesWeek,latestTrailer,popularTv,popularMovie,popularmovies,searchQuery} = movieReducer.actions;