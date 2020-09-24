import React from 'react'


const CreateShipping = props => {

    return(

        <div>

            <label>
                Street:
                <input
                    type="text"
                    value={props.shippingStreet}
                    onChange={e => props.setShippingStreet(e.target.value)}
                />
            </label>

            <label>
                City:
                <input
                    type="text"
                    value={props.shippingCity}
                    onChange={e => props.setShippingCity(e.target.value)}
                />  
            </label>

            <label>
                State:
                <input
                    type="text"
                    value={props.shippingState}
                    onChange={e => props.setShippingState(e.target.value)}
                />
            </label>

            <label>
                Zipcode:
                <input
                    type="text"
                    value={props.shippingZipcode}
                    onChange={e => props.setShippingZipcode(e.target.value)}
                />  
            </label>

        </div>
        
    )
}

export default CreateShipping