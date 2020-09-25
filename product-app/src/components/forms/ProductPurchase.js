import React, { useState, useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { 
        PRODUCT,
        CREATE_ORDER, 
        CREATE_PHONE,
        CREATE_SHIPPING,
        CREATE_BILLING,
        CREATE_PURCHASE,
        CREATE_COMPLETE,
} from '../../resolvers/Resolvers'

// Sub Components
import CreateOrder from './sub/CreateOrder'
import CreatePhone from './sub/CreatePhone'
import CreateShipping from './sub/CreateShipping'
import CreateBilling from './sub/CreateBilling'
import CreatePurchase from './sub/CreatePurchase'

// Styling
import './Forms.scss'


const ProductPurchase = props => {

    // Product Id
    const { id } = props.match.params

    // Query
    const { loading, data } = useQuery(PRODUCT, {
        variables: {
            id: id
        }
    })

    // Order Id
    const [ orderId, setOrderId ] = useState('')

    // Form Step
    const [ step, setStep ] = useState(1)

    // Mutations
    const [ createOrder ] = useMutation(CREATE_ORDER)
    const [ createPhone ] = useMutation(CREATE_PHONE)
    const [ createShipping ] = useMutation(CREATE_SHIPPING)
    const [ createBilling ] = useMutation(CREATE_BILLING)
    const [ createPurchase ] = useMutation(CREATE_PURCHASE)
    const [ createComplete ] = useMutation(CREATE_COMPLETE)

    // Create Order State
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')

    // Create Phone State
    const [ number, setNumber ] = useState('')
    const [ type, setType ] = useState('')
    const [ contact, setContact ] = useState(false)

    // Create Shipping State
    const [ shippingStreet, setShippingStreet ] = useState('')
    const [ shippingCity, setShippingCity ] = useState('')
    const [ shippingState, setShippingState ] = useState('')
    const [ shippingZipcode, setShippingZipcode ] = useState('')

    // Create Billing State
    const [ billingStreet, setBillingStreet ] = useState('')
    const [ billingCity, setBillingCity ] = useState('')
    const [ billingState, setBillingState ] = useState('')
    const [ billingZipcode, setBillingZipcode ] = useState('')

    // Create Purchase State
    const [ code, setCode ] = useState('')
    const [ quantity, setQuantity ] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        setCode(data.product.code)
        if (step === 1){
            createOrder({
                variables: {
                    customer_name: name,
                    customer_email: email
                }
            }).then(res => {
                console.log("createOrder res", res)
                setOrderId(res.data.createOrder.id)
                setStep(2)
            })
        } else if (step === 2){
            createPhone({
                variables: {
                    number: parseInt(number),
                    type: type,
                    contact: contact,
                    order_id: orderId
                }
            }).then(res => {
                console.log("createPhone res", res)
                setStep(3)
            })
        } else if (step === 3){
            createShipping({
                variables: {
                    street: shippingStreet,
                    city: shippingCity,
                    state: shippingState,
                    zipcode: parseInt(shippingZipcode),
                    order_id: orderId
                }
            }).then(res => {
                console.log("createShipping res", res)
                setStep(4)
            })
        } else if (step === 4){
            createBilling({
                variables: {
                    street: billingStreet,
                    city: billingCity,
                    state: billingState,
                    zipcode: parseInt(billingZipcode),
                    order_id: orderId
                }
            }).then(res => {
                console.log("createBilling res", res)
                setStep(5)
            })
        } else if (step === 5){
            createPurchase({
                variables: {
                    code: parseInt(code),
                    quantity: parseInt(quantity),
                    order_id: orderId
                }
            }).then(res => {
                console.log("createPurchase res", res)
                createComplete({
                    variables: {
                        order_total: parseInt(quantity * data.product.cost),
                        order_id: orderId
                    }
                })
                props.history.push(`/products/${id}/purchase/complete`, {orderId: orderId})
            })
        }
    }



    return(

        <div className="form-container">

            {step === 1 && (
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <CreateOrder 
                        name={name} 
                        email={email} 
                        setName={setName} 
                        setEmail={setEmail} 
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            )}

            {step === 2 && (
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <CreatePhone
                        number={number}
                        type={type}
                        contact={contact}
                        setNumber={setNumber}
                        setType={setType}
                        setContact={setContact}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            )}

            {step === 3 && (
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <CreateShipping
                        shippingStreet={shippingStreet}
                        shippingCity={shippingCity}
                        shippingState={shippingState}
                        shippingZipcode={shippingZipcode}
                        setShippingStreet={setShippingStreet}
                        setShippingCity={setShippingCity}
                        setShippingState={setShippingState}
                        setShippingZipcode={setShippingZipcode}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            )}

            {step === 4 && (
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <CreateBilling
                        billingStreet={billingStreet}
                        billingCity={billingCity}
                        billingState={billingState}
                        billingZipcode={billingZipcode}
                        setBillingStreet={setBillingStreet}
                        setBillingCity={setBillingCity}
                        setBillingState={setBillingState}
                        setBillingZipcode={setBillingZipcode}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            )}

            {step === 5 && (
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <CreatePurchase
                        code={code}
                        quantity={quantity}
                        setCode={setCode}
                        setQuantity={setQuantity}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            )}

        </div>

    )
}

export default ProductPurchase