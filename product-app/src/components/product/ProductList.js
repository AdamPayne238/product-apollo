import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { PRODUCTS } from '../../resolvers/Resolvers'
import Product from './Product'
import './Product.scss'


const ProductList = () => {

    const { loading, data } = useQuery(PRODUCTS)
  

    if (loading){
        return <h2>Loading product list...</h2>
    }

    console.log("data.products", data.products)

    return(
        
        <div className="product-list-container">
            {!loading && data && (
                <>
                    {data.products.map(product => (
                        <Product
                            key={product.id}
                            product={product}
                        />
                    ))}            
                </>
            )}
        </div>
    )
}

export default ProductList