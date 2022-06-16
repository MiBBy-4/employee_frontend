import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import ReactPaginate from 'react-paginate';
import { getDepartment, getEmployees, deleteDepartment } from '../../requests/apiRequests/DepartmentRequests';
import PaginatedItems from '../../components/pagination/EmployeesPaginate';

export default function Department() {
  const [department, setDepartment] = useState([]);
  const [employees, setEmployees] = useState([]);
  const { departmentId } = useParams();
  const navigate = useNavigate();

  const setState = async () => {
    let response = await getDepartment(departmentId);
    setDepartment(response.data[0]);
    response = await getEmployees(departmentId);
    setEmployees(response.data);
  };

  useEffect(() => {
    setState();
  });

  const handleChangeClick = () => {
    navigate(`/departments/${departmentId}/edit`);
  };

  const handleDeleteClick = async () => {
    await deleteDepartment(departmentId);
    navigate('/departments');
  };

  return (
    <div>
      <section className="department-section">
        <div className="department-container">
          <div className="department-personal">
            <div className="department-inner">
              <h1 className="department-id">{department.department_id}</h1>
              <h4 className="department-name">{department.department_name}</h4>
            </div>
          </div>
        </div>
        <div className="actions-container">
          <div className="actions-inner">
            <a className="btn btn-outline-secondary department-action btn-lg " href="#employees">Department employees</a>
            <button className="btn btn-outline-warning department-action" type="submit" onClick={() => handleChangeClick()}>Change</button>
            <button className="btn btn-outline-danger department-action" type="submit" onClick={() => handleDeleteClick()}>Delete</button>
          </div>
        </div>
      </section>
      {employees.length > 0 && <PaginatedItems itemsPerPage={10} employees={employees} />}
    </div>
  );
}
