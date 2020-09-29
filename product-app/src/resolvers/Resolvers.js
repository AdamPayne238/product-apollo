import {gql} from 'apollo-boost'


// QUERY PRODUCT LIST
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

// QUERY PRODUCT by ID
export const PRODUCT = gql`
    query product($id: String!){
        product(id: $id){
            id
            name
            cost
            code
        }
    }
`

// QUERY PRODUCT DETAILS
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

// QUERY ORDER by ID
export const ORDER = gql`
    query order($id: String!){
        order(id: $id){
            customer_name
            customer_email
            customer_phone{
                number
            }
            purchase_products{
                code
                quantity
            }
            order_confirmation{
                confirmation_code
                order_total
            }
        }
    }
`

// CREATE ORDER
export const CREATE_ORDER = gql`
    mutation CREATE_ORDER(
        $customer_name: String!
        $customer_email: String!
    ){
        createOrder(
            customer_name: $customer_name
            customer_email: $customer_email
        ){
            id
            customer_name
            customer_email
        }
    }
`

// CREATE PHONE
export const CREATE_PHONE = gql`
    mutation CREATE_PHONE(
        $number: String!
        $type: String!
        $contact: Boolean!
        $order_id: String!
    ){
        createPhone(
            number: $number
            type: $type
            contact: $contact
            order_id: $order_id
        ){
            id
            number
            type
            contact
        }
    }
`

// CREATE SHIPPING
export const CREATE_SHIPPING = gql`
    mutation CREATE_SHIPPING(
        $street: String!
        $city: String!
        $state: String!
        $zipcode: Int!
        $order_id: String!
    ){
        createShipping(
            street: $street
            city: $city
            state: $state
            zipcode: $zipcode
            order_id: $order_id
        ){
            street
            city
            state
            zipcode
        }
    }
`

// CREATE BILLING
export const CREATE_BILLING = gql`
    mutation CREATE_BILLING(
        $street: String!
        $city: String!
        $state: String!
        $zipcode: Int!
        $order_id: String!
    ){
        createBilling(
            street: $street
            city: $city
            state: $state
            zipcode: $zipcode
            order_id: $order_id
        ){
            street
            city
            state
            zipcode
        }
    }
`

// CREATE PURCHASE
export const CREATE_PURCHASE = gql`
    mutation CREATE_PURCHASE(
        $code: Int!
        $quantity: Int!
        $order_id: String!
    ){
        createPurchase(
            code: $code
            quantity: $quantity
            order_id: $order_id
        ){
            code
            quantity
        }
    }
`

// CREATE COMPLETE
export const CREATE_COMPLETE = gql`
    mutation CREATE_COMPLETE(
        $order_total: Float!
        $order_id: String!
    ){
        createComplete(
            order_total: $order_total
            order_id: $order_id
        ){
            confirmation_code
            order_total
        }
    }
`