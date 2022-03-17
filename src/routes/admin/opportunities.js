import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

const Apprenticeships = lazy(() => import('../../container/opportunities/apprenticeships'));
const Internships = lazy(() => import('../../container/opportunities/internships'));
const Funding = lazy(() => import('../../container/opportunities/funding'));
// const Performance = lazy(() => import('../../container/dashboard/Performance'));
// const Sales = lazy(() => import('../../container/dashboard/Sales'));

const OpportunitiesRoute = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/apprenticeships`} component={Apprenticeships} />
      <Route path={`${path}/internships`} component={Internships} />
      <Route path={`${path}/funding`} component={Funding} />
    </Switch>
  );
};

export default OpportunitiesRoute;
 
