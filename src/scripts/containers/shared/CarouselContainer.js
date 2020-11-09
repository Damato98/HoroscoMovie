import Icon from '../../components/shared/Icon'

const CarouselContainer = (props) => {

    let eButtons = (<>
        <button className="slideshow-button button-left" onClick={() => {props.moveCarousel(-1)}}>
            <Icon href="#" src="/icons/arrow-left.svg" width="16" height="16" />
        </button>
        <button className="slideshow-button button-right" onClick={() => {props.moveCarousel(1)}}>
            <Icon href="#" src="/icons/arrow-right.svg" width="16" height="16" />
        </button>
    </>);

    if (props.showButtons)
        eButtons = (<></>);

    return (
        <div className="slideshow-container">
            {eButtons}
            <div className="slideshow-items-container" ref={(ref) => { props.updateContainerRef(ref); }}>
                {props.items}
            </div>
        </div>
    )
}

export default CarouselContainer