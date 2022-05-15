import React, { Suspense } from 'react';
import { Spin } from 'antd';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Dashboard from './dashboard';
import Opportunities from './opportunities';
import Articles from './articles';
import Events from './events';
import Resources from './resources';
import Users from './users';
import Organisations from './organisations';
import EditProfile from './editprofile';
import withAdminLayout from '../../layout/withAdminLayout';

const Admin = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Suspense
        fallback={
          <div className="spin">
            <Spin />
          </div>
        }
      >
        <Route path={path} component={Dashboard} />
        <Route path={path} component={Opportunities} />
        <Route path={path} component={Articles} />
        <Route path={path} component={Events} />
        <Route path={path} component={Resources} />
        <Route path={path} component={Users} />
        <Route path={path} component={Organisations} />
        <Route path={path} component={EditProfile} />
      </Suspense>
    </Switch>
  );
};

export default withAdminLayout(Admin);
