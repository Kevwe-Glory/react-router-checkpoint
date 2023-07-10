import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MovieList from "./MovieList";

// const MovieList = MovieList
const Description = () => { 

  const { title } =useParams();
    

  return (
    <div>
         {MovieList 
                .filter(movie => movie.title === title) 
                .map((movie, index) => {
                  const {posterURL, title, rating, genre, stars, description,} = movie       
       return(    
        <Container key={index}>
      <Row>
        <Col sm={8}>
            <Card style={{margin:'0.5rem',  }}>
                {/* <video width="100%" height="100%" controls>
                    <source src="https://www.youtube.com/embed/yyMH_Gq2nHE" />
                </video> */}
                <iframe maxWidth="100%" height="421" src={posterURL} title={title} frameborder="0"  allowfullscreen></iframe>
                <Card.Body>
                    <Card.Title>{title}</Card.Title> 
                    <Card.Text>Description: {description}</Card.Text>
                    <br />
                    <Card.Text>Genre: {genre}</Card.Text>
                    <Card.Text>Stars: {stars}</Card.Text>                   
                    <Card.Text>Rating: {rating} star</Card.Text>                    
                </Card.Body>
            </Card>
        </Col>
        <Col sm={4}>
        <img style={{maxWidth: '100%'}} src="https://media.istockphoto.com/id/860904994/vector/black-friday-design-for-advertising-banners-leaflets-and-flyers.jpg?s=612x612&w=0&k=20&c=G5E0WPpeGBmKugvZ_DnBKtmxLci8E7lpiT5H2Gq3Bds=" alt=""/>
        </Col>
      </Row>      
    </Container>
       )
    } 
         )}      
    </div>
  )
}

export default Description


