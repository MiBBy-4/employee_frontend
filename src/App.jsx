import { Routes, Route } from 'react-router-dom';
import MainDepartment from './views/department/Main';
import MainEmployee from './views/employee/Main';
import Navigation from './components/templates/Navigation';
import Employee from './views/employee/Employee';
import EmployeeNew from './views/employee/New';
import EmployeeEdit from './views/employee/Edit';
import Department from './views/department/Department';
import DepartmentEdit from './views/department/Edit';
import DepartmentNew from './views/department/New';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/departments" element={<MainDepartment />} />
        <Route
          path="/employee"
          element={<MainEmployee />}
        />
        <Route path="/employee/:employeeId" element={<Employee />} />
        <Route path="/employee/:employeeId/edit" element={<EmployeeEdit />} />
        <Route path="/employee/new" element={<EmployeeNew />} />
        <Route path="/departments/:departmentId" element={<Department />} />
        <Route path="/departments/:departmentId/edit" element={<DepartmentEdit />} />
        <Route path="/departments/new" element={<DepartmentNew />} />
      </Routes>
    </div>
  );
}

export default App;
