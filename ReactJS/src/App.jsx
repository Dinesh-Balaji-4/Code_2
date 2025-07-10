import { Route, BrowserRouter, Routes } from "react-router-dom";
import Dashboard from "./Components/User/Dashboard";
import Practice from "./Components/Practice/Practice";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/contents" element={<Dashboard />} />
          <Route path="/roadmap" element={<Dashboard />} />
          <Route path="/assignments" element={<Dashboard />} />
          <Route path="/assessments" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
