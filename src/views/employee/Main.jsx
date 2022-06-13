import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/esm/Table';
import { getEmployees, deleteEmployee } from '../../requests/apiRequests/EmployeeRequests';

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

  const handleShowClick = (employeeId) => {
    navigate(`/employee/${employeeId}`);
  };

  const handleCreateClick = () => {
    navigate('/employee/new');
  };

  const handleEditClick = (employeeId) => {
    navigate(`/employee/${employeeId}/edit`);
  };

  const handleDeleteClick = async (employeeId) => {
    await deleteEmployee(employeeId);
    navigate('/employee');
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
              <td>
                <button className="btn btn-secondary" type="button" onClick={() => handleEditClick(employee.employee_id)}>Edit</button>
                <button className="btn btn-secondary" type="button" onClick={() => handleShowClick(employee.employee_id)}>Show</button>
                <button className="btn btn-danger" type="button" onClick={() => handleDeleteClick(employee.employee_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button className="btn btn-success w-100" type="button" onClick={() => handleCreateClick()}>Create an employee</button>
    </div>
  );
}
