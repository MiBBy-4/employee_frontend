import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { getEmployee, deleteEmployee } from '../../requests/apiRequests/EmployeeRequests';

export default function Employee() {
  const [employee, setEmployee] = useState([]);
  const { employeeId } = useParams();
  const navigate = useNavigate();

  const setState = async () => {
    const response = await getEmployee(employeeId);
    const { data } = response;
    setEmployee(data[0]);
  };

  useEffect(() => {
    setState();
  });

  const handleChangeClick = () => {
    navigate(`/employee/${employeeId}/edit`);
  };

  const handleDeleteClick = async () => {
    await deleteEmployee(employeeId);
  };

  const handleDepartmentClick = (departmentId) => {
    navigate(`departments/${departmentId}`);
  };

  return (
    <section className="department-section" id="employees-section">
      <div className="department-container" id="employee-container">
        <div className="department-personal">
          <div className="department-inner">
            <h1 className="department-id">{employee.employee_id}</h1>
            <h4 className="department-name">{employee.employee_name}</h4>
            <div className="employee-footer">
              <p className="employee-date">
                <span>Date of joining: </span>
                {employee.date_of_joining}
              </p>
              <p className="employee-department">
                <span>Department: </span>
                <button type="submit" onClick={() => handleDepartmentClick(employee.department_id)} className="btn-dep">{employee.department_name}</button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="actions-container">
        <div className="actions-inner">
          <button className="btn btn-outline-warning department-action" type="submit" onClick={() => handleChangeClick()}>Change</button>
          <button className="btn btn-outline-danger department-action" type="submit" onClick={() => handleDeleteClick()}>Delete</button>
        </div>
      </div>
    </section>
  );
}
