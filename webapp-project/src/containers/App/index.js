import React, { lazy, Suspense } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Loading from '../Loading'
import Tabs from '../../components/Tabs'
// const Search = lazy(() => import('../Search'));
import Search from '../Search'
const Home = lazy(() => import('../Home'));
const Order = lazy(() => import('../Order'));
const NotFind = lazy(() => import('../NotFind'));
const CityList = lazy(() => import('../Home/children/CityList'))

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/citylist">
          <CityList />
        </Route>
        <Route path="/search" component={Search} />
        <Search />

        <Route path="/404">
          <NotFind />
        </Route>
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
      <Tabs />
    </Suspense >
  )
}
