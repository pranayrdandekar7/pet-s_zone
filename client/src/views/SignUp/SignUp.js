import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import './SignUp.css'

function SignUp() {
    const [user, setUser] = useState({
        name: '',
        mobile: '',
        email: '',
        password: '',
        role: ''
    })
    const signUp = async () => {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/signUp`, {
            fullName: user.fullName,
            email: user.email,
            password: user.password,
            proffession: user.proffession
        })

        console.log(response);


        if (response.data.success) {
            toast.success(response.data.message)
            setUser({
                fullName: '',
                email: '',
                password: '',
                proffession: ''
            })
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
                        <input type="text" className="form-control input-box" id="Full Name" aria-describedby="Full Name" placeholder="Full Name"
                        value={user.name}
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Mobile </label>
                        <input type="text" className="form-control input-box" id="Mobile" aria-describedby="Mobile" placeholder="Mobile"
                        value={user.mobile}
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="Email" className="form-control input-box" id="Email" aria-describedby="Email" placeholder="Email"
                        value={user.email}
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Address</label>
                        <input type="text" className="form-control input-box" id="Address" aria-describedby="Address" placeholder="Address"
                        value={user.address}
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Role</label >
                        <select className="form-control input-box" id="exampleFormControlSelect1"
                        value={user.role}
                        >
                            <option>Salor</option>
                            <option>Buyer</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label for="exampleInputEmail1">Password</label>
                        <input type="Password" className="form-control input-box" id="Password " aria-describedby="Password " placeholder="Password"
                        value={user.password}
                        />
                    </div>

                    <button type="button"
                        onClick={signUp}
                        className="signUp-btn">SignUp</button>
                </form>
                
            </div>
        </div>
    )
}

export default SignUp
