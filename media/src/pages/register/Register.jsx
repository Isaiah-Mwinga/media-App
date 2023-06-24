import React from 'react'
import "./Register.scss"

const Register = () => {
  return (
    <div className='Register'>
        <div className="card">
            <div className="left">
                <h1>Hello World</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                <span>have an account?</span>
                <button>Sign Up</button>
            </div>
            <div className="right">
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <input type="email" placeholder="email" />
                    <input type="text" placeholder="Name" />          
                    <button>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register