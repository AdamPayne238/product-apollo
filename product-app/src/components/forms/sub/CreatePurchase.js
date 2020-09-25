import React from 'react'


const CreatePurchase = props => {

    return(

        <div>

            <h1>Purchase Information</h1>

            <div>
                <h2>Product Code</h2>
                <input
                    type="text"
                    value={props.code}
                    onChange={e => props.setCode(e.target.value)}
                />
            </div>

            <div>
                <h2>Quantity</h2>
                <input
                    type="text"
                    value={props.quantity}
                    onChange={e => props.setQuantity(e.target.value)}
                />  
            </div>
        
        </div>
        
    )
}

export default CreatePurchase