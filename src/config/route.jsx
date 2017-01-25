// 'use strict';

import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from './store';

import Home from '../components/home';
import Explore from '../components/explore';
import Info from '../components/info';
import Topic from '../components/topic';
// import Signin from './signin';

/*
var App = React.createClass({
    render: function() {

        return (
            <div>
                <h5 className="title">hello, yeoman app!</h5>
                <div>React Router: </div>
                <div><a href="#/list">list page</a></div>
                <div><a href="#/detail">detail page</a></div>
            </div>
        );
    }
});

*/

/*
class App extends Component {
  render() {
    return (
      <div>
        <h5 className="title">hello, yeoman app!</h5>
        <div>React Router: </div>
        <div><a href="#/list">list page</a></div>
        <div><a href="#/detail">detail page</a></div>
      </div>
    );
  }
}
*/
/*
function App() {
  return (
    <div>
      <h5 className="title">hello, yeoman app!</h5>
      <div>React Router: </div>
      <div><a href="#/list">list page</a></div>
      <div><a href="#/detail">detail page</a></div>
    </div>
  );
}
*/
/*
var List = React.createClass({
    render: function () {
        return (
            <div>
                <h5 className="title">hello, yeoman app!</h5>
                <div><a href="#/">返回首页</a></div>
                <div>这是列表页</div>
            </div>
        );
      },
  });
*/
/*
class List extends Component {
  render() {
    return (
      <div>
        <h5 className="title">hello, yeoman app!</h5>
        <div><a href="#/">返回首页</a></div>
        <div>这是列表页</div>
      </div>
    );
  }
}
*/
/*
function List() {
  return (
    <div>
      <h5 className="title">hello, yeoman app!</h5>
      <div><a href="#/">返回首页</a></div>
      <div>这是列表页</div>
    </div>
  );
}
*/
/*
var Detail = React.createClass({
    render: function () {
        return (
            <div>
                <h5 className="title">hello, yeoman app!</h5>
                <div><a href="#/">返回首页</a></div>
                <div>这是详情页</div>
            </div>
        );
      },
  });
*/
/*
class Detail extends Component {
  render() {
    return (
      <div>
        <h5 className="title">hello, yeoman app!</h5>
        <div><a href="#/">返回首页</a></div>
        <div>这是详情页</div>
      </div>
    );
  }
}
*/
/*
function Detail() {
  return (
    <div>
      <h5 className="title">hello, yeoman app!</h5>
      <div><a href="#/">返回首页</a></div>
      <div>这是详情页</div>
    </div>
  );
}
*/
// 最终渲染
ReactDom.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/topic" component={Topic} />
      <Route path="/explore" component={Explore} />
      <Route path="/info" component={Info} />
    </Router>
  </Provider>
, document.getElementById('app'));
