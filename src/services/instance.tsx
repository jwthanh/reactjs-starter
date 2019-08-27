import axios from "axios";
import { SERVER_URL } from "config/const";

const stringFromError = (error: any): string => {
  let { message } = error;
  const { fields } = error;
  if (!message && fields) {
    Object.keys(fields).forEach(key => {
      let subMessage = `${key.toUpperCase()}:`;
      fields[key].forEach((m: string) => {
        subMessage = `${subMessage}\n${m}`;
      });
      message = `${subMessage}\n`;
    });
  }
  return `${message}\n[${error.code || ""}]`;
};

const APIInstance = axios.create({
  timeout: 20000,
  baseURL: SERVER_URL,
  paramsSerializer(params) {
    const searchParams = new URLSearchParams();
    // eslint-disable-next-line no-restricted-syntax
    for (const key of Object.keys(params)) {
      const param = params[key];
      if (param !== undefined) {
        if (Array.isArray(param)) {
          let ids = "";
          param.forEach((p, i) => {
            if (i + 1 === param.length) {
              ids += `${p}`;
            } else {
              ids += `${p},`;
            }
          });
          searchParams.append(key, ids);
        } else {
          searchParams.append(key, param);
        }
      }
    }
    return searchParams.toString();
  }
});

APIInstance.interceptors.request.use(
  config => {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.log("Request:\n", config);
    }

    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

APIInstance.interceptors.response.use(
  response => {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.log("Response:\n", response);
    }

    return response.data;
  },
  error => {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.log("Response error:\n", error);
      // eslint-disable-next-line no-console
      console.log("Response error response:\n", error.response);
    }
    const { response } = error;
    if (response) {
      const { status, data } = response;
      if (status >= 500) {
        return Promise.reject(
          new Error(
            `Xin lỗi. Rất tiếc vì đã xảy ra sự cố này. Chúng tôi đang xem xét và khắc phục. Vui lòng thử lại sau.\n(code: ${status})`
          )
        );
      }
      if (data) {
        const errors = data.error;
        if (errors) {
          const message = stringFromError(errors);
          if (message) return Promise.reject(new Error(message));
        }
      }
    }
    if (error.code === "ECONNABORTED") {
      return Promise.reject(
        new Error("Thời gian kết nối đến máy chủ quá lâu. Vui lòng thử lại.")
      );
    }
    return Promise.reject(error);
  }
);

export default APIInstance;
