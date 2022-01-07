import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'

function Login() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
     const navigate = useNavigate()
    const fetchUser = async (email ,password) => {
        const params = new URLSearchParams({
            email:email,
            password:password,
        })
        
        const response = await fetch(`http://localhost:5000/users?${params}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const data = await response.json()
        if(data.length){
            alert("YOU ARE A VALID USER")
            navigate('/home')
        } else {
            setName('')
            setEmail('')
            alert("Username or Password is incorrect")
        }
        
    }
    const handleSubmit = async (e) => {
          e.preventDefault()
          const user = await fetchUser(name, email)
        
    }



    return (
        <div className="container text-center">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className="my-1">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={(e) => setName(e.target.value)} value={name} id="email" placeholder="Enter Your Email id" required />
            </div>
            <div className="my-1">
                <label htmlFor="password">Password</label>
                <input type="password" name="pass" onChange={(e) => setEmail(e.target.value)} value={email} id="password" required />
            </div>
            <button className="btn btn-success" type="sumbit">Submit</button>
        </form>
        <div className="my-1">
        <h3>Not a User. <Link to='/'>Register</Link></h3>
        </div>
    </div>
    )
}

export default Login
