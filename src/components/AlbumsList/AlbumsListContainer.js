// request('https://jsonplaceholder.typicode.com/albums')

import * as request from 'superagent'
import React, { Component } from 'react'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
// import { addAlbum } from '../../actions/addAlbum'
import { setAlbums } from '../../actions/setAlbums';

// const sleep = time => new Promise(
//   resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
// )

class AlbumsListContainer extends Component {
  componentDidMount() {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => this.props.setAlbums(response.body))
  }

  render() {
    if (!this.props.albums) { return "loading.." }
    return (
      <AlbumsList albums={this.props.albums} />
    )
  }
}

const mapStateToProps = (state) => {
  if (state.albums) {
    return {
      albums: state.albums
    }
  }
}

// use dispatch to pass function:
//    connect()(this component) 
// use function directly:
//    connect(state/null, prop.function)(this component)
export default connect(mapStateToProps, { setAlbums })(AlbumsListContainer)
