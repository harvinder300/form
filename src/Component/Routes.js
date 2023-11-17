import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ConsumerInfo from './Component/ConsumerInfo';
import DashBoardTable from './Component/DashBoardTable';
import DashBoardFirm from './DashBoardFirm';

const Routes = () => (
  <Switch>
    <Route path="/consumer-info" component={<ConsumerInfo />} />

   
    <Route path="/dashboard-table" component={DashBoardTable} />
    <Route path="/dashboard-firm" component={DashBoardFirm}/>
  </Switch>
);

export default Routes;
  