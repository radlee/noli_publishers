import React, { useState } from 'react';
import {
    Col, Container, Row,

} from 'react-bootstrap';
import { Card, Button, CardImg } from 'react-bootstrap';
import { CardBody, CardText, CardTitle } from 'reactstrap';

import g1 from '../assets/gallery/slide-pictures/gallery-1.jpg';
import g2 from '../assets/gallery/slide-pictures/gallery-2.jpg';
import g3 from '../assets/gallery/slide-pictures/gallery-3.jpg';



const TeamList = (props) => {


    return (

        <Container>

            <Row>
                <Col sm>
                    <Card style={{ width: '18rem' }}>
                        <CardImg variant="top" src={g1} />
                        <CardBody>
                            <CardTitle>Name One</CardTitle>
                            <CardText>
                                Description of Team Member one
                            </CardText>
                            <Button variant="primary">Follow</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm>
                    <Card style={{ width: '18rem' }}>
                        <CardImg variant="top" src={g2} />
                        <CardBody>
                            <CardTitle>Name Two</CardTitle>
                            <CardText>
                                Description of Team Member Two
                            </CardText>
                            <Button variant="primary">Follow</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm>
                    <Card style={{ width: '18rem' }}>
                        <CardImg variant="top" src={g3} />
                        <CardBody>
                            <CardTitle>Name Three</CardTitle>
                            <CardText>
                                Description of Team Member Three
                            </CardText>
                            <Button variant="primary">Follow</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );

}

export default TeamList;