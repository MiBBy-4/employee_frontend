import { NavLink, Navbar, Nav } from 'react-bootstrap';

export default function Navigation() {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <NavLink className="d-inline p-2 bg-dark text-white" to="/">
            Home
          </NavLink>
          <NavLink className="d-inline p-2 bg-dark text-white" to="/employee">
            Employee
          </NavLink>
          <NavLink className="d-inline p-2 bg-dark text-white" to="/departments">
            Departments
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
