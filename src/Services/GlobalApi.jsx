import axios from "axios";

const movieBaseUrl ="https://api.themoviedb.org/3";
const api_key='eed7d77dd1f82b3d6ae58ec08fa3393f';

const getTrendingVideos = axios.get(movieBaseUrl+"/trending/movie/week?api_key="+api_key);

export default {
    getTrendingVideos
};
// https://api.themoviedb.org/3/trending/movie/week?api_key=eed7d77dd1f82b3d6ae58ec08fa3393f