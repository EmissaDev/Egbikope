import { DATA_URL } from "./Constants";
import { imgurUser, imgurID } from "./secrets.env.js";



class ImgurApi {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  /**
   * Get all the albums associated with the account. Must be logged in as the user to see secret and hidden albums.
   * https://api.imgur.com/3/account/{{username}}/albums/{{page}}
   */
  async retrieveAlbums(token) { // this only retrive the first album
    var options = {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`
      },
      redirect: 'follow'
    }

    // console.log('Header:', options.headers)
    try {
      const response = await fetch(`${this._baseUrl}/account/${imgurUser}/albums`, options);
      const result_1 = await response.text();
      let res = [];
      const json = JSON.parse(result_1);
      for (var i in json)
        res.push([i, json[i]]);
      return res[0];
    } catch (error) {
      return console.log('error', error);
    }
  }

  /**
   * Return all of the images in an album.
   * https://api.imgur.com/3/album/{{albumHash}}/images
  */
  async retrieveImages(albumID) {
    var options = {
      method: 'GET',
      headers: {
        "Authorization": `Client-ID ${imgurID}`
      },
      redirect: 'follow'
    }

    // console.log('Header:', options.headers)
    try {
      const response = await fetch(`${this._baseUrl}/album/${albumID}/images`, options);
      const result_1 = await response.text();
      let res = [];
      const json = JSON.parse(result_1);
      for (var i in json)
        res.push([i, json[i]]);
      return res[0];
    } catch (error) {
      return console.log('error', error);
    }
  }
}

const dataApi = new ImgurApi({
  baseUrl: DATA_URL,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
});

export default dataApi;