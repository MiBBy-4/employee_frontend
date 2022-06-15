import { Navbar, Nav } from 'react-bootstrap';

export default function Navigation() {
  return (
    <Navbar bg="dark" expand="lg" className="app-navbar">
      <Navbar.Brand className="app-navbar-brand">EmplDep</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav" className="app-navbar-items">
        <Nav>
          <Nav.Link className="d-inline p-2 text-white app-navbar-item" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="d-inline p-2 text-white app-navbar-item" href="/employee">
            Employees
          </Nav.Link>
          <Nav.Link className="d-inline p-2 text-white app-navbar-item" href="/departments">
            Departments
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
