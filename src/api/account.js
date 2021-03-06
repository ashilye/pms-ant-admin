import axios from "@/utils/axios";

export function login(data) {
  return axios({
    method: "post",
    url: "/user-login/login",
    data
  });
}

export function getInfo(token) {
  return request({
    url: "/vue-admin-template/user/info",
    method: "get",
    params: { token }
  });
}

export function logout() {
  return request({
    url: "/vue-admin-template/user/logout",
    method: "post"
  });
}
