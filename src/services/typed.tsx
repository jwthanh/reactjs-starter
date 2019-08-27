interface response {
  code: string;
  data: any;
  message: string;
}

export interface LoginRequest {
  username: string;
  hashPassword: string;
}

export interface LoginResponse extends Omit<response, 'data'> {
  data: {
    Token: string;
    Username: string;
    Fullname: string;
    Code: string;
    Role: string;
  };
}

export interface RegisterRequest {
  username: string;
  password: string;
  fullname: string;
}

export interface RegisterResponse extends LoginResponse {}
