import axios from "axios";

const movieBaseUrl ="https://api.themoviedb.org/3";
const api_key='eed7d77dd1f82b3d6ae58ec08fa3393f';
const getMoviesByGenereBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';
const getTrendingVideos = axios.get(movieBaseUrl+"/trending/movie/week?api_key="+api_key);

const getMoviesByGenereId =(id)=>
    axios.get(getMoviesByGenereBaseURL+"&with_genres="+id)
export default {
    getTrendingVideos,
    getMoviesByGenereId
};
// https://api.themoviedb.org/3/trending/movie/week?api_key=eed7d77dd1f82b3d6ae58ec08fa3393f