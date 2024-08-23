import React, { useState } from 'react'
import './SignUp.css'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'



function SignUp() {

    const [user, setUser] = useState({
        name: '',
        mobile: '',
        email: '',
        password: '',
        address: '',
        role: ''
    })
    const signUp = async () => {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
            name: user.name,
            email: user.email,
            password: user.password,
            address: user.address,
            mobile:  user.mobile,
            role: user.role

        })
    
        console.log(response);
    
    
        if (response.data.success) {
            toast.success(response.data.message)
            setUser({
                name: '',
                mobile:'',
                email: '',
                password: '',
                address:'',
                role: ''
            })
            setTimeout(() =>{
                window.location.href='/login'
            }, 1000)
        }

        else {
            toast.error(response.data.message)
        }
        console.log(response)
    }

    return (
        <div>
            <div className='bodyContainer'>
                <form className='formContainer'>
                    <h1 className='form-title'> SignUp</h1>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control input-box" id="Full Name" aria-describedby="Full Name" placeholder=" Name"
                            value={user.name}
                            onChange={(e) => { setUser({ ...user, name: e.target.value }) }}
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Mobile </label>
                        <input type="text" className="form-control input-box" id="Mobile" aria-describedby="Mobile" placeholder="Mobile"
                            value={user.mobile}
                            onChange={(e) => { setUser({ ...user, mobile: e.target.value }) }}
                            
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="Email" className="form-control input-box" id="Email" aria-describedby="Email" placeholder="Email"
                           value={user.email}
                           onChange={(e) => { setUser({ ...user, email: e.target.value }) }}
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Address</label>
                        <input type="text" className="form-control input-box" id="Address" aria-describedby="Address" placeholder="Address"
                            value={user.address}
                            onChange={(e) => { setUser({ ...user, address: e.target.value }) }}
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Role</label >
                        <select className="form-control input-box" id="exampleFormControlSelect1"
                            value={user.role}
                            onChange={(e) => { setUser({ ...user, role: e.target.value }) }}
                        >
                            <option>admin</option>
                            <option>user</option>
                            <option>doctor</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label for="exampleInputEmail1">Password</label>
                        <input type="Password" className="form-control input-box" id="Password " aria-describedby="Password " placeholder="Password"
                            
                            value={user.password}
                            onChange={(e) => { setUser({ ...user, password: e.target.value }) }}
                        />
                    </div>

                    <button type="button"
                        onClick={signUp}
                        className="signUp-btn">SignUp
                    </button>

                    <Link to='/login' className=" alreadyAcc">Already Have an account ? <span className='login-text' > Login</span></Link>
                    <Toaster/>
                </form>
                

            </div>
        </div>
    )
}

export default SignUp
