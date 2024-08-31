import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import AdminLogin from "./pages/admin/adminLogin/AdminLogin";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import MyState from "./context/data/myState";
import CreateBlog from "./pages/admin/createBlog/CreateBlog";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home key={1} />} />
          <Route path="/adminlogin" element={<AdminLogin key={2} />} />
          <Route path="/dashboard" element={
            <ProtectedRouteForAdmin>
              <Dashboard key={3} />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/addemail" element={
            <ProtectedRouteForAdmin>
              <CreateBlog key={4} />
            </ProtectedRouteForAdmin>
          } />
        </Routes>
      </Router>
    </MyState>
  )
}

export default App

export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('admin'))
  if (admin?.user?.email === "testuser@gmail.com") {
    return children
  }
  else {
    return <Navigate to={'/adminlogin'}/>
  }
}