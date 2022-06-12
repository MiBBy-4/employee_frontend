import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getDepartment } from '../../requests/apiRequests/DepartmentRequests';

export default function Department() {
  const [department, setDepartment] = useState([]);
  const { departmentId } = useParams();

  const setState = async () => {
    const response = await getDepartment(departmentId);
    const { data } = response;
    setDepartment(data);
  };

  useEffect(() => {
    setState();
  });

  return (
    <div className="container">
      {department.map((d) => (
        <div className="">
          <span className="text">{d.department_name}</span>
        </div>
      ))}
    </div>
  );
}
