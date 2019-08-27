import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import loading from 'asset/img/loading.gif';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
const SignIn = lazy(() => import('pages/SignIn'));
const Register = lazy(() => import('pages/Register'));
const Dashboard = lazy(() => import('pages/Dashboard'));
const PrivateRoute = lazy(() => import('./PrivateRoute'));

const Routes = (props: any) => (
  <Suspense
    fallback={
      <Grid container direction="row" justify="center" alignItems="center">
        <img src={loading} alt="loading" />
      </Grid>
    }
  >
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" component={SignIn} />
      <PrivateRoute
        path="/dashboard"
        component={Dashboard}
        authed={props.auth}
      />
      <Route exact path="/" component={SignIn} />
    </Switch>
  </Suspense>
);

const mapStateToProps = (state: any) => ({ auth: state.auth });

export default connect(mapStateToProps)(Routes);
