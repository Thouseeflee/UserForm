import UserFormContext from '../context/userform/UserFormContext'
import {Link} from 'react-router-dom'
import {useState, useContext} from 'react'
import {BrowserRouter as Router, Routes, useNavigate, Route} from 'react-router-dom'


function Register() {
    const {addUser} = useContext(UserFormContext)
    const navigate = useNavigate()
        
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
      
    const handleSubmit = async (e) => {
        e.preventDefault()
        const newUser = {
            name,
            email,
            password,
            phone
        }
         await addUser(newUser)
         alert("YOU ARE A VALID USER") 
         navigate("/home") 
        //  if(newUser){
        //  return <Route path="*" element={<Navigate to="/login" replace />} />
        //  }
        // //  <Router>
        //     //  <Routes>
        //     //  </Routes>
        // //  </Router>
        

    }
    return (
        <div className="container text-center">
            <h1>Register User</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group my-1">
                    <label htmlFor="name">Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} name="name" id="name" placeholder="Enter Your Name" required />
                </div>
                <div className="my-1">
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} name="email" id="email" placeholder="Enter Your Email id" required />
                </div>
                <div className="my-1">
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} name="password" id="password" required />
                </div>
                <div className="my-1">
                    <label htmlFor="phone">phoneNO</label>
                    <input type="number" onChange={(e) => setPhone(e.target.value)} value={phone}  name="phone" id="phone" placeholder="Enter Your Phone number" required />
                </div>
                <button className="btn btn-success" type="sumbit">Submit</button>
            </form>
            <div className="my-1">
        <h3>Are you a User. <Link to='/login'>Login</Link></h3>
        </div>
        </div>
    )
}

export default Register
