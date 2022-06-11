import { useEffect, useState } from 'react';
import { getEmployee } from '../../requests/apiRequests/EmployeeRequests';

export default function MainEmployee() {
  const [employee, setEmployee] = useState([]);

  const setState = async () => {
    const response = await getEmployee();
    setEmployee(response.data);
  };

  useEffect(() => {
    setState();
  });

  return (
    <div className="container">
      Employee Main Page
    </div>
  );
}
