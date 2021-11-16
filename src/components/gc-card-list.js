import React from 'react';
import { Card, CardImg, Col, Container, Row, } from 'react-bootstrap';

import pic2 from '../assets/logo/default_blk_2.jpg';



const GCCardList = (props) => {


    return (

        <Container>

            <Row>
                <Col sm>
                  
                </Col>
                <Col sm>
                    <Card className="shadow">
                        <CardImg variant="top" src={pic2} />
                       
                    </Card>
                </Col>
                <Col sm>
                   
                </Col>
            </Row>
        </Container>
    );

}

export default GCCardList;