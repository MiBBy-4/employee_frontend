import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Form, Button } from 'react-bootstrap';
import { getDepartment, patchDepartment } from '../../requests/apiRequests/DepartmentRequests';

export default function DepartmentEdit() {
  const [department, setDepartment] = useState({});
  const { departmentId } = useParams();
  const navigate = useNavigate();

  const setState = async () => {
    const response = await getDepartment(departmentId);
    const { data } = response;
    setDepartment(data[0]);
  };

  useEffect(() => {
    setState();
  });

  function handleDepartmentChange(event) {
    const { target: { value, name } } = event;
    setDepartment({
      ...department,
      [name]: value,
    });
  }

  function handleSuccessfulPost() {
    navigate('/departments');
  }

  function formSubmit(formData) {
    const data = new FormData(formData);
    patchDepartment(data, departmentId, handleSuccessfulPost);
  }

  function handleSubmit(event) {
    formSubmit(event.target);
    event.preventDefault();
  }

  return (
    <section className="create-container">
      <div className="department-container">
        <div className="department-personal" id="cu-department">
          <div className="department-inner">
            <h1 className="department-id">{department.department_id}</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control name="department_name" type="text" placeholder="Name of Department" onChange={handleDepartmentChange} className="cu-input" />
              </Form.Group>
              <Button variant="outline-success" type="submit" className="cu-btn">
                Update
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
