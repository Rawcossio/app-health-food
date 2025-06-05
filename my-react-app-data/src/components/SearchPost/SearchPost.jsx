import {  useEffect, useState } from "react";
const SearchPost = () => {
 
   const [query, setQuery]=useState("")
   const [posts, setPosts]=useState([])
  
   useEffect(() => {
       fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
         .then((response) => response.json())
         .then((data) => setPosts(data))
         .catch((error) => console.error("Error fetching data:", error));
   }, [query]);

   return(
    <div>
        <h1>Lista de Usuarios</h1>
        <input 
        type="text"
        placeholder="Buscar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
         />
        <ul>
            {posts.map((posts) => 
                <li key={posts.id}>{posts.title}</li>)}
        </ul>
    </div>
)
}
export default SearchPost;