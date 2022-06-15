import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from 'mdb-react-ui-kit';
import {
  Facebook,
  Twitter,
  Google,
  Instagram,
  Linkedin,
  Github,
} from 'react-bootstrap-icons';

export default function Footer() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <Facebook />
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <Twitter />
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <Google />
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/maks_klima/" role="button">
            <Instagram />
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/%D0%BC%D0%B0%D0%BA%D1%81%D0%B8%D0%BC-%D0%BA%D0%BB%D0%B8%D0%BC%D0%BE%D0%B2%D0%B8%D1%87-a595ab225" role="button">
            <Linkedin />
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/MiBBy-4" role="button">
            <Github />
          </a>
        </section>

        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol lg="" md="12" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="/employee" className="text-white">
                    Employees list
                  </a>
                </li>
                <li>
                  <a href="/employee/new" className="text-white">
                    Create an employee
                  </a>
                </li>
                <li>
                  <a href="/departments" className="text-white">
                    Departments list
                  </a>
                </li>
                <li>
                  <a href="/departments/new" className="text-white">
                    Create a department
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className="text-white" href="https://github.com/MiBBy-4">
          MiBBy-4
        </a>
      </div>
    </MDBFooter>
  );
}
