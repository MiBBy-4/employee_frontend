import { useEffect, useState } from 'react';

export default function MainDepartment() {
  const [departments, setDepartment] = useState([]);

  useEffect(() => {
    console.log('Test');
  });

  return (
    <div className="container">
      Department Main Page
    </div>
  );
}
