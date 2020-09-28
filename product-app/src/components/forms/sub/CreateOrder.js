import React from 'react'


const CreateOrder = props => {

    return(

        <div>

            <h1>Customer Information</h1>
            
            <div >
                <h2>Full Name</h2>
                <input
                    type="text"
                    value={props.name}
                    onChange={e => props.setName(e.target.value)}
                />
            </div>

            <div>
                <h2>Email</h2>
                <input
                    type="text"
                    value={props.email}
                    onChange={e => props.setEmail(e.target.value)}
                />  
            </div>

        </div>
        
    )
}

export default CreateOrder