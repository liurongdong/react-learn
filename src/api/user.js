import request from "../utils/fetch";
import url from "../utils/fetchApi";

// 登陆
export function fetchUserLogin(params) {
  return request({
    url: url.api + "/login",
    method: "post",
    params
  });
}

// // 获取用户
// export function fetchUser(params) {
//   return request({
//     url: "/manage/adminUser/querySubordinate",
//     method: "get",
//     params
//   });
// }
