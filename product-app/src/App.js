import React from 'react'
import ProductList from './components/product/ProductList'
import ProductDetails from './components/product/ProductDetails'
import ProductPurchase from './components/forms/ProductPurchase'
import PurchaseComplete from './components/complete/PurchaseComplete'
import { Route, useLocation, Link } from 'react-router-dom'


function App() {

  let location = useLocation()
  console.log("App Location", location)

  return (
    <div className="App">

      {/* <Link to='/products'>
      Product List
      </Link> */}


      <Route exact path='/products' component={ProductList} />
      <Route exact path='/products/:id/details' component={ProductDetails} />
      <Route exact path='/products/:id/purchase' component={ProductPurchase} />
      <Route exact path='/products/:id/purchase/complete' component={PurchaseComplete} />

    </div>
  )
}

export default App
