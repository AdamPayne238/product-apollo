import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { PRODUCT_DETAILS } from '../resolvers/Resolvers'
import { Link } from 'react-router-dom'


const ProductDetails = props => {

    const { id } = props.match.params

    const { loading, data } = useQuery(PRODUCT_DETAILS, {
        variables: {
            id: id
        }
    })

    if (loading){
        return <h2>Loading product list...</h2>
    }

    console.log("DETAILS DATA", data.product.name)

    return(
        <div>
            <h1>ProductDetails</h1>
            {!loading && data && (
                <div>
                    <h1>{data.product.name}</h1>
                    <p>{data.product.code}</p>
                    <p>{data.product.product_type}</p>
                    <p>{data.product.cost}</p>
                    <p>{data.product.description}</p>
                    <p>{data.product.pushed_product}</p>
                    <p>{data.product.callback}</p>
                    <p>{data.product.category}</p>

                    {data.product.inventory_on_hand > 0 && (
                        <Link to={{ pathname: `/products/${id}/purchase` }} >
                            <button>Purchase</button>
                        </Link>
                    )}
                </div>
            )}
        </div>
    )
}

export default ProductDetails