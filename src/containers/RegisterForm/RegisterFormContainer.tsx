import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import RegisterFormView from "./RegisterFormView";
import AppService from "services/AppService";
import { authAction } from "redux/reducers/auth";

const mapStateToProps = (state: any) => {
  return {};
};

type Props = ReturnType<typeof mapStateToProps> & {
  dispatch: Dispatch;
};

const RegisterFormContainer: React.FC<Props> = React.memo(props => {
  const { dispatch } = props;

  const _registerAsync = async (data: any) => {
    try {
      const result = await AppService.register(data);
      return result.data;
    } catch (e) {
      throw e;
    }
  };

  const _onRegister = (data: any, event: React.FormEvent) => {
    event.preventDefault();
    _registerAsync(data)
      .then(res => {
        dispatch(authAction.setToken(res.Token));
        dispatch(authAction.setCurrentUser(res));
        dispatch(push("/dashboard"));
      })
      .catch(e => {});
  };
  return <RegisterFormView onRegister={_onRegister} />;
});

export default connect(mapStateToProps)(RegisterFormContainer);
