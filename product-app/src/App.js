import React from 'react'
import NavBar from './components/Home/NavBar'
import Home from './components/Home/Home'
import About from './components/about/About'
import ProductList from './components/product/ProductList'
import ProductDetails from './components/product/ProductDetails'
import ProductPurchase from './components/forms/ProductPurchase'
import PurchaseComplete from './components/complete/PurchaseComplete'
import SignUp from './components/signup/SignUp'
import Contact from './components/contact/Contact'
import FAQ from './components/faq/FAQ'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.scss'


function App() {

  return (
    <div className="App">
      <NavBar />
        <Switch>
          <Redirect exact from='/' to='/home' />
          <Route exact path='/home' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/products' component={ProductList} />
          <Route exact path='/products/:id/details' component={ProductDetails} />
          <Route exact path='/products/:id/purchase' component={ProductPurchase} />
          <Route exact path='/products/:id/purchase/complete' component={PurchaseComplete} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/faq' component={FAQ} />
        </Switch>
    </div>
  )
}

export default App
