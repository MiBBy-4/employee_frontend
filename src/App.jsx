import { Routes, Route } from 'react-router-dom';
import MainDepartment from './Department/Main';
import MainEmployee from './Employee/Main';
import Navigation from './templates/Navigation';

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
      </Routes>
    </div>
  );
}

export default App;
