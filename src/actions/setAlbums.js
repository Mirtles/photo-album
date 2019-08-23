import request from 'superagent'

export const SET_ALBUMS = 'SET_ALBUMS'

export function getAlbums() {
  return function (dispatch) {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        dispatch(setAlbums(response.body))
      })
  }
}

function setAlbums(albums) {
  return {
    type: SET_ALBUMS,
    payload: albums
  }
}