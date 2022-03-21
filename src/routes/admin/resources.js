import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

const Resources = lazy(() => import('../../container/resources'));
// const Performance = lazy(() => import('../../container/dashboard/Performance'));
// const Sales = lazy(() => import('../../container/dashboard/Sales'));

const ResourcesRoute = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/resources`} component={Resources} />
    </Switch>
  );
};

export default ResourcesRoute;
 
