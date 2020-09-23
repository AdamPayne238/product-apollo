import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { PRODUCTS } from '../resolvers/Resolvers'
import Product from './Product'


const ProductList = () => {

    const { loading, data } = useQuery(PRODUCTS)

    if (loading){
        return <h2>Loading product list...</h2>
    }

    console.log(data.products)
    return(
        <div className="product-list-container">
            <h1>ProductList</h1>
            {!loading && data && (
                <>
                    {data.products.map(product => (
                        <Product
                            product={product.id}
                            product={product}
                        />
                    ))}            
                </>
            )}
        </div>
    )
}

export default ProductList