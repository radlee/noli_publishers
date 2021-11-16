import React from 'react';
import { Card, CardImg, Col, Container, Row, } from 'react-bootstrap';
import { CardBody, CardText, CardTitle } from 'reactstrap';

import pic1 from '../assets/gallery/team/one.jpeg';
import pic2 from '../assets/gallery/team/four.jpeg';
import pic3 from '../assets/gallery/team/three.jpeg';



const CardList = (props) => {


    return (

        <Container>

            <Row>
                <Col sm>
                    <Card className="shadow" style={{ width: '18rem' }}>
                        <CardImg variant="top" src={pic1} />
                        <CardBody className="team-body" >
                            <CardTitle>Name One</CardTitle>
                            <CardText>
                                Description of Team Member one
                            </CardText>
                            {/* <Button variant="primary">Follow</Button> */}
                        </CardBody>
                    </Card>
                </Col>
                <Col sm>
                    <Card className="shadow" style={{ width: '18rem' }}>
                        <CardImg variant="top" src={pic2} />
                        <CardBody className="team-body">
                            <CardTitle>Name Two</CardTitle>
                            <CardText>
                                Description of Team Member Two
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm>
                    <Card className="shadow" style={{ width: '18rem' }}>
                        <CardImg variant="top" src={pic3} />
                        <CardBody className="team-body">
                            <CardTitle>Name Three</CardTitle>
                            <CardText>
                                Description of Team Member Three
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );

}

export default CardList;