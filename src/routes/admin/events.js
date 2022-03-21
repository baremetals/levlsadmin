import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

const Events = lazy(() => import('../../container/events'));
// const Performance = lazy(() => import('../../container/dashboard/Performance'));
// const Sales = lazy(() => import('../../container/dashboard/Sales'));

const EventsRoute = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/events`} component={Events} />
    </Switch>
  );
};

export default EventsRoute;
 
