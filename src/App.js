import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserDetails from "./pages/UserDetails";
import Home from "./pages/Home";

function App() {
  return (
    <div className={"App"}>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/user/:id"} element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
