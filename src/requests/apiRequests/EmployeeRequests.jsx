import axios from 'axios';

export function getEmployees() {
  return axios.get(`${process.env.REACT_APP_API}api/Employee`);
}

export function postEmployee(data) {
  return axios.post(`${process.env.REACT_APP_API}api/Employee`, {
    employee_name: data.get('employee_name'),
    date_of_joining: data.get('date_of_joining'),
    photo_file_name: data.get('photo_file_name'),
    depatrment_id: data.get('depatrment_id'),
  });
}

export function patchEmployee(data) {
  return axios.post(`${process.env.REACT_APP_API}api/Employee`, {
    employee_name: data.get('employee_name'),
    date_of_joining: data.get('date_of_joining'),
    photo_file_name: data.get('photo_file_name'),
    depatrment_id: data.get('depatrment_id'),
  });
}

export function deleteEmployee(employeeId) {
  return axios.delete(`${process.env.REACT_APP_API}api/Employee/${employeeId}`);
}

export function getEmployee(employeeId) {
  return axios.get(`${process.env.REACT_APP_API}api/Employee/${employeeId}`);
}
