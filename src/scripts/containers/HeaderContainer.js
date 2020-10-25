import Icon from '../components/shared/Icon'
import { Container, Row, Col, Nav } from 'react-bootstrap'

function HeaderContainer(props) {
    const navIconsComponents = props.icons.map(icon => 
        <Nav.Item key={icon.id}>
            <Icon 
                href={icon.href}
                src={ (icon.selected) ? icon.srcSelected : icon.src }
                width={icon.width}
                height={icon.height}
            />
        </Nav.Item>
    );

    return (
        <div className="header">
            <Container fluid>
                <Row>
                    <Col xs="2" sm="2" md="3" lg="3" xl="3">
                        <Nav fill className="justify-content-start">
                            <Icon 
                                href={props.logo.href}
                                src={props.logo.src}
                                width={props.logo.width}
                                height={props.logo.height}
                            />
                        </Nav>
                    </Col>
                    <Col xs="8" sm="8" md="6" lg="6" xl="6">
                        <Nav fill className="justify-content-center">
                            {navIconsComponents}
                        </Nav>
                    </Col>
                    <Col xs="2" sm="2" md="3" lg="3" xl="3">
                        <Nav fill className="justify-content-end">
                            { /*Insertar User login Component*/ }
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeaderContainer