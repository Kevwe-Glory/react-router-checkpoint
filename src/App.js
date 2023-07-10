import { Route, Routes } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Filter from "./Filter";
import Description from "./Description";



function App() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark" className="mb-3">
      <Container>
        <Navbar.Brand href="/">GMC-Hub</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>          
        </Nav>
      </Container>
    </Navbar>
    <Routes>
      <Route index element={<Filter />}/> 
      <Route path="/cards/:title" element= {<Description  />} />
                        
    </Routes>    
    </>
  );
}

export default App;
