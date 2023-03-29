// authentication
import { BASE_URL } from "./Constants";
import { imgurID, imgurSecret, imgurRefreshToken } from "./secrets.env";


export const register = function (email, password, name) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password, name })
  })
}

export const authorize = function (email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password })
  })
}

export const authImgurAccess = function () {
  var formdata = new FormData();
  formdata.append("refresh_token", `${imgurRefreshToken}`);
  formdata.append("client_id", `${imgurID}`);
  formdata.append("client_secret", `${imgurSecret}`);
  formdata.append("grant_type", "refresh_token");

  var options = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  return fetch("https://api.imgur.com/oauth2/token", options)
    .then(response => response.text())
    .then(result => JSON.parse(result))
    .then(result => {
      localStorage.setItem('token', result.access_token)
      return result
    })
    .catch(error => console.log('error', error));
}