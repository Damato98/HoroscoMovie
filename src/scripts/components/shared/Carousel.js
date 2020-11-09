import React, { Component, Suspense } from 'react'
import Loader from '../../components/shared/Loader'
import ItemMovie from '../ItemMovie';

//const ItemMovie = React.lazy(() => import('../ItemMovie'));
const CarouselContainer = React.lazy(() => import('../../containers/shared/CarouselContainer'));

class Carousel extends Component {
    constructor(props) {
        super(props);

        /**** STATE ****/
        this.state = {
            isClient: false,
            itemsPerPage: (props.itemsPerPage > props.listItems.length) ? props.listItems.length : (props.itemsPerPage <= 0) ? 1 : props.itemsPerPage,
            items: []
        };

        /**** VARIABLE ****/
        this.containerRef = React.createRef();
        this.itemsRef = [];
        this.currentIndex = this.state.itemsPerPage - 1;

        /**** BINDING FUNCTION ****/
        this.updateContainerRef = this.updateContainerRef.bind(this);
        this.addItemRef = this.addItemRef.bind(this);
        this.moveCarousel = this.moveCarousel.bind(this);
    }

    componentDidMount() {
        let widthPercentageItem = 100 / this.state.itemsPerPage;

        this.setState({
            isClient: true,
            items: this.props.listItems.map(item => (
                    <ItemMovie 
                        key={item} 
                        addItemRef={this.addItemRef}
                        widthPercentageItem={widthPercentageItem}
                    />
                )
            )
        });
    };

    updateContainerRef(ref) {
        this.containerRef = ref;
    }

    addItemRef(ref) {
        this.itemsRef.push(React.createRef());
        this.itemsRef[this.itemsRef.length - 1] = ref;
    }

    moveCarousel(direccion) {
        let scrollTo;
        if (direccion == 1) {
            scrollTo = 'end';

            if ((this.currentIndex % this.state.itemsPerPage) == 0)
                this.currentIndex += this.state.itemsPerPage - 1;
        }
        else {
            scrollTo = 'start';

            if ((this.currentIndex % this.state.itemsPerPage) != 0)
                this.currentIndex -= this.state.itemsPerPage - 1;
        }

        this.currentIndex += direccion * this.state.itemsPerPage;

        if (this.currentIndex < 0)
            this.currentIndex = 0;
        else if (this.currentIndex >= this.props.listItems.length)
            this.currentIndex = this.props.listItems.length - 1;

        this.itemsRef[this.currentIndex].scrollIntoView({ 
            behavior: 'smooth',
            inline: scrollTo
        });
    }

    render() {
        return (
            <React.Fragment>
            { this.state.isClient && (
                <Suspense fallback={<Loader />}>
                    <CarouselContainer 
                        updateContainerRef={this.updateContainerRef} 
                        moveCarousel={this.moveCarousel}
                        items={this.state.items}
                        showButtons={(this.state.itemsPerPage >= this.state.items.length)}
                    />
                </Suspense>
            )}
            </React.Fragment>
        )
    }
}

export default Carousel;