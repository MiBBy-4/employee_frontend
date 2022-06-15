import {
  PersonLinesFill,
  PersonPlusFill,
  PlusSquareFill,
  CardList,
} from 'react-bootstrap-icons';

export default function MainPage() {
  return (
    <div>
      <section className="welcome-section">
        <div className="row">
          <div className="col-6 welcome-section-header-text-container">
            <h1 className="welcome-section-header-text">Manage Rule Dismiss</h1>
          </div>
          <div className="col-6 welcome-section-paragraph-text-container">
            <p className="welcome-section-paragraph-text">Service that helps you to dismiss.</p>
          </div>
        </div>
      </section>
      <section className="services-section">
        <div className="services-section-header-container">
          <h1 className="services-section-header">Services</h1>
        </div>
        <div className="services">
          <div className="services-section-row">
            <div className="service-container">
              <PersonLinesFill className="service-badge" />
              <h1 className="service-container-header">All Employees</h1>
              <button className="btn service-btn" type="submit">Show</button>
            </div>
            <div className="service-container service-about-us">
              <h1 className="service-container-header service-about-us-header">About us</h1>
              <p className="service-about-us-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, nemo!</p>
              <button className="btn service-btn" type="submit">Contact</button>
            </div>
            <div className="service-container">
              <PersonPlusFill className="service-badge" />
              <h1 className="service-container-header">New Employee</h1>
              <button className="btn service-btn" type="submit">New</button>
            </div>
          </div>
          <div className="services-section-row second-services-row">
            <div className="service-container">
              <PersonLinesFill className="service-badge" />
              <h1 className="service-container-header">All Departments</h1>
              <button className="btn service-btn" type="submit">Show</button>
            </div>
            <div className="service-container">
              <PlusSquareFill className="service-badge" />
              <h1 className="service-container-header">New Department</h1>
              <button className="btn service-btn" type="submit">New</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
