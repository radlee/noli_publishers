import React from 'react';
import { Card, CardImg, Col, Container, Row, } from 'react-bootstrap';
import { Jumbotron } from 'reactstrap';

import pic1 from '../assets/gallery/portfolio/one.jpg';
import pic2 from '../assets/gallery/portfolio/two.jpg';
import pic3 from '../assets/gallery/portfolio/three.jpg';
import pic4 from '../assets/gallery/portfolio/four.jpg';
import pic5 from '../assets/gallery/portfolio/five.jpg';
import pic6 from '../assets/gallery/portfolio/six.jpg';

const Portfolio = (props) => {


    return (

        <Container>

            <br />
            <h1 className="display-3">Our Portfolio</h1>
            <br />

            <Row>
                <Col sm>
                    <Jumbotron fluid className="theme">
                        <Container className="jumbo-man">
                            <Card className="shadow" style={{ width: '18rem' }}>
                                <CardImg variant="top" src={pic1} />
                            </Card>
                        </Container>
                    </Jumbotron>

                </Col>
                <Col sm>
                    <Jumbotron fluid className="theme">
                        <Container className="jumbo-man">
                            <h1>Inside Design</h1>
                            <p>Paragraph</p>
                        </Container>
                    </Jumbotron>

                </Col>
                <Col sm>
                    <Jumbotron fluid className="theme">
                        <Container className="jumbo-man">
                            <Card className="shadow" style={{ width: '18rem' }}>
                                <CardImg variant="top" src={pic2} />
                            </Card>
                        </Container>
                    </Jumbotron>
                </Col>
                <Col sm>
                    <Jumbotron fluid className="theme">
                        <Container className="jumbo-man">
                            <h1>Outside Design</h1>
                            <p>Paragraph</p>
                        </Container>
                    </Jumbotron>

                </Col>
            </Row>
            <Row>
                <Col sm>
                    <Jumbotron fluid className="theme">
                        <Container className="jumbo-man">
                            <Card className="shadow">
                                <CardImg variant="top" src={pic3} />
                            </Card>
                        </Container>
                    </Jumbotron>
                </Col>
                <Col sm>
                    <Jumbotron fluid className="theme">
                        <Container className="jumbo-man">
                            <h1>Front Design</h1>
                            <p>Paragraph</p>
                        </Container>
                    </Jumbotron>

                </Col>
                <Col sm>
                    <Jumbotron fluid className="theme">
                        <Container className="jumbo-man">
                            <Card className="shadow">
                                <CardImg variant="top" src={pic4} />
                            </Card>
                        </Container>
                    </Jumbotron>
                </Col>
                <Col sm>
                    <Jumbotron fluid className="theme">
                        <Container className="jumbo-man">
                            <h1>Back Design</h1>
                            <p>Paragraph</p>
                        </Container>
                    </Jumbotron>

                </Col>
            </Row>
            <Row>
                <Col sm>
                    <Jumbotron fluid className="theme">
                        <Container className="jumbo-man">
                            <Card className="shadow">
                                <CardImg variant="top" src={pic5} />
                            </Card>
                        </Container>
                    </Jumbotron>
                </Col>
                <Col sm>
                    <Jumbotron fluid className="theme">
                        <Container className="jumbo-man">
                            <h1>Front Design</h1>
                            <p>Paragraph</p>
                        </Container>
                    </Jumbotron>

                </Col>
                <Col sm>
                    <Jumbotron fluid className="theme">
                        <Container className="jumbo-man">
                            <Card className="shadow">
                                <CardImg variant="top" src={pic6} />
                            </Card>
                        </Container>
                    </Jumbotron>
                </Col>
                <Col sm>
                    <Jumbotron fluid className="theme">
                        <Container className="jumbo-man">
                            <h1>Back Design</h1>
                            <p>Paragraph</p>
                        </Container>
                    </Jumbotron>

                </Col>
            </Row>
        </Container>
    );

}

export default Portfolio;