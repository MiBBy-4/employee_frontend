import { useEffect, useState } from 'react';
import { getEmployees, deleteEmployee } from '../../requests/apiRequests/EmployeeRequests';
import PaginatedItems from '../../components/pagination/EmployeesPaginate';

export default function MainEmployee() {
  const [employees, setEmployee] = useState([]);

  const setState = async () => {
    const response = await getEmployees();
    setEmployee(response.data);
  };

  useEffect(() => {
    setState();
  });

  return (
    <div>
      <section className="preview-section">
        <h1 className="text-center">Employees</h1>
        <div className="row preview-row">
          <div className="col-6 preview-first-col">
            <h1>Check Employees</h1>
            <a href="#employees" className="btn preview-btn">Check</a>
          </div>
          <div className="col-6 preview-second-col">
            <h1>Create an Employee</h1>
            <a href="/employee/new " className="btn preview-btn">Create</a>
          </div>
        </div>
      </section>
      <div id="employees">
        {employees.length > 0 && <PaginatedItems itemsPerPage={10} employees={employees} />}
      </div>
    </div>
  );
}
