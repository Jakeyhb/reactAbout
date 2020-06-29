import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../pages/home/Home'
import ProductList from '../pages/product/list/ProductList'
import ProductAdd from '../pages/product/add/ProductAdd'
import ProductModify from '../pages/product/modify/ProductModify'
import ProductCate from '../pages/product/cate/ProductCate'
import NotFind from '../pages/common/not-find/NotFind'
import Imgmanage from '../pages/imgmanage/ImgAdv'
import TradingInfo from '../pages/trading/info/Info'
import TradingOrder from '../pages/trading/order/Oder'
import TradingHandle from '../pages/trading/handle/Handle'
import TradingAmount from '../pages/trading/amount/Amount'
import PayAcount from '../pages/pay/acount/Acount'
import PayWay from '../pages/pay/way/Way'
import PaySetting from '../pages/pay/setting/Setting'
import VipList from '../pages/vip/list/List'
import VipLevel from '../pages/vip/level/Level'

import VipMondify from '../pages/vip/modify/Modify'
import ArticleList from '../pages/article/list/List'
import ArticleCate from '../pages/article/cate/Cate'
import ManageList from '../pages/manager/list/List'
import ManageCate from '../pages/manager/cate/Cate'


export default function AppContent() {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      {/* 首页 */}
      <Route exact path='/home' component={Home} />
      {/* 产品 */}
      <Redirect exact from="/product" to="/product/list" />
      {/* 产品列表 */}
      <Route exact path='/product/list' component={ProductList} />
      {/* 新增商品 */}
      <Route exact path='/product/list/add' component={ProductAdd} />
      {/* 修改商品 */}
      <Route exact path='/product/list/modify' component={ProductModify} />
      {/* 分类管理 */}
      <Route exact path='/product/cate' component={ProductCate} />
      <Redirect exact from="/image" to="/image/ad" />
      <Route exact path='/image/ad' component={Imgmanage} />
      {/* !!!: 交易管理 */}
      <Redirect exact from="/trading" to="/trading/info" />
      <Route exact path='/trading/info' component={TradingInfo} />
      <Route exact path='/trading/order' component={TradingOrder} />
      <Route exact path='/trading/handle' component={TradingHandle} />
      <Route exact path='/trading/amount' component={TradingAmount} />

      {/* !!!: 支付管理 */}

      <Redirect exact from="/pay" to="/pay/acount" />
      <Route exact path='/pay/acount' component={PayAcount} />
      <Route exact path='/pay/way' component={PayWay} />
      <Route exact path='/pay/setting' component={PaySetting} />
      {/* !!!: 会员 */}

      <Redirect exact from="/vip" to="/vip/list" />
      <Route exact path='/vip/list' component={VipList} />
      <Route exact path='/vip/list/modify' component={VipMondify} />
      <Route exact path='/vip/level' component={VipLevel} />

      {/* !!!: 文章 */}

      <Redirect exact from="/article" to="article/list" />
      <Route exact path='/article/list' component={ArticleList} />
      <Route exact path='/article/cate' component={ArticleCate} />

      {/* !!!: 用户 */}

      <Redirect exact from="/manager" to="manager/list" />
      <Route exact path='/manager/list' component={ManageList} />
      <Route exact path='/manager/cate' component={ManageCate} />

      {/* 404 */}
      <Route component={NotFind} />

    </Switch>
  )
}
