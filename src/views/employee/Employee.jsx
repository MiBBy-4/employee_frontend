import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getEmployee } from '../../requests/apiRequests/EmployeeRequests';

export default function Employee() {
  const [employee, setEmployee] = useState([]);
  const { employeeId } = useParams();

  const setState = async () => {
    const response = await getEmployee(employeeId);
    const { data } = response;
    setEmployee(data[0]);
  };

  useEffect(() => {
    setState();
  });

  return (
    <div className="container">
      <div className="">
        <span className="text">{employee.employee_name}</span>
      </div>
    </div>
  );
}
