import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import MD5 from 'crypto-js/md5';
import { authAction } from 'redux/reducers/auth';
import SignInFormView from './SignInFormView';
import AppService from 'services/AppService';

const mapStateToProps = (state: any) => {
  return { isRemember: state.auth.isRemember };
};

type Props = ReturnType<typeof mapStateToProps> & {
  isRemember: boolean;
  dispatch: Dispatch;
};

const SignFormContainer: React.FC<Props> = React.memo(props => {
  const { isRemember, dispatch } = props;

  const _loginAsync = async (data: any) => {
    try {
      const result = await AppService.login(data);
      return result.data;
    } catch (e) {
      throw e;
    }
  };

  const _onLogin = (data: any, event: React.FormEvent) => {
    event.preventDefault();
    _loginAsync({
      username: data.username,
      hashPassword: MD5(data.password).toString()
    })
      .then(res => {
        dispatch(authAction.setToken(res.Token));
        dispatch(authAction.setCurrentUser(res));
        dispatch(push('/dashboard'));
      })
      .catch(e => {
        console.log(e);
      });
  };

  const _onRememberMeChecked = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    dispatch(authAction.setIsRemember(!isRemember));
  };

  return (
    <SignInFormView
      onLogin={_onLogin}
      onRememberMeChecked={_onRememberMeChecked}
      isRemember={isRemember}
    />
  );
});

export default connect(mapStateToProps)(SignFormContainer);
