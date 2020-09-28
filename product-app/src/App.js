import React from 'react'
import ProductList from './components/product/ProductList'
import ProductDetails from './components/product/ProductDetails'
import ProductPurchase from './components/forms/ProductPurchase'
import PurchaseComplete from './components/complete/PurchaseComplete'
import { Route, Switch, Redirect } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Switch>
        <Redirect exact from='/' to='/products' />
        <Route exact path='/products' component={ProductList} />
        <Route exact path='/products/:id/details' component={ProductDetails} />
        <Route exact path='/products/:id/purchase' component={ProductPurchase} />
        <Route exact path='/products/:id/purchase/complete' component={PurchaseComplete} />
      </Switch>
    </div>
  )
}

export default App
