const ItemMovieContainer = (props) => {
    return (
        <div className="slideshow-container-item" style={props.containerItemStyle} ref={(ref) => { props.addItemRef(ref); }}>
            <img className="slideshow-item" src="https://wallpaperaccess.com/full/205585.jpg" />
        </div>
    )
}

export default ItemMovieContainer