import React from 'react';
import { Image, Container, Row, Col, Card } from 'react-bootstrap';
import { CardBody, CardHeader, CardText } from 'reactstrap';
import logo from '../assets/logo/np_logo_main2.png';
const Logo = (props) => {
    return (

        <div className="container">
            <Container>
                <Row>
                    <Col sm>
                        <Image className="image shadow" src={logo} fluid />
                    </Col>
                    <br />
                    <Col sm>
                        <Card
                            bg="warning"
                            text='light'
                            className="mb-2 shadow"
                        >
                            <CardHeader>What we do ?</CardHeader>
                            <CardBody>
                                <CardText>
                                    We review unpublished manuscripts and help in editing and making sure that we publish and distribute your work through our social media and online publications.
                        </CardText>
                                <footer className="blockquote-footer">
                                    Noli Publishers <cite className="text-muted" title="Source Title">Together We Can Make a Change</cite>
                                </footer>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Logo;