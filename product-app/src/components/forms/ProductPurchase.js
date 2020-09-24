import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { 
        CREATE_ORDER, 
        CREATE_PHONE,
        CREATE_SHIPPING,
        CREATE_BILLING,
        CREATE_PURCHASE,
                        } from '../../resolvers/Resolvers'

// Sub Components
import CreateOrder from './sub/CreateOrder'
import CreatePhone from './sub/CreatePhone'
import CreateShipping from './sub/CreateShipping'
import CreateBilling from './sub/CreateBilling'
import CreatePurchase from './sub/CreatePurchase'


const ProductPurchase = () => {

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


    useEffect(() => {
        console.log("USEEFFEVT STATE", orderId)
    }, [orderId])


    const handleSubmit = event => {
        event.preventDefault()
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
            })
        } 
    }


    // const handleOrder = event => {
    //     event.preventDefault()
    //     createOrder({
    //         variables: {
    //             customer_name: name,
    //             customer_email: email
    //         }
    //     })
    //     .then(res => {
    //         console.log("CREATE_ORDER res", res)
    //         setOrderId(res.data.createOrder.id)
    //         setStep(2)
    //     })
    //     .catch(err => {
    //         console.log("CREATE_ORDER err", err)

    //     })
    // }

    // const handlePhone = event => {
    //     event.preventDefault()
    //     createPhone({
    //         variables: {
    //             number: parseInt(number),
    //             type: type,
    //             contact: contact,
    //             order_id: orderId
    //         }
    //     })
    //     .then(res => {
    //         console.log("CREATE PHONE RES", res)
    //         setStep(3)
    //     })
    //     .catch(err => {
    //         console.log("Handle Sub Forms Err", err)
    //     })
    // }

    // const handleShipping = event => {
    //     event.preventDefault()
    //     createShipping({
    //         variables: {
    //             street: shippingStreet,
    //             city: shippingCity,
    //             state: shippingState,
    //             zipcode: parseInt(shippingZipcode),
    //             order_id: orderId
    //         }
    //     })
    //     .then(res => {
    //         console.log("CREATE_SHIPPINGres", res)
    //         setStep(4)
       
    //     })
    //     .catch(err => {
    //         console.log("CREATE_SHIPPING err", err)

    //     })
    // }

    // const handleBilling = event => {
    //     event.preventDefault()
    //     createBilling({
    //         variables: {
    //             street: billingStreet,
    //             city: billingCity,
    //             state: billingState,
    //             zipcode: parseInt(billingZipcode),
    //             order_id: orderId
    //         }
    //     })
    //     .then(res => {
    //         console.log("createBilling res", res)
    //         setStep(5)
    //     })
    //     .catch(err => {
    //         console.log("createBilling err", err)

    //     })
    // }

    // const handlePurchase = event => {
    //     event.preventDefault()
    //     createPurchase({
    //         variables: {
    //             code: parseInt(code),
    //             quantity: parseInt(quantity),
    //             order_id: orderId
    //         }
    //     })
    //     .then(res => {
    //         console.log("createPurchase res", res)
    //         setStep(5)
    //     })
    //     .catch(err => {
    //         console.log("createPurchase err", err)

    //     })
    // }


    return(

        <div>

            {step === 1 && (
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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