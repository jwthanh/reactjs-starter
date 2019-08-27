import React, { useEffect } from "react";
import useStyles from "./SignInStyles";
import { Grid, CssBaseline, Paper } from "@material-ui/core";
import Copyright from "containers/Copyright";
import { useTranslation } from "react-i18next";
import SignInForm from "containers/SignInForm";

const SignInView = () => {
  const classes = useStyles();
  const { t } = useTranslation("signIn");

  useEffect(() => {
    document.title = `${t("common:title")} - ${t("signIn")}`;
  }, []);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <SignInForm />
        <Copyright />
      </Grid>
    </Grid>
  );
};

export default SignInView;
