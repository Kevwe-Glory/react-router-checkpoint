import Card from 'react-bootstrap/Card';




const MovieCard = ({mList}) => {
   
  const {img, title, rating, } = mList
  return (
    <>    
        <div >                        
            <Card style={{ width: '20rem',  margin:'0.5rem',  }}>
                <Card.Img variant="top" src={img} alt="movie picture"  style={{height:'32vw', objectFit:'cover'}} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>                    
                    <Card.Text>Rating: {rating}star</Card.Text>
                  <Card.Link href={`/cards/${title}`}>Watch Trailer</Card.Link>                    
                </Card.Body>
            </Card>
                          
        </div>       
    </>
    
  )
}

export default MovieCard


