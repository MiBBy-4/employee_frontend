import { Navbar, Nav } from 'react-bootstrap';

export default function Navigation() {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link className="d-inline p-2 bg-dark text-white" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="d-inline p-2 bg-dark text-white" href="/employee">
            Employee
          </Nav.Link>
          <Nav.Link className="d-inline p-2 bg-dark text-white" href="/departments">
            Departments
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
