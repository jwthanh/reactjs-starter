import React from "react";
import useStyles from "./RegisterFormStyles";
import {
  Grid,
  Avatar,
  Typography,
  TextField,
  Button,
  Link
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useTranslation } from "react-i18next";
import useForm from "react-hook-form";

interface Props {
  onRegister: (data: any, event: React.FormEvent) => void;
}

const RegisterFormView = (props: Props) => {
  const { onRegister } = props;
  const classes = useStyles();
  const { t } = useTranslation("register");
  const { register, handleSubmit } = useForm();
  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {t("register")}
      </Typography>
      <form
        className={classes.form}
        name="register"
        onSubmit={handleSubmit(onRegister)}
        noValidate
      >
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label={t("username")}
          name="username"
          autoFocus
          inputRef={register}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label={t("password")}
          type="password"
          id="password"
          inputRef={register}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label={t("repassword")}
          type="password"
          id="repassword"
          inputRef={register}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="fullname"
          label={t("fullName")}
          name="fullname"
          autoFocus
          inputRef={register}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          {t("register")}
        </Button>
        <Grid container>
          <Grid item xs></Grid>
          <Grid item>
            <Link href="/login" variant="body2">
              {t("signIn")}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default RegisterFormView;
