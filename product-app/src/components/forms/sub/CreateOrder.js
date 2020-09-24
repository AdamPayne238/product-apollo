import React from 'react'


const CreateOrder = props => {

    return(

        <div>

            <label>
                Name:
                <input
                    type="text"
                    value={props.name}
                    onChange={e => props.setName(e.target.value)}
                />
            </label>

            <label>
                Email:
                <input
                    type="text"
                    value={props.email}
                    onChange={e => props.setEmail(e.target.value)}
                />  
            </label>

        </div>
        
    )
}

export default CreateOrder