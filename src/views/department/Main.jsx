import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/esm/Table';
import { getDepartments } from '../../requests/apiRequests/DepartmentRequests';

export default function MainDepartment() {
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  const setState = async () => {
    const response = await getDepartments();
    setDepartments(response.data);
  };

  useEffect(() => {
    setState();
  });

  const handleEditClick = (departmentId) => {
    navigate(`/departments/${departmentId}`);
  };

  return (
    <div className="container">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Department name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr>
              <td>{department.department_name}</td>
              <td><button className="btn btn-secondary" type="button" onClick={() => handleEditClick(department.department_id)}>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button className="btn btn-success w-100" type="button">Create a department</button>
    </div>
  );
}
