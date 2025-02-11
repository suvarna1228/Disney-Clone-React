import GlobalApi from "../Services/GlobalApi"
import  { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { HiArrowSmLeft, HiArrowNarrowRight } from "react-icons/hi";
import HrMovieCard from "./HrMovieCard";

const screenWidth=window.innerWidth;
function MovieList({genreId,index_}) {
    const [MovieList,setMovieList]=useState([])
    const elementRef= useRef(null);
    
    useEffect(()=>{
        if (genreId) {
            getMoviesByGenreId();
        }
    }, []);

    const getMoviesByGenreId=()=>{
        GlobalApi.getMoviesByGenereId(genreId).then((resp)=>{
            // console.log(resp.data.results)
            setMovieList(resp.data.results)
    });

    };
    const sliderRight=(element)=>{
        element.scrollLeft+=screenWidth-110
      }
      const sliderLeft=(element)=>{
        element.scrollLeft-=screenWidth-110
      }
  return (
    <div className="relative">
     <HiArrowSmLeft 
     onClick={()=>sliderLeft(elementRef.current)} 
     className={`text-[50px] text-white
        p-2 z-10 cursor-pointer 
         hidden md:block absolute
         ${index_%3==0?'mt-[80px]':'mt-[150px]'} `}
      />
    
    <div ref={elementRef} 
    className="flex overflow-x-auto scrollbar-none 
    gap-8 pt-5 scroll-smooth px-3 pb-5 cursor-pointer">
        {MovieList.map((item,index)=>(
            <>
             {index_%3==0?<HrMovieCard movie={item}/>:<MovieCard key={item.id} movie={item}/>}
            </>
        
        ))}
       
    </div>

      <HiArrowNarrowRight  
      onClick={()=>sliderRight(elementRef.current)}
      className={`text-[50px] text-white hidden md:block
        p-2 cursor-pointer z-10 top-0
         absolute right-0 
         ${index_%3==0?'mt-[80px]':'mt-[150px]'}`} 
      />
    </div>
  )
}

export default MovieList;