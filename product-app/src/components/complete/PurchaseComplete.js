import React, { useEffect } from 'react'
import { PRODUCT, ORDER } from '../../resolvers/Resolvers'
import { useQuery } from '@apollo/react-hooks'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'



const PurchaseComplete = props => {

    let location = useLocation()
    const { id } = props.match.params

    const { loading, data } = useQuery(PRODUCT, {
        variables: {
            id: id
        }
    })

    const { loading: orderLoading, data: orderData } = useQuery(ORDER, {
        variables: {
            id: location.state.orderId
        }
    })

    if (loading || orderLoading){
        return <h2>Loading Order Confirmation...</h2>
    }

    return(

        <div>

  

            <h1>Purchase Reciept</h1>
            {!loading && data && !orderLoading && orderData && (
                <div>
                    {console.log("Product Data", data), console.log("Order Data", orderData)}
                    <h1>Product: {data.product.name}</h1>
                    <h1>Price: ${data.product.cost}</h1>
                    <h1>Name: {orderData.order.customer_name}</h1>
                    <h1>Email: {orderData.order.customer_email}</h1>
                    {orderData.order.customer_phone.map(info => (
                        <div key={info.id}>
                            <h1>Phone Number: {info.number}</h1>
                        </div>
                    ))}
                    {orderData.order.purchase_products.map(info => (
                        <div key={info.id}>
                            <h1>Product Code: {info.code}</h1>
                            <h1>Quantity: {info.quantity}</h1>
                        </div>
                    ))}

                    {orderData.order.order_confirmation.map(info => (
                        <div key={info.id}>
                            {console.log(info.order_total)}
                            <h1>Confirmation Code: {info.confirmation_code}</h1>
                            <h1>Order Total: ${info.order_total}</h1>
                        </div>
                    ))}
                
                </div>
            )}

            <Link to='/products'>
                Home
            </Link>
            
        </div>
    )
}

export default PurchaseComplete