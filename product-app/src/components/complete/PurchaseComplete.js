import React, { useEffect } from 'react'
import { PRODUCT, ORDER } from '../../resolvers/Resolvers'
import { useQuery } from '@apollo/react-hooks'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Complete.scss'



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

        <div className="purchase-complete-container">

            {!loading && data && !orderLoading && orderData && (
                
                <div className="purchase-complete">
                    <h1>Purchase Reciept</h1>
                    <p>Product: {data.product.name}</p>
                    <p>Price: ${data.product.cost}</p>
                    <p>Name: {orderData.order.customer_name}</p>
                    <p>Email: {orderData.order.customer_email}</p>
                    {orderData.order.customer_phone.map(info => (
                        <div key={info.id}>
                            <p>Phone Number: {info.number}</p>
                        </div>
                    ))}
                    {orderData.order.purchase_products.map(info => (
                        <div key={info.id}>
                            <p>Product Code: {info.code}</p>
                            <p>Quantity: {info.quantity}</p>
                        </div>
                    ))}

                    {orderData.order.order_confirmation.map(info => (
                        <div key={info.id}>
                            <p>Confirmation Code: {info.confirmation_code}</p>
                            <p>Order Total: ${info.order_total}</p>
                        </div>
                    ))}

                    <Link to='/products'>
                        Home
                    </Link>
                
                </div>
            )}

         
            
        </div>
    )
}

export default PurchaseComplete