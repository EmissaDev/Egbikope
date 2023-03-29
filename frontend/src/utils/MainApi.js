import { BASE_URL } from '../utils/Constants';
class MainApi {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  /**
   * This method will expand later and consider current user's token
   * Add headers for Webp images -> check tuto from web.dev
   */
  _setHeaders() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/json; text/html; text/javascript; charset=utf-8; multipart/form-data; boundary=something'
    }
  }

  _checkResult(res) {
    return (res.ok ? res.json() : Promise.reject('Error!' + res.statusText));
  }

  /**
   * Load Slide show images for home page
   */
  gethomeImages() {
    return fetch(this._baseUrl, {
      method: "GET",
      headers: this._headers
    })
    .then(res => this._checkResult(res))
  }

  /**
   * Load About section images
   */
  getAboutData() {
    return fetch(this._baseUrl + '/about', {
      method: "GET",
      headers: this._headers
    })
    .then(res => this._checkResult(res))
  }

  /**
   * Load Cheed images
   */
  getCentreData() {
    return fetch(this._baseUrl + '/cheed', {
      method: "GET",
      headers: this._headers
    })
    .then(res => this._checkResult(res))
  }

  /**
   * Load Association images
   */
  getAssociationData() {
    return fetch(this._baseUrl + '/association', {
      method: "GET",
      headers: this._headers
    })
    .then(res => this._checkResult(res))
  }

  /**
   * Load Activity images for home page
   */
  getActivityData() {
    return fetch(this._baseUrl + '/activities', {
      method: "GET",
      headers: this._headers
    })
    .then(res => this._checkResult(res))
  }

  /**
   * Collect all data and only then render them
   */
  getAppInfo() {
    return Promise.all([
      this.gethomeImages(), this.getAboutData(), this.getCentreData(), this.getEblizanData(), this.getActivityData()
    ])
  }
}


const mainApi = new MainApi({ baseUrl: BASE_URL });

export default mainApi;