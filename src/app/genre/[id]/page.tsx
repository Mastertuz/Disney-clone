import MoviesCarousel from "@/components/MoviesCarousel"
import { getDiscoverMovies } from "@/lib/getMovies"

type Props={
  params:{
    id:string,
  },
  searchParams:{
    genre:string,
  }
}

async function Genrepage({params:{id},searchParams:{genre}}:Props) {
  const movies = await getDiscoverMovies(id)
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {genre}</h1>
      </div>

      <MoviesCarousel title={'Genre'} movies={movies} isVertical/>
    </div>
  )
}

export default Genrepage