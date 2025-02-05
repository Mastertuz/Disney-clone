type Props={
  params:{
    id:string,
  },
  searchParams:{
    genre:string,
  }
}

function Genrepage({params:{id},searchParams:{genre}}:Props) {
  return (
    <div>WElcome to {genre}  id : {id}</div>
  )
}

export default Genrepage