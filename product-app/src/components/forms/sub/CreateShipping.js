import React from 'react'


const CreateShipping = props => {

    return(

        <div>

            <h1>Shipping Address</h1>

            <div>
                <h2>Street</h2>
                <input
                    type="text"
                    value={props.shippingStreet}
                    onChange={e => props.setShippingStreet(e.target.value)}
                />
            </div>

            <div>
                <h2>City</h2>
                <input
                    type="text"
                    value={props.shippingCity}
                    onChange={e => props.setShippingCity(e.target.value)}
                />  
           </div>

            <div>
                <h2>State</h2>
                <input
                    type="text"
                    value={props.shippingState}
                    onChange={e => props.setShippingState(e.target.value)}
                />
            </div>

            <div>
                <h2>Zipcode</h2>
                <input
                    type="text"
                    value={props.shippingZipcode}
                    onChange={e => props.setShippingZipcode(e.target.value)}
                />  
            </div>

        </div>
        
    )
}

export default CreateShipping