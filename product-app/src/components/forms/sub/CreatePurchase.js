import React from 'react'


const CreatePurchase = props => {

    return(

        <div>

            <label>
                Code:
                <input
                    type="text"
                    value={props.code}
                    onChange={e => props.setCode(e.target.value)}
                />
            </label>

            <label>
                Quantity:
                <input
                    type="text"
                    value={props.quantity}
                    onChange={e => props.setQuantity(e.target.value)}
                />  
            </label>
        
        </div>
        
    )
}

export default CreatePurchase