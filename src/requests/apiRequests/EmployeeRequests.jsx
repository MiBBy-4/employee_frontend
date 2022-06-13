import axios from 'axios';

export function getEmployees() {
  return axios.get(`${process.env.REACT_APP_API}api/Employee`);
}

export async function postEmployee(data, handleSuccessfulPost) {
  const response = await axios.post(`${process.env.REACT_APP_API}api/Employee`, {
    employee_name: data.get('employee_name'),
    date_of_joining: data.get('date_of_joining'),
    department_id: data.get('department_id'),
  });

  const { status } = response;
  if (status === 200) {
    handleSuccessfulPost();
  }
}

export async function patchEmployee(data, employeeId, handleSuccessfulPost) {
  const response = await axios.patch(`${process.env.REACT_APP_API}api/Employee`, {
    employee_id: employeeId,
    employee_name: data.get('employee_name'),
    date_of_joining: data.get('date_of_joining'),
    department_id: data.get('department_id'),
  });

  const { status } = response;
  if (status === 200) {
    handleSuccessfulPost();
  }
}

export function deleteEmployee(employeeId) {
  return axios.delete(`${process.env.REACT_APP_API}api/Employee/${employeeId}`);
}

export function getEmployee(employeeId) {
  return axios.get(`${process.env.REACT_APP_API}api/Employee/${employeeId}`);
}

export function getActiveDepartments() {
  return axios.get(`${process.env.REACT_APP_API}api/Employee/GetAllDepartmentNames`);
}
