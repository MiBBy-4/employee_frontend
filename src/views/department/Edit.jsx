import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Form, Button } from 'react-bootstrap';
import { getDepartment, patchDepartment } from '../../requests/apiRequests/DepartmentRequests';

export default function DepartmentEdit() {
  const [department, setDepartment] = useState([]);
  const { departmentId } = useParams();
  const navigate = useNavigate();

  const setState = async () => {
    const response = await getDepartment(departmentId);
    const { data } = response;
    setDepartment(data[0]);
  };

  useEffect(() => {
    setState();
  });

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
    patchDepartment(data, departmentId, handleSuccessfulPost);
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
          <Form.Control type="text" value={department.department_name} placeholder="Name of Department" name="department_name" onChange={handleDepartmentChange} />
        </Form.Group>
        <Button variant="success" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}
