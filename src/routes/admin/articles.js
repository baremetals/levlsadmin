import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

const Articles = lazy(() => import('../../container/articles'));
// const Performance = lazy(() => import('../../container/dashboard/Performance'));
// const Sales = lazy(() => import('../../container/dashboard/Sales'));

const ArticlesRoute = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/articles`} component={Articles} />
    </Switch>
  );
};

export default ArticlesRoute;
 
