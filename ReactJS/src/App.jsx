import { Route, BrowserRouter, Routes } from "react-router-dom";
import Dashboard from "./Components/User/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
