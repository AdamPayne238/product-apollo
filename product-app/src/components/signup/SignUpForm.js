import React, { useState } from 'react'
import './SignUp.scss'

const SignUpForm = () => {
    
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ email, setEmail ] = useState('')

    return (
        <div className="sign-up-form-container">

            <div>
                <h2>First Name</h2>
                <input 
                    type="text"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
            </div>

            <div>
                <h2>Last Name</h2>
                <input 
                    type="text"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
            </div>

            <div>
                <h2>Email Address</h2>
                <input 
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>

        </div>
    )
}

export default SignUpForm