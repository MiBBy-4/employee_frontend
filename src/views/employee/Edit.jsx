import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Form, Button } from 'react-bootstrap';
import { getEmployee, patchEmployee, getActiveDepartments } from '../../requests/apiRequests/EmployeeRequests';

export default function EmployeeEdit() {
  const [employee, setEmployee] = useState([]);
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();
  const { employeeId } = useParams();

  const setState = async () => {
    let response = await getEmployee(employeeId);
    setEmployee(response.data);
    response = await getActiveDepartments();
    setDepartments(response.data);
  };

  useEffect(() => {
    setState();
  });

  function handleEmployeeChange(event) {
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
    patchEmployee(data, employeeId, handleSuccessfulPost);
  }

  function handleSubmit(event) {
    formSubmit(event.target);
    event.preventDefault();
  }

  return (
    <div className="container">
      {employee.map((e) => (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Employee name</Form.Label>
            <Form.Control type="text" value={e.employee_name} placeholder="Employee name" name="employee_name" onChange={handleEmployeeChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date of joining</Form.Label>
            <Form.Control type="date" value={e.date_of_joining} placeholder="Choose a date" name="date_of_joining" onChange={handleEmployeeChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Department</Form.Label>
            <Form.Select name="department_id" onChange={handleEmployeeChange}>
              {departments.map((department) => (
                <option value={department.department_id}>{department.department_name}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Button variant="success" type="submit">
            Update
          </Button>
        </Form>
      ))}
    </div>
  );
}
