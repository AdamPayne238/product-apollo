import React from 'react'


const CreateBilling = props => {

    return(

        <div>

            <label>
                Street:
                <input
                    type="text"
                    value={props.billingStreet}
                    onChange={e => props.setBillingStreet(e.target.value)}
                />
            </label>

            <label>
                City:
                <input
                    type="text"
                    value={props.billingCity}
                    onChange={e => props.setBillingCity(e.target.value)}
                />  
            </label>

            <label>
                State:
                <input
                    type="text"
                    value={props.billingState}
                    onChange={e => props.setBillingState(e.target.value)}
                />
            </label>

            <label>
                Zipcode:
                <input
                    type="text"
                    value={props.billingZipcode}
                    onChange={e => props.setBillingZipcode(e.target.value)}
                />  
            </label>

        </div>
        
    )
}

export default CreateBilling