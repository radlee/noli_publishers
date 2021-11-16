import React from 'react';
import { Jumbotron } from 'reactstrap';
import bgimage from '../assets/gallery/bg_gc.jpeg';
import bgimage2 from '../assets/gallery/bg3.png';
import GCCardList from '../components/gc-card-list';

const Landing = (props) => {
  return (
    <div className="">
      <Jumbotron className="bg-image" fluid style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
        <h1 className="display-3">THE GO <span className="gc">CRAZY</span> EXPERIENCE</h1>
        {/* <p className="lead">Together We Can Make a Change</p> */}
        <br />
        <hr className="my-2" /> 
        <br />
        <p className="sub-lead">
        <span className="lead-band">
        Commited to building up a <strong>Proud & Leading Media and Entertainment Management Company</strong> as a revolutionary solution to <span className="link"><em>Link</em></span> <strong>Brands and Consumers</strong> by means of delivering distinctive qualities in <strong><span className="brand-com">Brand Communication </span> and <span className="remark-ee">Remarkable Entertainment Experiences.</span></strong>
        </span>
        </p>
        <br />
        <hr className="my-2" /> 
        <br />
        {/* <p className="button-text">
          <Button className="button-color" href="/about">Subscribe to get a member profile</Button>
        </p> */}
    </Jumbotron>
    
    <div className="divider" fluid="md">
      <br />
      <h1 className="display-3 commited">Commited to <span className="gc">Quality</span></h1>
      <br />
    </div>

    <Jumbotron className="bg-image" fluid style={{ backgroundImage: `url(${bgimage2})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
    <br />
        <GCCardList />
        <br />
        <h1 className="display-3">Professional Individuals</h1>
        <br />
        <p>
            We offer hands-on personal service.
        </p>
        {/* <p className="button-text">
          <Button className="button-color" href="/about">Subscribe to get a member profile</Button>
        </p> */}
      </Jumbotron>

      <div className="divider" fluid="md">
        <br />
        <h1 className="display-3 commited">Wit with <span className="gc">Brand</span> Communication</h1>
        <br />
      </div>


    </div>
  );
};

export default Landing;