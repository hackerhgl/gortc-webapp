import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFoundPage from 'pages/NotFound';

const HomePage = React.lazy(() => import('pages/Home'));
// const LogInPage = React.lazy(() => import('pages/LogIn'));
// const UsersPage = React.lazy(() => import('pages/Users'));
// const LicensePlatesPage = React.lazy(() => import('pages/LicensePlates'));

function AppRouter(): JSX.Element {
  return (
    <Router>
      <React.Suspense fallback={<h2>Loading</h2>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          {/* <Route path="/logIn" exact component={LogInPage} />
          <Route path="/users" exact component={UsersPage} />
          <Route path="/licensePlates" exact component={LicensePlatesPage} /> */}
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default AppRouter;
