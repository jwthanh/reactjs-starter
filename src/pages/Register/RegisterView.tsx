import React, { useEffect } from "react";
import useStyles from "./RegisterStyles";
import { Grid, CssBaseline, Paper } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import RegisterForm from "containers/RegisterForm";
import Copyright from "containers/Copyright";

const RegisterView = () => {
  const classes = useStyles();
  const { t } = useTranslation("register");

  useEffect(() => {
    document.title = `${t("common:title")} - ${t("register")}`;
  }, []);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <RegisterForm />
        <Copyright />
      </Grid>
    </Grid>
  );
};

export default RegisterView;
