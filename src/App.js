import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.less';
import {Home} from './pages/Home'
import {Hrm} from './pages/Hrm'

// https://medium.com/i-am-mike/%E4%BD%BF%E7%94%A8axios%E6%99%82%E4%BD%A0%E7%9A%84api%E9%83%BD%E6%80%8E%E9%BA%BC%E7%AE%A1%E7%90%86-557d88365619

const App = () => (
  <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Hrm/:id" exact component={Hrm} />
      { /* 路径不存在，则回到主页。 */ }
      <Route component={Home} />
    </Switch>
  // <div className="App">
  //   {/* <Route path="/hrm/g1iivfrxes6j1701001" component={Hrm} /> */}
  //  app
  // </div>
);

export default App;