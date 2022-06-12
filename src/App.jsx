import { Routes, Route } from 'react-router-dom';
import MainDepartment from './views/department/Main';
import MainEmployee from './views/employee/Main';
import Navigation from './components/templates/Navigation';
import Employee from './views/employee/Employee';

function App() {
  return (
    <div className="App">
      <Navigation />
      <h1 className="text-center">
        React Application
      </h1>
      <Routes>
        <Route path="/departments" element={<MainDepartment />} />
        <Route
          path="/employee"
          element={<MainEmployee />}
        />
        <Route path="/employee/:employeeId" element={<Employee />} />
      </Routes>
    </div>
  );
}

export default App;
