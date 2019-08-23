// request('https://jsonplaceholder.typicode.com/albums')
// import * as request from 'superagent'

import React, { Component } from 'react'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
// import { addAlbum } from '../../actions/addAlbum'
import { getAlbums } from '../../actions/setAlbums';

// const sleep

class AlbumsListContainer extends Component {
  componentDidMount() {
    this.props.getAlbums()
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
export default connect(mapStateToProps, { getAlbums })(AlbumsListContainer)
