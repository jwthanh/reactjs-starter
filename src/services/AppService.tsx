import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse
} from './typed';
import APIInstance from './instance';

const login = async (req: LoginRequest): Promise<LoginResponse> => {
  try {
    // return await APIInstance.post('/auth/login', req);
    return JSON.parse(`{
      "code": "success",
      "data": {
          "Token": "token_secret",
          "Username": "username_is_here",
          "Fullname": "Full Name is Here",
          "Code": "0000000"
      },
      "message": "Đăng nhập thành công"
  }`);
  } catch (e) {
    throw e;
  }
};

const register = async (req: RegisterRequest): Promise<RegisterResponse> => {
  try {
    // return await APIInstance.post('/auth/login', req);
    return JSON.parse(`{
      "code": "success",
      "data": {
          "Token": "token_secret",
          "Username": "username_is_here",
          "Fullname": "Full Name is Here",
          "Code": "0000000"
      },
      "message": "Đăng nhập thành công"
  }`);
  } catch (e) {
    throw e;
  }
};

export default {
  login,
  register
};
