import React, {Component} from 'react'
import IconContainer from '../../containers/shared/IconContainer'

class Icon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <IconContainer 
                href={this.props.href}
                src={this.props.src}
                width={this.props.width}
                height={this.props.height} 
            />
        )
    }
}

export default Icon