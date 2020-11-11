import React from 'react'
import SignUpForm from './SignUpForm'
import './SignUp.scss'


const SignUp = () => {

    return (
        <div className="sign-up-container">

            <div className="sign-up-header">
                <h1>Sign Up Page</h1>
            </div>

            <div className="sign-up-form">
                <SignUpForm />
            </div>

        </div>
    )
}

export default SignUp