import React from 'react';
import { Card, CardImg, Col, Container, Row, } from 'react-bootstrap';
import { CardBody, CardText, CardTitle } from 'reactstrap';

import pic1 from '../assets/gallery/slide-pictures/gallery-1.jpg';
import pic2 from '../assets/gallery/slide-pictures/gallery-2.jpg';
import pic3 from '../assets/gallery/slide-pictures/gallery-3.jpg';



const HomeCardList = (props) => {


    return (

        <Container>

            <Row>
                <Col sm>
                    <Card className="shadow" style={{ width: '18rem' }}>
                        <CardImg variant="top" src={pic1} />
                        <CardBody className="team-body" >
                            <CardTitle>Service One</CardTitle>
                            <CardText>
                                Description of Service One
                            </CardText>
                            {/* <Button variant="primary">Follow</Button> */}
                        </CardBody>
                    </Card>
                </Col>
                <Col sm>
                    <Card className="shadow" style={{ width: '18rem' }}>
                        <CardImg variant="top" src={pic2} />
                        <CardBody className="team-body">
                            <CardTitle>Service Two</CardTitle>
                            <CardText>
                                Description of Service Two
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm>
                    <Card className="shadow" style={{ width: '18rem' }}>
                        <CardImg variant="top" src={pic3} />
                        <CardBody className="team-body">
                            <CardTitle>Service Three</CardTitle>
                            <CardText>
                                Description of Service Three
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );

}

export default HomeCardList;