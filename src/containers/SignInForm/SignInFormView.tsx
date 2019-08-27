import React from "react";
import {
  Grid,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useTranslation } from "react-i18next";
import useStyles from "./SignInFormStyles";
import useForm from "react-hook-form";

interface Props {
  isRemember: boolean;
  onLogin: (data: any, event: React.FormEvent) => void;
  onRememberMeChecked: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
}

const SignInFormView = (props: Props) => {
  const { onLogin, onRememberMeChecked, isRemember } = props;
  const { t } = useTranslation("signIn");
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {t("signIn")}
      </Typography>
      <form
        className={classes.form}
        name="login"
        onSubmit={handleSubmit(onLogin)}
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
          autoComplete="username"
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
          autoComplete="current-password"
          inputRef={register}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={isRemember}
              onChange={onRememberMeChecked}
              value="remember"
              color="primary"
            />
          }
          label={t("rememberMe")}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          {t("signIn")}
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              {t("forgotPassword")}
            </Link>
          </Grid>
          <Grid item>
            <Link href="/register" variant="body2">
              {t("register")}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default SignInFormView;
