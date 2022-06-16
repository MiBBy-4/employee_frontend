import axios from 'axios';

export function getDepartments() {
  return axios.get(`${process.env.REACT_APP_API}api/Department`);
}

export async function postDepartment(data, handleSuccessfulPost) {
  const response = await axios.post(`${process.env.REACT_APP_API}api/Department`, {
    department_name: data.get('department_name'),
  });

  const { status } = response;
  if (status === 200) {
    handleSuccessfulPost();
  }
}

export async function patchDepartment(data, departmentId, handleSuccessfulPost) {
  const response = await axios.patch(`${process.env.REACT_APP_API}api/Department`, {
    department_id: departmentId,
    department_name: data.get('department_name'),
  });

  const { status } = response;
  if (status === 200) {
    handleSuccessfulPost();
  }
}

export function deleteDepartment(departmentId) {
  return axios.delete(`${process.env.REACT_APP_API}api/Department/${departmentId}`);
}

export function getDepartment(departmentId) {
  return axios.get(`${process.env.REACT_APP_API}api/Department/${departmentId}`);
}

export function getEmployees(departmentId) {
  return axios.get(`${process.env.REACT_APP_API}api/Department/GetEmployees/${departmentId}`);
}
