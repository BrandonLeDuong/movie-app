import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";
import { useState } from "react";

function Navigation({ getMovie }) {
  const [searchKey, setSearchKey] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovie(searchKey);
    setSearchKey(""); // Reset the search input field
  };

  return (
    <>
      <Navbar expand="lg" className="bg-dark navbar-dark custom-navbar">
        <Container fluid className="w-100">
          <Navbar.Brand href="#">Brandon.Movie</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Movie Search"
                className="me-2"
                aria-label="Search"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
              />
              <Button variant="secondary" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
