import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Form, Button } from 'react-bootstrap';
import { postDepartment } from '../../requests/apiRequests/DepartmentRequests';

export default function DepartmentNew() {
  const [department, setDepartment] = useState();
  const navigate = useNavigate();

  function handleDepartmentChange(event) {
    const { target: { value, name } } = event;
    setDepartment({
      ...department,
      [name]: value,
    });
  }

  function handleSuccessfulPost() {
    navigate('/departments');
  }

  function formSubmit(formData) {
    const data = new FormData(formData);
    postDepartment(data, handleSuccessfulPost);
  }

  function handleSubmit(event) {
    formSubmit(event.target);
    event.preventDefault();
  }

  return (
    <section className="create-container">
      <div className="department-container">
        <div className="department-personal" id="cu-department">
          <div className="department-inner">
            <h1 className="department-id">ID</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Name of Department" name="department_name" onChange={handleDepartmentChange} className="cu-input" />
              </Form.Group>
              <Button variant="outline-success" type="submit" className="cu-btn">
                Create
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
