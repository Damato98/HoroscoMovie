import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import React from 'react'
import { Container, Row, Col, Nav, Spinner } from 'react-bootstrap'
import Carousel from '../components/shared/Carousel'

function MovieContainer(props) {
    return (
        <div id="divMovie">
            <Container fluid>
                <Row>
                    <Col xs="12" sm="12" md="12" lg="12" xl="12" className="justify-content-start">
                        <h3>Test movie</h3>
                    </Col>
                    <Col xs="12" sm="12" md="12" lg="12" xl="12" className="justify-content-center">
                        <Carousel listItems={props.items} itemsPerPage={3} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MovieContainer;