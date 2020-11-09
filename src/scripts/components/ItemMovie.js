import React, { Component } from 'react'
import ItemMovieContainer from '../containers/ItemMovieContainer'

class ItemMovie extends Component {
    constructor(props){
        super(props);

        this.containerItemStyle = {
            width: props.widthPercentageItem + '%'
        }
    }

    render() {
        return (
            <ItemMovieContainer 
                containerItemStyle={this.containerItemStyle} 
                addItemRef={this.props.addItemRef}
            />
        )
    }
}

export default ItemMovie