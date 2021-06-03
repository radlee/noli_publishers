import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Landing = (props) => {
  return (
    <div className="container">
      <Jumbotron>
        <h1 className="display-3">Noli Publishers</h1>
        <p className="lead">Together We Can Make a Change</p>
        <hr className="my-2" />
        <p className="sub-lead">Think Big, Publish Bigger.</p>
        <p className="lead">
          <Button color="primary" href="/about">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Landing;