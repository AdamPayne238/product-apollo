import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { 
    CREATE_PHONE
} from '../../resolvers/Resolvers'


const PurchaseTest = () => {


    // Create Phone State
    const [ numberState, setNumberState ] = useState(0)
    const [ typeState, setTypeState ] = useState('')
    const [ contactState, setContactState ] = useState(false)

    const [ createPhone ] = useMutation(CREATE_PHONE)


    useEffect(() => {
        console.log(contactState)
    }, [contactState])

    const handleSubmit = event => {
        event.preventDefault()
        createPhone({
            variables: {
                number: parseInt(numberState),
                type: typeState,
                contact: contactState,
                order_id: 'ckfg31hbnyl6g09998ar4fp1d'
            }
        })
        .then(res => {
            console.log("TEST PHONE res", res)
        })
        .catch(err => {
            console.log("TEST PHONE err", err)

        })
    }




    return(
        <div>

            <form onSubmit={handleSubmit}>

                <label>
                    Number:
                    <input
                        type="number"
                        value={numberState}
                        onChange={e => setNumberState(e.target.value)}
                    />
                </label>

                <label>
                    Type:
                    <input
                        type="text"
                        value={typeState}
                        onChange={e => setTypeState(e.target.value)}
                    />  
                </label>

                <label>
                    Contact:
                    <input
                        type="checkbox"
                        value={contactState}
                        onClick={() => contactState ? setContactState(false) : setContactState(true)}
                    />  
                </label>

                <input type="submit" value="Submit" />

            </form>



    
        </div>
    )
}

export default PurchaseTest