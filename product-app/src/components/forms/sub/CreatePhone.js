import React from 'react'


const CreatePhone = props => {

    return(

        <div>

            <h1>Phone Information</h1>

            <div>
                <h2>Number</h2>
                <input
                    type="text"
                    value={props.number}
                    onChange={e => props.setNumber(e.target.value)}
                />
            </div>

            <div>
                <h2>Type</h2>
                <input
                    type="text"
                    value={props.type}
                    onChange={e => props.setType(e.target.value)}
                />  
            </div>

            <div>
                <h2>Contact</h2>
                <p>Check box if we can contact you with this number</p>
                <input
                    type="checkbox"
                    value={props.contact}
                    onClick={() => props.contact ? props.setContact(false) : props.setContact(true)}
                />  
            </div>
            
        </div>

    )
}

export default CreatePhone