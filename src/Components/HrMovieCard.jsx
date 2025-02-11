const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/original';

function HrMovieCard({movie}){
  return (
    <div>
        <img src={IMAGE_BASE_URL+ movie.backdrop_path}
        className='w-[110px] md:w-[260px] rounded-lg
        hover:border-[3px] border-gray-400 cursor-pointer
        hover:scale-110 transition-all duration-150 ease-in'
        />
        <h2 className='w-[110px] md:w-[260px] text-white
        mt-2'>{movie.title}
    </h2>
    </div>
  )
}

export default HrMovieCard;