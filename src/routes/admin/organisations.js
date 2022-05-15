import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

const Organisations = lazy(() => import('container/organisations'));
// const Performance = lazy(() => import('../../container/dashboard/Performance'));
// const Sales = lazy(() => import('../../container/dashboard/Sales'));

const OrganisationRoute = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/organisations`} component={Organisations} />
    </Switch>
  );
};

export default OrganisationRoute;
