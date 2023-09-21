import axios from "axios";
import { adderrors,FreeTV,FreeMovie,nowPlayingTV,PopularPeople,upcomingTV,addmovies,popularTV,topRatedTV,SearchAny,topRatedMovies,upcomingmovies,nowPlayingmovies,Mainpageimage,saveMoviesWeek,popularStream,popularRent,popularmovies,updatepage,latestTrailer,popularTv,searchQuery ,popularMovie} from "../reducers/movieReducer";

export const asyncaddmovies = ()=> async (dispatch,getState)=>{
    // console.log("Action GetState: ", getState());
    try{
        const { page } = getState().movieReducer;
        const {data} = await axios.get(
            // `https://api.themoviedb.org/3/movie/popular?api_key=24353009232f42a282a3a6abc9dccee7&page=${page}`
            // `https://api.themoviedb.org/3/movie/popular?api_key=24353009232f42a282a3a6abc9dccee7&page=${page}`
            `https://api.themoviedb.org/3/trending/movie/day?api_key=24353009232f42a282a3a6abc9dccee7&language=en-US&page=${page}`
            // `https://api.unsplash.com/photos?client_id=zPjCLEodnXSkXMl1uvjydLDZSJSJ1UzDzUX2Br4PfAo&page=${page}&per_page=12`

        );
        console.log(data);
        dispatch(addmovies(data.results));
    }catch(error){
        dispatch(adderrors(error.response.data.status_message));
    }
    
};

export const asyncFreemovies = ()=> async (dispatch,getState)=>{
    // console.log("Action GetState: ", getState());
    try{
        const { page } = getState().movieReducer;
        const {data} = await axios.get(
            // `https://api.themoviedb.org/3/movie/popular?api_key=24353009232f42a282a3a6abc9dccee7&page=${page}`
            // `https://api.themoviedb.org/3/movie/popular?api_key=24353009232f42a282a3a6abc9dccee7&page=${page}`
            `https://api.themoviedb.org/3/trending/movie/day?api_key=24353009232f42a282a3a6abc9dccee7&language=en-US&page=${page}`
            // `https://api.unsplash.com/photos?client_id=zPjCLEodnXSkXMl1uvjydLDZSJSJ1UzDzUX2Br4PfAo&page=${page}&per_page=12`

        );
        dispatch(FreeMovie(data.results));
    }catch(error){
        dispatch(adderrors(error.response.data.status_message));
    }
    
};

export const asyncFreeTV = ()=> async (dispatch,getState)=>{
    // console.log("Action GetState: ", getState());
    try{
        const { page } = getState().movieReducer;
        const {data} = await axios.get(
            // `https://api.themoviedb.org/3/movie/popular?api_key=24353009232f42a282a3a6abc9dccee7&page=${page}`
            // `https://api.themoviedb.org/3/movie/popular?api_key=24353009232f42a282a3a6abc9dccee7&page=${page}`
            // `https://api.themoviedb.org/3/tv/popular?api_key=24353009232f42a282a3a6abc9dccee7&language=en-US`
            `https://api.themoviedb.org/3/trending/tv/day?api_key=24353009232f42a282a3a6abc9dccee7&language=en-US&page=${page}`
            // `https://api.unsplash.com/photos?client_id=zPjCLEodnXSkXMl1uvjydLDZSJSJ1UzDzUX2Br4PfAo&page=${page}&per_page=12`

        );
        dispatch(FreeTV(data.results));
    }catch(error){
        dispatch(adderrors(error.response.data.status_message));
    }
    
};

export const asyncTrendingWeek = ()=> async (dispatch,getState)=>{
    try{
        const { page } = getState().movieReducer;
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=24353009232f42a282a3a6abc9dccee7&language=en-US`
        );
        console.log(data);
        dispatch(saveMoviesWeek(data.results));
    }catch(error){
        // dispatch(adderrors(error.response.data.status_message));
    }
    
};

export const asyncLatestTrailer = ()=> async (dispatch,getState)=>{
    try{
        const { page } = getState().movieReducer;
        const {data} = await axios.get(
            
            `https://api.themoviedb.org/3/movie/latest?api_key=24353009232f42a282a3a6abc9dccee7&language=en-US`
        );
      
        dispatch(latestTrailer(data.results));
    }catch(error){
        dispatch(adderrors(error.response.data.status_message));
    } 
};

export const asyncPopularTv = ()=> async (dispatch,getState)=>{
    try{
        const { page } = getState().movieReducer;
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/tv/popular?api_key=24353009232f42a282a3a6abc9dccee7&language=en-US`
        );
        console.log(data);
        dispatch(popularTv(data.results));
    }catch(error){
        dispatch(adderrors(error.response.data.status_message));
    } 
};

export const asyncPopularStream = ()=> async (dispatch,getState)=>{
    try{
        const { page } = getState().movieReducer;
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/tv/top_rated?api_key=24353009232f42a282a3a6abc9dccee7&language=en-US`
        );
        dispatch(popularStream(data.results));
    }catch(error){
        dispatch(adderrors(error.response.data.status_message));
    } 
};

export const asyncPopularMovie = ()=> async (dispatch,getState)=>{
    try{
        const { page } = getState().movieReducer;
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=24353009232f42a282a3a6abc9dccee7&page=${page}`
        );
        // const {data} = await axios.get(
        //     `https://api.themoviedb.org/3/movie/popular?api_key=24353009232f42a282a3a6abc9dccee7&language=en-US`
        //     //   `https://api.themoviedb.org/3/tv/on_the_air?api_key=24353009232f42a282a3a6abc9dccee7&language=en-US`
        //     // `https://api.themoviedb.org/3/tv/top_rated?api_key=24353009232f42a282a3a6abc9dccee7&language=en-US`
        // );
        dispatch(popularMovie(data.results));
    }catch(error){
        dispatch(adderrors(error.response.data.status_message));
    } 
};

export const asyncPopularRent = ()=> async (dispatch,getState)=>{
    try{
        const { page } = getState().movieReducer;
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/tv/top_rated?api_key=24353009232f42a282a3a6abc9dccee7&language=en-US`
            //   `https://api.themoviedb.org/3/tv/on_the_air?api_key=24353009232f42a282a3a6abc9dccee7&language=en-US`
            // `https://api.themoviedb.org/3/tv/top_rated?api_key=24353009232f42a282a3a6abc9dccee7&language=en-US`
        );
        dispatch(popularRent(data.results));
    }catch(error){
        dispatch(adderrors(error.response.data.status_message));
    } 
};

export const asyncnowPlayingmovies = ()=> async (dispatch,getState)=>{
    // ${page}
    try{
        
        const { page } = getState().movieReducer;
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=24353009232f42a282a3a6abc9dccee7&page=${page}`
        );
        dispatch(nowPlayingmovies(data.results));
        
    }catch(error){
        dispatch(adderrors(error.response.data.status_message));
    } 
};

export const asyncPopularMovies = ()=> async (dispatch,getState)=>{
    // ${page}
    try{
        
        const { page } = getState().movieReducer;
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=24353009232f42a282a3a6abc9dccee7&page=${page}`
        );
        dispatch(popularmovies(data.results));
        console.log(data ,'its main result');

        
    }catch(error){
        dispatch(adderrors(error.response.data.status_message));
    } 
};

export const asyncPopularTV = ()=> async (dispatch,getState)=>{
    // ${page}
    try{
        
        const { page } = getState().movieReducer;
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/tv/popular?api_key=24353009232f42a282a3a6abc9dccee7&page=${page}`
        );
        dispatch(popularTV(data.results));
        console.log(data ,'its main result');

        
    }catch(error){
        dispatch(adderrors(error.response.data.status_message));
    } 
};

export const asyncUpcomingTV = ()=> async (dispatch,getState)=>{
    // ${page}
    try{
        
        const { page } = getState().movieReducer;
        const {data} = await axios.get(
            // `ttps://api.themoviedb.org/3/tv/upcoming?api_key=24353009232f42a282a3a6abc9dccee7&page=${page}`
            `https://api.themoviedb.org/3/tv/airing_today?api_key=24353009232f42a282a3a6abc9dccee7&page=${page}`

        );
        dispatch(upcomingTV(data.results));
        console.log(data ,'its main result');

        
    }catch(error){
        // dispatch(adderrors(error.response.data.status_message));
    } 
};

export const asyncnowPlayingTV = ()=> async (dispatch,getState)=>{
    // ${page}
    try{
        
        const { page } = getState().movieReducer;
        const {data} = await axios.get(
            // `ttps://api.themoviedb.org/3/tv/upcoming?api_key=24353009232f42a282a3a6abc9dccee7&page=${page}`
            // `https://api.themoviedb.org/3/tv/airing_today?api_key=24353009232f42a282a3a6abc9dccee7&page=${page}`
            `https://api.themoviedb.org/3/tv/popular?api_key=24353009232f42a282a3a6abc9dccee7&language=en-USpage=${page}`

        );
        dispatch(nowPlayingTV(data.results));
        console.log(data ,'its main result');

        
    }catch(error){
        // dispatch(adderrors(error.response.data.status_message));
    } 
};

export const asynctopRatedTV = ()=> async (dispatch,getState)=>{
    // ${page}
    try{
        
        const { page } = getState().movieReducer;
        const {data} = await axios.get(
            // `ttps://api.themoviedb.org/3/tv/upcoming?api_key=24353009232f42a282a3a6abc9dccee7&page=${page}`
            // `https://api.themoviedb.org/3/tv/airing_today?api_key=24353009232f42a282a3a6abc9dccee7&page=${page}`
            // `https://api.themoviedb.org/3/tv/popular?api_key=24353009232f42a282a3a6abc9dccee7&language=en-USpage=${page}`
            `https://api.themoviedb.org/3/tv/top_rated?api_key=24353009232f42a282a3a6abc9dccee7&language=en-US&page=${page}`


        );
        dispatch(topRatedTV(data.results));
        console.log(data ,'its main result');

        
    }catch(error){
        // dispatch(adderrors(error.response.data.status_message));
    } 
};

export const asyncPopularPeople = ()=> async (dispatch,getState)=>{
    // ${page}
    try{
        
        const { page } = getState().movieReducer;
        const {data} = await axios.get(
          
            `https://api.themoviedb.org/3/person/popular?api_key=24353009232f42a282a3a6abc9dccee7&language=en-US&page=${page}`


        );
        dispatch(PopularPeople(data.results));
        console.log(data ,'its main result');

        
    }catch(error){
        // dispatch(adderrors(error.response.data.status_message));
    } 
};

export const asyncUpcomingMovies = ()=> async (dispatch,getState)=>{
    // ${page}
    try{
        
        const { page } = getState().movieReducer;
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=24353009232f42a282a3a6abc9dccee7&page=${page}`
        );
        dispatch(upcomingmovies(data.results));
        
    }catch(error){
        dispatch(adderrors(error.response.data.status_message));
    } 
};

export const asyncTopRatedMovies = ()=> async (dispatch,getState)=>{
    // ${page}
    try{
        
        const { page } = getState().movieReducer;
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=24353009232f42a282a3a6abc9dccee7&page=${page}`
        );
        dispatch(topRatedMovies(data.results));
        
    }catch(error){
        dispatch(adderrors(error.response.data.status_message));
    } 
};

export const asyncSearch = (searchQuery)=> async (dispatch,getState)=>{
    // ${page}
    try{
        const { page } = getState().movieReducer;
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/search/multi?api_key=24353009232f42a282a3a6abc9dccee7&query=${searchQuery}`
        );
        dispatch(SearchAny(data.results));
        console.log(data.results,"its action data");
        console.log(searchQuery,"its searchquery");
        console.log(data,"uts search data janav");
    }catch(error){
        // dispatch(adderrors(error.response.data.status_message));
    } 
};


