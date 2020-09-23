import React from 'react'
import { Link } from 'react-router-dom'


const Product = props => {

    const formatNumber = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    return(
        <div className="product-list">              
            <Link  key={props.product.id} to={{
                pathname: `/products/${props.product.id}/details`
                }}>
                <div key={props.product.id} className="product">
                    <h1>{props.product.name}</h1>
                

                    <p>Code: {props.product.code}</p>
                    <p>Cost: ${props.product.cost}</p>
                    <p>{props.product.description}</p>
                    <p>Available: {formatNumber(props.product.inventory_on_hand)}</p>
                </div>
            </Link>
        </div>
    )
}

export default Product