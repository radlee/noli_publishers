import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import bgimage from '../assets/gallery/bg_gc.jpeg';

const JumboBG = (props) => {
    return (
        <div className="container">
            <Jumbotron fluid style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Container className="jumbo-man">
                    <h2>The Go <span className="gc">Crazy</span> Experience</h2>
                    <hr className="my-2" /> 
                    <p>
                        <span className="band">Commited to building up a Proud & Leading Media and Entertainment Management Company as a revolutionary solution to Link Brands and Consumers by means of delivering distinctive qualities in Brand Communication and Remarkable Entertainment Experiences.</span>
                    </p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default JumboBG;
