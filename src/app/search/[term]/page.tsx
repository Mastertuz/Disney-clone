import { notFound } from "next/navigation"

type Props = {
   params:{
    term:string,
   }
}

function Searchpage({params:{term}}:Props) {
  if(!term) notFound()
    const termToUse=decodeURI(term)

  //Api call to get the searched movies
  //APi call to get the Popular movies
  return (
    <div>Welcome to Searchpage  : {termToUse}</div>
  )
}

export default Searchpage