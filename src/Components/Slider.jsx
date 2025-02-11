import  {useEffect, useState,useRef} from 'react';
import GlobalApi from '../Services/GlobalApi';
const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/original';
import { HiArrowSmLeft, HiArrowNarrowRight } from "react-icons/hi";

const screenWidth=window.innerWidth;
const Slider = () => {
    const [movieList,setMovieList]=useState([]);
    const elementRef= useRef();
    useEffect(()=>{
            getTrendingMovies();
    },[])

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
           console.log(resp.data.results)
           setMovieList(resp.data.results)
        })
    }
    const sliderRight=(element)=>{
      element.scrollLeft+=screenWidth-110
    }
    const sliderLeft=(element)=>{
      element.scrollLeft-=screenWidth-110
    }
  return (
    <div>
      <HiArrowSmLeft className='hidden md:block text-white text-[30px] absolute mx-8 cursor-pointer mt-[150px] '
      onClick={()=>sliderLeft(elementRef.current)}/>
      <HiArrowNarrowRight className='hidden md:block text-white text-[30px] cursor-pointer absolute mx-8 mt-[150px] right-0' 
      onClick={()=>sliderRight(elementRef.current)}/>
    
    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth ' ref={elementRef}>
      {movieList.map((item)=>(
        
        <img 
        key={item.id}
        src={IMAGE_BASE_URL+item.backdrop_path}
        alt={item.title}
        className="min-w-full md:h-[500px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"/>
      ))}

    </div>
    </div>
    
  )
}

export default Slider;