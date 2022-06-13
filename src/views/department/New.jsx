import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Form, Button } from 'react-bootstrap';
import { postDepartment } from '../../requests/apiRequests/DepartmentRequests';

export default function DepartmentNew() {
  const [department, setDepartment] = useState();
  const navigate = useNavigate();

  function handleIdeaChange(event) {
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
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Department Name</Form.Label>
          <Form.Control type="text" placeholder="Name of Department" name="department_name" onChange={handleIdeaChange} />
        </Form.Group>
        <Button variant="success" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}
