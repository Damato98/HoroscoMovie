import React, { Component } from 'react';
import MovieContainer from '../containers/MovieContainer'

class Movie extends Component {

    constructor() {
        super();

        this.items = [0, 1, 2, 3, 4, 5];
    }
    render() {
        return (
            <MovieContainer items={this.items} />
        )
    }
}

export default Movie