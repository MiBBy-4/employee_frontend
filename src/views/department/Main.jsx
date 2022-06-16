import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/esm/Table';
import { getDepartments, deleteDepartment } from '../../requests/apiRequests/DepartmentRequests';

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

  const handleShowClick = (departmentId) => {
    navigate(`/departments/${departmentId}`);
  };

  return (
    <div>
      <section className="preview-section">
        <h1 className="text-center">Departments</h1>
        <div className="row preview-row">
          <div className="col-6 preview-first-col">
            <h1>Check Departments</h1>
            <a href="#departments" className="btn preview-btn">Check</a>
          </div>
          <div className="col-6 preview-second-col">
            <h1>Create a Department</h1>
            <a href="#!" className="btn preview-btn">Create</a>
          </div>
        </div>
      </section>

      <section className="departments" id="departments">
        <h1 className="text-center departments-header">Departments List</h1>
        <div className="departments-container">
          <div className="row departments-row">
            {departments.map((department) => (
              <div className="col-1 department">
                <h3 className="departments-id">{department.department_id}</h3>
                <h6 className="departments-name">{department.department_name}</h6>
                <button type="submit" onClick={() => handleShowClick(department.department_id)} className="btn departments-btn">Show</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
