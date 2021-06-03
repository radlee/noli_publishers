import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import bgimage from '../assets/gallery/bg.jpeg';

const JumboBG = (props) => {
    return (
        <div className="container">
            <Jumbotron fluid style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Container className="jumbo-man">
                    <h2>About Noli Publishers</h2>
                    <p>
                        Publishing House based in Delft South, Cape Town.
                    </p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default JumboBG;
