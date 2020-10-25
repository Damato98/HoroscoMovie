import React, { Component } from 'react'
import HeaderContainer from '../containers/HeaderContainer'

class Header extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            pathname: props.pathname,
            icons: [{
                id: 0,
                href: '/',
                src: '/icons/house.svg',
                srcSelected: '/icons/house-fill.svg',
                width: '32',
                height: '32',
                selected: true
            },
            {   
                id: 1,
                href: '/movie',
                src: '/icons/play.svg',
                srcSelected: '/icons/play-fill.svg',
                width: '32',
                height: '32',
                selected: false
            },
            {   
                id: 2,
                href: '/tv',
                src: '/icons/tv.svg',
                srcSelected: '/icons/tv-fill.svg',
                width: '32',
                height: '32',
                selected: false
            },
            {   
                id: 3,
                href: '/music',
                src: '/icons/file-music.svg',
                srcSelected: '/icons/file-music-fill.svg',
                width: '32',
                height: '32',
                selected: false
            },
            {
                id: 4,
                href: '/about',
                src: '/icons/info-circle.svg',
                srcSelected: '/icons/info-circle-fill.svg',
                width: '32',
                height: '32',
                selected: false
            }],
            logo: {
                href: '/',
                src: '/img/icon.png',
                width: '32',
                height: '32'
            }
        };

        this.updateIconSelected = this.updateIconSelected.bind(this);
    }
    
    componentDidMount() {
        this.setState({ 
            pathname: this.props.pathname,
            icons: [{
                id: 0,
                href: '/',
                src: '/icons/house.svg',
                srcSelected: '/icons/house-fill.svg',
                width: '32',
                height: '32',
                selected: this.props.pathname === '/'
            },
            {   
                id: 1,
                href: '/movie',
                src: '/icons/play.svg',
                srcSelected: '/icons/play-fill.svg',
                width: '32',
                height: '32',
                selected: this.props.pathname === '/movie'
            },
            {   
                id: 2,
                href: '/tv',
                src: '/icons/tv.svg',
                srcSelected: '/icons/tv-fill.svg',
                width: '32',
                height: '32',
                selected: this.props.pathname === '/tv'
            },
            {   
                id: 3,
                href: '/music',
                src: '/icons/file-music.svg',
                srcSelected: '/icons/file-music-fill.svg',
                width: '32',
                height: '32',
                selected: this.props.pathname === '/music'
            },
            {
                id: 4,
                href: '/about',
                src: '/icons/info-circle.svg',
                srcSelected: '/icons/info-circle-fill.svg',
                width: '32',
                height: '32',
                selected: this.props.pathname === '/about'
            }],
            logo: {
                href: '/',
                src: '/img/icon.png',
                width: '32',
                height: '32'
            }
        });
    }

    componentDidUpdate(prevProps, prevState) {
        let newState = this.updateIconSelected(prevProps, prevState);
    }

    updateIconSelected(prevProps, prevState) {
        let newState = prevState;

        if (prevState.pathname !== this.props.pathname) {    
            newState.pathname = this.props.pathname;
            
            //Old selected from true to false
            let indexOldSelected = newState.icons.findIndex((element) => element.selected === true);
            if (indexOldSelected !== -1)
                newState.icons[indexOldSelected].selected = false;
    
            //New selected from false to true
            let indexNewSelected = newState.icons.findIndex((element) => element.href == this.props.pathname);
            if (indexNewSelected !== -1)
                newState.icons[indexNewSelected].selected = true;
    
            this.setState(newState);
        }

        return newState;
    }

    render() {
        return (
            <HeaderContainer icons={this.state.icons} logo={this.state.logo} />
        )
    }
}

export default Header