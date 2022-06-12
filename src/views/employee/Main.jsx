import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/esm/Table';
import { getEmployees } from '../../requests/apiRequests/EmployeeRequests';

export default function MainEmployee() {
  const [employees, setEmployee] = useState([]);
  const navigate = useNavigate();

  const setState = async () => {
    const response = await getEmployees();
    setEmployee(response.data);
  };

  useEffect(() => {
    setState();
  });

  const handleEditClick = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Date of joining</th>
            <th>Department Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr>
              <td>{employee.employee_name}</td>
              <td>{employee.date_of_joining}</td>
              <td>{employee.department_name}</td>
              <td><button className="btn btn-secondary" type="button" onClick={() => handleEditClick()}>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button className="btn btn-success w-100" type="button">Create an employee</button>
    </div>
  );
}
