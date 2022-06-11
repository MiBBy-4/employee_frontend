import axios from 'axios';

export function getDepartments() {
  return axios.get(`${process.env.REACT_APP_API}api/Department`);
}

export function postDepartment(data) {
  return axios.post(`${process.env.REACT_APP_API}api/Department`, {
    department_name: data.get('department_name')
  });
}

export function patchDepartment(data) {
  return axios.post(`${process.env.REACT_APP_API}api/Department`, {
    department_name: data.get('department_name')
  });
}

export function deleteDepartment(departmentId) {
  return axios.delete(`${process.env.REACT_APP_API}api/Department/${departmentId}`);
}

export function getDepartment(departmentId) {
    return axios.get(`${process.env.REACT_APP_API}api/Department/${departmentId}`);
}
