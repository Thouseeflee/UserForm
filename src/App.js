import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/layout/Navbar"
import Register from "./components/form/Register"
import Login from './components/form/Login'
import Home from './components/pages/Home'
import {UserFormProvider} from "./components/context/userform/UserFormContext"

function App() {
  return (
    <UserFormProvider>
      <Router>
      <Navbar />
      <div className="container">
      {/* <Register /> */}
      <div>
        <Routes>
          <Route path="/" element={<Register />}>Register</Route>
          <Route path="/login" element={<Login />}>Login</Route>
          <Route path="/home" element={<Home />}>Home</Route>
        </Routes>
      </div>
      </div>
      </Router>
    </UserFormProvider>
  )
}

export default App
