import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getDepartment } from '../../requests/apiRequests/DepartmentRequests';

export default function Department() {
  const [department, setDepartment] = useState([]);
  const { departmentId } = useParams();

  const setState = async () => {
    const response = await getDepartment(departmentId);
    const { data } = response;
    setDepartment(data[0]);
  };

  useEffect(() => {
    setState();
  });

  return (
    <div className="container">
      <div className="">
        <span className="text">{department.department_name}</span>
      </div>
    </div>
  );
}
