import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import "./App.css";
import SingleCar from "./pages/SingleCar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/cars/:slug" element={<SingleCar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


