import React from 'react'


const CreateBilling = props => {

    return(

        <div>

            <h1>Billing Address</h1>

            <div>
                <h2>Street</h2>
                <input
                    type="text"
                    value={props.billingStreet}
                    onChange={e => props.setBillingStreet(e.target.value)}
                />
            </div>

            <div>
                <h2>City</h2>
                <input
                    type="text"
                    value={props.billingCity}
                    onChange={e => props.setBillingCity(e.target.value)}
                />  
            </div>

            <div>
                <h2>State</h2>
                <input
                    type="text"
                    value={props.billingState}
                    onChange={e => props.setBillingState(e.target.value)}
                />
            </div>

            <div>
                <h2>Zipcode</h2>
                <input
                    type="text"
                    value={props.billingZipcode}
                    onChange={e => props.setBillingZipcode(e.target.value)}
                />  
            </div>

        </div>
        
    )
}

export default CreateBilling