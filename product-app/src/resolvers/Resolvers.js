import {gql} from 'apollo-boost'


export const PRODUCTS = gql`
    query {
        products {
            id
            name
            code
            cost
            description
            inventory_on_hand
        }
    }
`

export const PRODUCT_DETAILS = gql`
    query product($id: String!){
        product(id: $id){
            id
            name
            code
            product_type
            cost
            description
            pushed_product
            callback
            category
            inventory_on_hand
        }
    }
`