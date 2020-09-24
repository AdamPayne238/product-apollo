import React from 'react'


const CreatePhone = props => {

    return(

        <div>
            <label>
                Number:
                <input
                    type="text"
                    value={props.number}
                    onChange={e => props.setNumber(e.target.value)}
                />
            </label>

            <label>
                Type:
                <input
                    type="text"
                    value={props.type}
                    onChange={e => props.setType(e.target.value)}
                />  
            </label>

            <label>
                Contact:
                <input
                    type="checkbox"
                    value={props.contact}
                    onClick={() => props.contact ? props.setContact(false) : props.setContact(true)}
                />  
            </label>
        </div>

    )
}

export default CreatePhone