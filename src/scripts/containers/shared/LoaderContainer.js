import Spinner from 'react-bootstrap/Spinner'

function LoaderContainer() {
    return (
        <div className="loader-container">
            <Spinner className="loader" animation="border" />
        </div>
    )
}

export default LoaderContainer;