
import Generes from "../Constant/GeneresList";
import MovieList from "./MovieList";
// import GeneresList from "../Constant/GeneresList";

function GenresMovieList() {
  return (
    <div>
        {Generes.map((item,index) =>(index<=4)&& (
            <div key={item.id} className="p-8 px-8 md:px-16">
                <h2 className="text-[20px] text-white font-bold">{item.name}</h2>
                 <MovieList genreId={item.id} index_={index}/>
            </div>
       ))}
    </div>
  );
};

export default GenresMovieList;