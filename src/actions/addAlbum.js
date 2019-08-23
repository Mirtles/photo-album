export const ADD_ALBUM = 'ADD_ALBUM'

export function addAlbum(title) {
  return {
    type: ADD_ALBUM,
    payload: {
      id: Math.floor(Math.random() * 10000),
      title
    }
  }
}