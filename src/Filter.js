import { Form } from "react-bootstrap"
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";
import { useState } from "react";



const Filter = () => {
    const [moviList, setMoviList] = useState(MovieList);

    const onChange= (value) => {
             console.log(value);
             const newData = MovieList.filter(mov=> mov.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || 
             mov.rating.includes(value));
             setMoviList(newData);
         }

   return(
    
    <div className="mx-3">
        <Form className="d-flex mx-5">
         <Form.Control
           type="search"
           placeholder="Search"
           className="me-2"
           aria-label="Search"                     
           onChange={(e) => onChange(e.target.value)}
         />        
       </Form>

       <h1>Movies</h1>
       <div style={{display: 'flex'}}>
       {moviList.map((movie, index) => 
        <MovieCard mList = {movie} key={index} />)}
       </div>            
    </div>
   )
}

export default Filter


