import React from 'react'
import ProductList from './components/product/ProductList'
import ProductDetails from './components/product/ProductDetails'
import ProductPurchase from './components/forms/ProductPurchase'
import { Route, useLocation } from 'react-router-dom'


function App() {

  let location = useLocation()
  console.log("App Location", location)

  return (
    <div className="App">

      <Route exact path='/products' component={ProductList} />
      <Route exact path='/products/:id/details' component={ProductDetails} />
      <Route exact path='/products/:id/purchase' component={ProductPurchase} />
      
    </div>
  )
}

export default App
