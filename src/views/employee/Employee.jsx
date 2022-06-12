import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getEmployee } from '../../requests/apiRequests/EmployeeRequests';

export default function Employee() {
  const [employee, setEmployee] = useState([]);
  const { employeeId } = useParams();

  const setState = async () => {
    const response = await getEmployee(employeeId);
    const { data } = response;
    setEmployee(data);
  };

  useEffect(() => {
    setState();
  });

  return (
    <div className="container">
      Personal page of
      {employeeId}
      Employee
    </div>
  );
}
