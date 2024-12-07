import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Login from "./auth/Login"
import Signup from "./auth/Signup"
import Layout from "./components/ui/shared/Layout"
import Feed from "./components/ui/shared/Feed"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/feed"
          element={
            <Layout>
              <Feed />
            </Layout>
          }
        />
      </Routes>
    </Router>
  )
}
