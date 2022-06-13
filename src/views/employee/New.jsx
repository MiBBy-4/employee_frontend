import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Form, Button } from 'react-bootstrap';
import { postEmployee, getActiveDepartments } from '../../requests/apiRequests/EmployeeRequests';

export default function EmployeeNew() {
  const [employee, setEmployee] = useState([]);
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  const setState = async () => {
    const response = await getActiveDepartments();
    const { data } = response;
    setDepartments(data);
  };

  useEffect(() => {
    setState();
  });

  function handleIdeaChange(event) {
    const { target: { value, name } } = event;
    setEmployee({
      ...employee,
      [name]: value,
    });
  }

  function handleSuccessfulPost() {
    navigate('/employee');
  }

  function formSubmit(formData) {
    const data = new FormData(formData);
    postEmployee(data, handleSuccessfulPost);
  }

  function handleSubmit(event) {
    formSubmit(event.target);
    event.preventDefault();
  }

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Employee name</Form.Label>
          <Form.Control type="text" placeholder="Employee name" name="employee_name" onChange={handleIdeaChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date of joining</Form.Label>
          <Form.Control type="date" placeholder="Choose a date" name="date_of_joining" onChange={handleIdeaChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Department</Form.Label>
          <Form.Select name="department_id" onChange={handleIdeaChange}>
            {departments.map((department) => (
              <option value={department.department_id}>{department.department_name}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button variant="success" type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
}
